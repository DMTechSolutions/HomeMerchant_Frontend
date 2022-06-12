<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-img
            src="../assets/homerchant-logo.png"
            style="height: 80px; width: 100px"
          />
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="md-and-up-hide"
        />

        <div class="xs-hide sm-hide">
          <q-btn
            flat
            dense
            no-caps
            label="Home"
            @click="goToSection('heroSection')"
            class="q-mx-sm"
          />
          <q-btn
            flat
            dense
            no-caps
            label="Features"
            @click="goToSection('features')"
            class="q-mx-sm"
          />
          <q-btn
            flat
            dense
            no-caps
            label="About"
            @click="goToSection('about')"
            class="q-mx-sm"
          />
          <q-btn
            dense
            label="Login"
            to="/login"
            v-if="!isAuthenticated"
            flat
            class="q-px-sm q-ml-md"
          />
          <q-btn
            flat
            dense
            label="Dashboard"
            v-if="isAuthenticated"
            to="/admin"
          />
          <q-btn
            flat
            dense
            label="Logout"
            v-if="isAuthenticated"
            @click="logout"
          />
        </div>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';
import {authStore} from "src/modules/auth/store";

const $q = useQuasar()
const $router = useRouter()

const $store = authStore()

const leftDrawerOpen = ref(false)

const isAuthenticated = computed(() => $store.isAuthenticated)
const user = computed(() => $store.getUser)

const signOut = () => $store.SIGN_OUT()
const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value
</script>

<style scoped>
.link-menu {
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
}
</style>
