<template>
  <q-page>
    <div class="row justify-center">
      <div class="col-xs-11 col-sm-8 col-md-4 col-lg-3 col-xl-3">
        <div class="text-h5 flex justify-start">Login</div>
        <div class="q-mt-md">
          <q-input
          filled
          v-model="email"
          placeholder="Username Or E-mail"
          dense
          outlined
          lazy-rules
                   :rules="[
              (val) => (val && val.length > 0) || 'Please type Username',
            ]"
            />
          <q-input
            class="q-mt-md"
            filled
            type="password"
            v-model="password"
            outlined
            dense
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
            ]"
          />
        </div>
        <div style="margin-left: -6px" class="q-mt-md q-mb-xs">
          <q-checkbox
            size="xs"
            v-model="checked"
            label="Keep me signed In"
            color="blue"
          />
        </div>
        <div class="anchor-tag">
          <a>Forgot your password?</a>
        </div>
        <q-btn
          unelevated
          label="Sign In"
          class="q-mt-md primary-btn"
          no-caps
          style="width: 100%"
          @click="handleLogin"
        />
        <q-btn
          unelevated
          outlined
          label="Email me Link to Sign In"
          class="q-mt-md q-mb-md secondary-btn"
          no-caps
          style="width: 100%"
        />
        <p>
          Don't have account yet?
            <router-link to="/register">Join now > </router-link>
        </p>
        <p class="TC-text">
          By signing up, signing in or continuing, I agree to the
          <a
            href="https://www.houzz.in/termsOfUse"
            target="_blank"
            class="TC-text"
            >Houzz Terms of Use</a
          >
          and acknowledge the
          <a
            href="https://www.houzz.in/privacyPolicy"
            target="_blank"
            class="TC-text"
            >Houzz Privacy Policy</a
          >. I agree that Houzz may use my email address for marketing purposes.
          I can opt out at any time through my
          <a
            href="https://www.houzz.in/privacy-settings"
            target="_blank"
            class="TC-text"
            >settings</a
          >
        </p>
      </div>
      <q-separator vertical inset class="q-ml-md q-mr-md gt-sm" />
      <div class="col-xs-11 col-sm-8 col-md-4 col-lg-3 col-xl-2">
        <div class="gt-sm" style="height: 100px"></div>
        <div style="width: 320px;">
          <ContinueWithFb />
          <ContinueWithGoogle />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ContinueWithFb from 'components/ContinueWithFb.vue'
import ContinueWithGoogle from 'components/ContinueWithGoogle.vue'
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'

/* import { useMutation } from '@vue/apollo-composable'

import { loginMutation } from '../graphql/auth' */
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'LoginPage',
  setup () {
    const router = useRouter()

    async function handleLogin () {
      console.log('login')

      const variables = {
        loginInput: {
          email: email.value,
          password: password.value
        }
      }

      const response = await axios.post('http://localhost:3000/', {
        query: `mutation Mutation($loginInput: LoginInput) {
                loginUser(loginInput: $loginInput) {   
                  username
                  email
                  password
                  token,
                  usertype
                }
              }`,
        variables: JSON.stringify(variables)
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { loginUser } = response.data.data

      if (loginUser && loginUser !== null && loginUser !== undefined) {
        if (loginUser.usertype === 'seller') {
          router.push({
            name: 'seller'
          })
        } else {
          router.push({
            name: 'buyer'
          })
        }
      }
    }

    const $q = useQuasar()
    const isPwd = ref(true)
    const check = ref(true)
    const loading = ref(false)
    const variables = ref(null)
    const email = ref(null)
    const password = ref(null)

    return {
      $q,
      isPwd,
      check,
      loading,
      variables,
      email,
      password,
      checked: ref(true),

      handleLogin
    }
  },

  components: {
    ContinueWithFb,
    ContinueWithGoogle
  }
})
</script>
