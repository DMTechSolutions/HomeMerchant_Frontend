<template>
  <q-page>
    <div class="gt-sm" style="height: 100px"></div>
    <div class="row justify-center">
      <div class="col-xs-11 col-sm-8 col-md-4 col-lg-3 col-xl-3">
        <div class="text-h5 flex justify-start">Login</div>
        <div class="q-mt-md">
          <q-input placeholder="Username Or E-mail" dense outlined />
          <q-input
            class="q-mt-md"
            placeholder="password"
            type="Password"
            outlined
            dense
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
          <a href="#" style="color: #333; text-decoration: none"
            >Join now <q-icon name="mdi-greater-than"
          /></a>
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
        <div>
          <ContinueWithFb />
          <ContinueWithGoogle />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import ContinueWithFb from 'components/ContinueWithFb.vue';
import ContinueWithGoogle from 'components/ContinueWithGoogle.vue';

export default {
  setup() {
    return {
      checked: ref(true),
    };
  },

  components: {
    ContinueWithFb,
    ContinueWithGoogle,
  },
};
</script>
