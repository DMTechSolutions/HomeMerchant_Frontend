<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          <q-img
            src="../../../assets/homerchant-logo.png"
            style="height: 80px; width: 80px"
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

            <EssentialLink
              v-for="link in essentialLinks"
              :key="link.title"
              v-bind="link"
            />
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
import EssentialLink from '../../../components/EssentialLink.vue'

const $q = useQuasar()
const $router = useRouter()

const $store = authStore()

const drawerRight = ref(false);

const isAuthenticated = computed(() => $store.isAuthenticated)
const user = computed(() => $store.getUser)

const signOut = () => $store.SIGN_OUT()

const toggleLeftDrawer = () => (drawerRight.value = !drawerRight.value);

const essentialLinks = [
  {
    title: 'Lead',
    to: '/lead'
  },
  {
    title: 'Feed',
    to: '/lead'
  },
  {
    title: 'Catalog',
    to: '/lead'
  },
  {
    title: 'REG',
    to: '/lead'
  }
]
</script>

<style scoped>
.link-menu {
  text-decoration: none;
  margin-right: 1rem;
  font-size: 1rem;
}
</style>
