<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
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
        />

        <div>
          <q-btn
            flat
            dense
            label="Login"
            to="/login"
            v-if="!isAuthenticated"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      show-if-above
      side="right"
    >
      <q-list>
        <q-item-label
          header
        >
          Homerchant
        </q-item-label>
        <q-item to="/lead">
          <q-item-section>
            <q-item-label>Lead</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/feed">
          <q-item-section>
            <q-item-label>Feed</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/catalog">
          <q-item-section>
            <q-item-label>Catalog</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/req">
          <q-item-section>
            <q-item-label>REQ</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="!isAuthenticated" to="/login">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="isAuthenticated" @click="logout">
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {ref} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {useAuthStore} from "stores/all";
import {useRouter} from "vue-router";
import SearchBar from '../../../components/Search.vue'

const $store = useAuthStore()
const $router = useRouter()

const isAuthenticated = $store.isAuthenticated

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value
const logout = () => {
  $store.SIGN_OUT()
  $router.push('/')
}
</script>
