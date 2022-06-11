<template>
  <div class="fit row wrap justify-center items-center content-center q-pl-sm q-pr-sm">
      <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4" style="max-width: 480px;">
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center">
                  <div
                    class="text-h4 no-caps q-my-none text-weight-bold text-primary fredoka"
                  >
                    Sign Up
                  </div>
                </div>
              </div>
              <q-form class="q-gutter-md" @submit="submitForm">
                <q-input
                  v-model="user.username"
                  :rules="[rules.required]"
                  label="Username"
                  lazy-rules
                  name="username"
                  v-bind="$input"
                />
                <q-input
                  v-model="user.email"
                  :rules="[rules.required]"
                  label="Email"
                  lazy-rules
                  name="email"
                  v-bind="$input"
                />
                <q-input
                  v-model="user.password"
                  :rules="[rules.required, rules.minLength(6)]"
                  label="Select password"
                  lazy-rules
                  name="select_password"
                  v-bind="$input"
                />
                <q-input
                  v-model="user.confirmpassword"
                  :rules="[rules.required, rules.minLength(6)]"
                  label="Confirm password"
                  lazy-rules
                  name="confirm_password"
                  v-bind="$input"
                />
                <q-select
                  v-model="user.profile"
                  :options="options"
                  label="Usertype"
                  name="usertype"
                  v-bind="$input"
                />
                <div>
                  <q-btn
                    class="full-width fredoka q-mt-lg"
                    color="primary"
                    label="Register"
                    rounded
                    no-caps
                    type="submit"
                  ></q-btn>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import rules from "src/support/rules/fieldRules";
import { handleErros } from "src/support/errors/handleErros";
import { useAuthStore, useCommonStore } from "stores/all";

const $authStore = useAuthStore();
const $commonStore = useCommonStore();
const $router = useRouter();
const $route = useRoute();

const user = reactive({});

const userLogged = computed(() => $authStore.getUser);
const loading = computed(() => $commonStore.isLoading);

const submitForm = async () => {
  try {
    $commonStore.ADD_REQUEST();
    await $authStore.DO_SIGNUP(user);
    const to = $route.query.to?.toString();
    $router.push(to || "/admin");
  } catch (error) {
    $commonStore.REMOVE_REQUEST();
    handleErros(error);
  }
};
</script>
