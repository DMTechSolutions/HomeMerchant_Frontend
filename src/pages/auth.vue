<template>
  <q-page>
    <div class="full-height row justify-around" center>
      <div class="q-mt-md col-xs-12 col-sm-5 col-md-4">
        <q-form class="q-gutter-md">
          <q-item-label class="headline">
            <h4>Login</h4>
          </q-item-label>
          <q-input
            filled
            v-model="modelData.email"
            :label="`User Name`"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type Username',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="modelData.password"
            :label="`Password`"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
            ]"
          />

          <div class="row">
            <q-btn
              class="item col-xs-12 col-sm-5 col-md-4"
              label="Sign In"
              type="button"
              no-caps
              @click="handleLogin"
            />
          </div>
        </q-form>
      </div>

      <div class="col-xs-12 col-sm-5 col-md-4">
        <div class="q-pa-md">
          <q-parallax :height="550">
            <template v-slot:media>
              <video width="900" height="550" autoplay loop muted>
                <source type="video/mp4" :src="videoConstr" />
              </video>
            </template>

            <h3 class="text-white">Video</h3>
          </q-parallax>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

import { useMutation } from '@vue/apollo-composable'

import { loginMutation } from 'src/graphql/auth'
import { useRouter } from 'vue-router'
// import * as videoConstr from 'src/assets/virtual-construction-4895204-4127299.mp4';

interface Auth {
  email: string;
  password: string;
}

export default defineComponent({
  name: 'LoginPage',
  setup () {
    const router = useRouter()
    function handleLogin () {
      console.log('login')

      // const { mutate: login } = useMutation(
      //   loginMutation,

      //   {
      //     variables: { authInput: modelData.value },
      //   }
      // );

      // login().then(({ data }: any) => {
      //    console.log(data);
      localStorage.setItem('authToken', 'data.authData.accessToken')
      // push to strore all
      // push token to local strorge
      router.push({
        name: 'Dashboard'
      })
      // });
    }

    const $q = useQuasar()
    const isPwd = ref(true)
    const check = ref(true)
    const loading = ref(false)
    const variables = ref(null)

    const modelData = ref({
      email: '',
      password: ''
    })

    return {
      $q,
      isPwd,
      check,
      loading,
      variables,
      modelData,

      handleLogin
    }
  }
})
</script>

<style lang="scss" scoped>
.item {
  background-color: white;
  font-size: 1.1rem;

  padding: 0.2em 0.5em;
  min-width: 190px;
  min-height: 25px;
  color: #1f40e6;
  border: 1px solid #1f40e6;
  border-radius: 0;
  cursor: pointer;
}
.item:hover {
  background-color: #1f40e6;
  font-size: 1.1rem;

  padding: 0.2em 0.5em;
  min-width: 190px;
  min-height: 25px;
  color: #fff;
  border: 1px solid #1f40e6;
  border-radius: 0;
  cursor: pointer;
}
</style>
