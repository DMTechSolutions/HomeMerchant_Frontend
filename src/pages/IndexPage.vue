<template>
<div>
  <q-page class="gt-sm">
    <div class="row" style="height: 900px">
      <div class="bg-image col" style="max-width: 1000px">
        <div
          style="
            width: 70%;
            height: 70%;
            margin: auto;
            display: flex;
            align-items: center;
          "
        >
          <div
            style="
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <div
              class="text-h4 text-grey-10 q-mb-lg"
              style="width: 350px; font-weight: 500"
            >
              Make your dream home a reality
            </div>
            <ContinueWithGoogle />
            <div
              class="q-mt-lg"
              style="
                height: 10px;
                width: 320px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
              "
            >
              <div style="width: 40%">
                <q-separator />
              </div>
              <div
                style="
                  width: 20%;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                "
              >
                <div class="text-grey">Or</div>
              </div>
              <div style="width: 40%">
                <q-separator />
              </div>
            </div>
            <q-space class="q-mt-md" />
            <q-input
              placeholder="Email"
              class="bg-white"
              dense
              style="width: 320px"
              outlined
            />
            <q-btn
              label="Sign Up with Email"
              class="q-pl-xl q-pr-xl q-mt-md text-white"
              style="width: 320px; background-color: #007562"
              no-caps
              flat
            />
            <div class="text-class">
              <span>
                By signing up, signing in or continuing, I agree to the
                <a href="#" style="color: #007562">Houzz Terms of Use </a> and
                acknowledge the
                <a href="#" style="color: #007562">Houzz Privacy Policy.</a> I
                agree that Houzz may use my email address for marketing
                purposes. I can opt out at any time through my
                <a href="#" style="color: #007562">settings</a>.
              </span>
            </div>
            <div class="q-mt-xl" style="display: flex; flex-direction: row">
              <div class="q-mt-xs text-bold">
                <p>Hire a pro:</p>
              </div>
              <div>
                <q-btn
                  outline
                  rounded
                  label="Contractors"
                  class="btn-style q-ml-xs q-mr-xs"
                  no-caps
                />
              </div>
              <div>
                <q-btn
                  outline
                  rounded
                  label="Interior Designers"
                  class="btn-style q-ml-xs q-mr-xs"
                  no-caps
                />
              </div>
              <div>
                <q-btn
                  outline
                  rounded
                  label="Architects"
                  class="btn-style q-ml-xs q-mr-xs"
                  no-caps
                />
              </div>
              <div>
                <q-btn
                  outline
                  rounded
                  label="See More"
                  class="btn-style q-ml-xs q-mr-xs"
                  no-caps
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col" style="background-color: #113350">
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 80%;
            margin: auto;
          "
        >
          <div
            class="text-h6 text-white q-mb-lg"
            style="
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
            "
          >
            LLP COMPARATOR
          </div>
          <div
            class="text-h4 text-white"
            style="
              width: 100%;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
            "
          >
            Join Millions of Home Professionals
          </div>
          <div
            class="q-mt-lg"
            style="
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            "
          >
            <q-input
              placeholder="Email"
              class="bg-white"
              dense
              style="width: 320px"
              outlined
            />
            <q-btn
              label="Join for free"
              class="q-pl-xl q-pr-xl q-mt-md text-white"
              style="width: 320px; background-color: #0066c3"
              no-caps
              flat
            />
            <div class="text-class">
              <span style="color: white">
                By signing up, signing in or continuing, I agree to the
                <a href="#" style="color: #ffffff">Houzz Terms of Use </a> and
                acknowledge the
                <a href="#" style="color: #ffffff">Houzz Privacy Policy.</a> I
                agree that Houzz may use my email address for marketing
                purposes. I can opt out at any time through my
                <a href="#" style="color: #ffffff">settings</a>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
  <q-page class="lt-md">
    <div class="column">
      <div class="col-xs-12 col-sm-6 col-md-4">
        <div class="mobile-home-img">
          <div class="flex-column">
            <div
              class="text-white flex column text-h5 justify-center"
              style="max-width: 80%; font-weight: 600"
            >
              The New way to design your Home
            </div>
            <div class="q-mt-lg text-white">
              <p>Get inspired. Shop products. Find pros.</p>
            </div>
            <div>
              <q-btn
                label="Get started"
                no-caps
                style="background-color: #007562"
                class="q-pl-xl q-pr-xl q-mt-md text-white"
              />
            </div>
            <div>
              <q-btn
                label="Join as a Pro"
                no-caps
                style="background-color: #0066c3"
                class="q-pl-xl q-pr-xl q-mt-md text-white"
              />
            </div>
          </div>
        </div>
        <div>
          <article>
            <p class="text-color q-mt-md" style="font-size: 20px">
              Create a home you always wanted
            </p>
          </article>
        </div>
        <div class="flex justify-center">
          <q-img
            src="../assets/idea.png"
            style="height: 100px; width: 100px"
            class="q-mt-lg"
          />
        </div>
        <p class="text-color q-mt-xs" style="font-size: 16px">
          Discover design ideas
        </p>
        <div class="flex justify-center">
          <q-img
            src="../assets/group.png"
            style="height: 100px; width: 100px"
            class="q-mt-lg"
          />
        </div>
        <p class="text-color q-mt-xs" style="font-size: 16px">
          Find home Professionals
        </p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-6 col-md-4">
      <div class="q-pa-md">
        <q-scroll-area>
          <div class="row no-wrap">
            <div
              v-for="n in 10"
              :key="n"
              style="width: 150px; border: 1px solid; margin-right: 10px"
              class="q-pa-sm"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto fuga quae veritatis blanditiis sequi id expedita amet
              esse aspernatur! Iure, doloribus!
            </div>
          </div>
        </q-scroll-area>
      </div>
    </div>
  </q-page>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContinueWithGoogle from 'components/ContinueWithGoogle.vue'

export default defineComponent({
  name: 'IndexPage',

  components: {
    ContinueWithGoogle
  }
})
</script>

<style>
.bg-image {
  background-image: url(https://st.hzcdn.com/static_en-IN/ho-bg.jpg);
  background-repeat: no-repeat;
  background-size: contain;
  flex-basis: 66.7%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  font-family: proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif;
}

.mobile-home-img {
  background-image: url(https://st.hzcdn.com/simgs/pictures/dining-rooms/niraant-dipen-gada-and-associates-img~b261837307df405f_8-8826-1-23f96e0.jpg);
  height: 280px;
  background-repeat: no-repeat;
  background-size: contain;
  flex-basis: 66.7%;
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  font-family: proxima-nova, Helvetica Neue, Helvetica, Arial, sans-serif;
}

.btn-style {
  color: #007562;
  font-size: 14px;
  line-height: 20px;
}

.text-class {
  font-size: 12px;
  line-height: 16px;
  color: #007562;
  text-align: left;
  margin-top: 10px;
  max-width: 320px;
}
</style>
