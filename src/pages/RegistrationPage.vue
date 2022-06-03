<template>
    <q-page>
        <q-form
          @submit.prevent="onSubmit"
          class="q-gutter-md"
        >
          <div class="row justify-center">
                  <div class="col-xs-11 col-sm-8 col-md-4 col-lg-3 col-xl-3">
                    <div class="text-h5 flex justify-start">Sign up</div>
                    <div class="q-mt-md">
                        <q-input
                        filled
                        placeholder="Username"
                        v-model="username"
                        dense
                        outlined
                        lazy-rules
                                :rules="[
                            (val) => (val && val.length > 0) || 'Please type Username',
                          ]"
                          />
                        <q-input
                          filled
                          type="password"
                          v-model="password"
                          placeholder="password"
                          outlined
                          dense
                          lazy-rules
                          :rules="[
                            (val) =>
                              (val !== null && val !== '') || 'Please type your password',
                          ]"
                        />
                        <q-input
                        filled
                        placeholder="Email"
                        v-model="email"
                        dense
                        outlined
                        lazy-rules
                                :rules="[
                            (val) => (val && val.length > 0) || 'Please type Email',
                          ]"
                          />

                          <q-select
                          filled
                          dense
                          v-model="usertype"
                          :options="options"
                          />

                           <q-btn
                            unelevated
                            label="Submit"
                            class="q-mt-lg primary-btn"
                            no-caps
                            style="width: 100%"
                            type="submit"
                          />
                      </div>
                  </div>
              </div>
          </q-form>
    </q-page>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {

  name: 'RegistrationPage',

  setup () {
    const router = useRouter()
    const username = ref(null)
    const password = ref(null)
    const email = ref(null)
    const usertype = ref(null)

    return {
      model: ref(null),
      dense: ref(false),
      username,
      password,
      email,
      usertype,
      options: [
        'Buyer', 'Seller'
      ],

      async onSubmit () {
        const data = {
          registerInput: {
            username: username.value,
            email: email.value,
            password: password.value,
            usertype: usertype.value
          }
        }

        const response = await axios.post('http://localhost:3000/', {
          query: `mutation RegisterUser($registerInput: RegisterInput) {
                    registerUser(registerInput: $registerInput) {
                      userid
                      username
                      email
                      password
                      usertype
                      token
                    }
                  }`,
          variables: JSON.stringify(data)
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        const { registerUser } = response.data.data

        if (registerUser && registerUser !== null && registerUser !== undefined) {
          if (registerUser.usertype === 'Seller') {
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
    }
  }
}
</script>
