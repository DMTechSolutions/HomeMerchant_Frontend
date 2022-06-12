<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div
          class="row full-width q-px-xl q-pb-xl full-height flex flex-center"
        >
          <div class="">
            <div
              class="text-h4 text-uppercase text-white fredoka"
              style="min-width: 220px"
            >
              Forgot password?
            </div>
            <div class="text-white q-my-sm text-subtitle1">
              Enter your email and we'll send you the password reset link!
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            <router-link
              class="text-primary"
              style="text-decoration: none"
              to="/"
              >
              Homerchant
            </router-link>
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-pt-lg">
                <div class="col text-h6 ellipsis flex justify-center">
                  <div
                    class="text-h4 text-uppercase q-my-none text-primary fredoka"
                  >
                    Reset password
                  </div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md" @submit="submitForm">
                <q-input
                  v-model="email"
                  :rules="[rules.required]"
                  label="Email"
                  lazy-rules
                  type="email"
                  v-bind="$input"
                />
                <div>
                  <q-btn
                    :loading="loading"
                    class="full-width"
                    color="primary"
                    label="Enviar"
                    rounded
                    type="submit"
                  ></q-btn>
                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      <router-link class="text-primary" to="/login"
                        >Login</router-link
                      >
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAuthStore, useCommonStore } from "stores/all";
import { useQuasar } from "quasar";
import rules from "src/support/rules/fieldRules";
import { handleErros } from "src/support/errors/handleErros";
import { showPositive } from "src/support/helpers/notification";
const $authStore = useAuthStore();
const $commonStore = useCommonStore();
const $q = useQuasar();
const email = ref("");
const loading = computed(() => $commonStore.isLoading);
const submitForm = async () => {
  try {
    $commonStore.commit("common/ADD_REQUEST");
    await $authStore("authentication/RESET_PASSWORD", { email: email.value });
    showPositive(
      "Um link para redefinir sua senha foi enviado para seu e-mail! O E-mail pode demorar alguns minutos para chegar."
    );
    loading.value = false;
  } catch (error) {
    handleErros(error);
    $commonStore.commit("common/ADD_REQUEST");
  }
};
</script>
