<template>
  <div class="fit row wrap justify-center items-center content-center q-pl-sm q-pr-sm">
      <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4" style="max-width: 480px;">
        <div class="row q-pa-sm-sm q-pa-md q-pt-0">
          <div class="col-12">
            <q-card-section>
              <div class="q-mb-xl">
                <div class="flex justify-center">
                  <div class="text-h4 no-caps q-my-none text-weight-bold text-primary fredoka"
                  >
                     <q-img
                        src="../../../assets/homerchant-logo.png"
                        style="height: 80px; width: 80px"
                      />
                  </div>
                  <div class="column">
                    <div class="label">
                      <label class="label">Join us to start searching for quality products</label>
                    </div>
                    <div class="row justify-between q-mt-md">
                      <q-btn color="red-2" icon="google" class="text-black" rounded text-color="black" label="Google" no-caps />
                      <q-btn color="red-2" icon="facebook" rounded text-color="black" label="Facebook" no-caps />
                    </div>
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
                  type="password"
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
                  :options="options"
                  label="Usertype"
                  name="usertype"
                  v-bind="$input"
                  v-model="user.profile"
                />
                <div class="q-gutter-lg q-mt-xs q-pl-xs">
                    <q-checkbox v-model="agree" label="I agree with terms and privacy policy" />
                  </div>
                <div>
                  <div class="q-gutter-sm">
                    <q-btn
                    class="full-width fredoka q-mt-lg"
                    color="primary"
                    label="Join us"
                    rounded
                    no-caps
                    type="submit"
                  />
                  <CancelBtn />
                  </div>

                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import rules from "src/support/rules/fieldRules";
import { handleErros } from "src/support/errors/handleErros";
import { useAuthStore, useCommonStore } from "stores/all";
import CancelBtn from '../../../components/Cancel.vue'

const $authStore = useAuthStore();
const $commonStore = useCommonStore();
const $router = useRouter();
const $route = useRoute();

const user = reactive({});

const options = [{ label: 'Seller', value: 'seller' }, { label: 'Buyer', value: 'buyer' }]

const loading = computed(() => $commonStore.isLoading);

const agree = ref(false);

const submitForm = async () => {
  try {
    $commonStore.ADD_REQUEST();
    await $authStore.DO_SIGNUP(user);
    if (user.profile.value === 'seller') {
      await $router.push("/seller");
    } else if (user.profile.value === 'buyer'){
      await $router.push("/buyer");
    } else {
      await $router.push("/");
    }
  } catch (error) {
    $commonStore.REMOVE_REQUEST();
    handleErros(error);
  }
};
</script>

<style>
  .label {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
</style>
