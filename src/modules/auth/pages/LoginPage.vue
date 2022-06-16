<template>
  <div
    class="fit row wrap justify-center items-center content-center q-pl-sm q-pr-sm"
  >
    <div
      class="col-xs-12 col-sm-10 col-md-8"
      style="margin: auto; max-width: 480px"
    >
      <div class="flex justify-center">
        <div class="text-h4 no-caps q-my-none text-weight-bold text-primary fredoka q-mb-md">
          Login
        </div>
      </div>
      <q-form class="q-gutter-md" @submit="submitForm">
        <q-input
          v-model="user.username"
          :rules="[rules.required]"
          label="Username or Email"
          lazy-rules
          name="username"
          v-bind="$input"
        />
        <q-input
          v-model="user.password"
          :rules="[rules.required, rules.minLength(6)]"
          label="Password"
          lazy-rules
          name="password"
          type="password"
          v-bind="$input"
        />
        <div>
          <q-btn
            class="full-width fredoka"
            color="primary"
            label="Sign in"
            rounded
            type="submit"
          ></q-btn>
          <div class="q-mt-lg">
            <div class="q-mt-sm">
              Don't have an account yet?
              <router-link class="text-primary" to="/signup"
                >Join now</router-link
              >
            </div>
            <div class="q-mt-sm">
              Forgot password?
              <router-link class="text-primary" to="/forgot-password">
                Click here!
              </router-link>
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import rules from "src/support/rules/fieldRules";
import { handleErros } from "src/support/errors/handleErros";
import { useAuthStore, useCommonStore } from "stores/all";
import CancelAction from '../../../components/Cancel.vue';
components: { CancelAction }
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
    await $authStore.DO_LOGIN(user);
    const to = $route.query.to?.toString();
    console.log(user)
    $router.push(to || "/seller");
  } catch (error) {
    $commonStore.REMOVE_REQUEST();
    handleErros(error);
  }
};
</script>
