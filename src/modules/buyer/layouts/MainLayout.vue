<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar style="background-color: #ffffff">
        <q-toolbar-title>
          <q-img
            src="../../../assets/homerchant-logo.png"
            style="height: 80px; width: 80px"
          />
        </q-toolbar-title>
        <SearchBar />
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="md-and-up-hide text-black"
        />

        <q-drawer
          side="right"
          v-model="drawerRight"
          bordered>
          <q-list>
            <q-item-label
              header
            >
              Homerchant
            </q-item-label>

            <q-item to="/profile">
              <q-item-section>
                <q-item-label class="link-menu">My Profile</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/collection">
              <q-item-section>
                <q-item-label class="link-menu">My Collection</q-item-label>
              </q-item-section>
            </q-item>
            <q-item to="/req">
              <q-item-section>
                <q-item-label class="link-menu">REQ</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-if="!isAuthenticated" to="/login">
              <q-item-section>
                <q-item-label class="link-menu">Login</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-if="isAuthenticated" @click="logout">
              <q-item-section>
                <q-item-label class="link-menu">Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-drawer>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useQuasar} from 'quasar';
import {useRouter} from 'vue-router';
import {authStore} from "src/modules/auth/store";
import SearchBar from '../../../components/Search.vue'

const $q = useQuasar()
const $router = useRouter()

const $store = authStore()

const drawerRight = ref(false);

const isAuthenticated = computed(() => $store.isAuthenticated)
const user = computed(() => $store.getUser)

const toggleLeftDrawer = () => (drawerRight.value = !drawerRight.value);
const logout = () => {
  $store.SIGN_OUT()
  $router.push('/')
}
</script>

<style scoped>
.link-menu {
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
  color: #263238;
}
</style>
