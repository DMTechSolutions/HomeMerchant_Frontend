<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar style="background-color: #ffffff">
        <q-toolbar-title>
          <q-img
            src="../assets/homerchant-logo.png"
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
      </q-toolbar>
    </q-header>

    <q-drawer
      side="right"
      v-model="drawerRight"
      bordered>
      <q-list>
        <q-item-label header>Homerchant</q-item-label>
        <q-item to="/">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/features">
          <q-item-section>
            <q-item-label>Features</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/about">
          <q-item-section>
            <q-item-label>About</q-item-label>
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

    <q-page-container style="background-color: #ffffff">
      <router-view />
      <q-toolbar
        class="flex flex-center text-white"
        style="border-top: 2px solid #0cbcbc; background-color: #263238"
      >
        <div class="q-pa-md q-gutter-sm">
          <q-btn
            round
            type="a"
            href=""
            class="bg-primary text-white"
            icon="fab fa-instagram"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href=""
            class="bg-primary text-white"
            icon="fab fa-github"
            target="_blank"
          />
          <q-btn
            round
            type="a"
            href="#"
            class="bg-primary text-white"
            icon="fab fa-twitter"
          />
          <q-btn
            round
            type="a"
            href="#"
            class="bg-primary text-white"
            icon="email"
          />
          <q-btn
            round
            type="a"
            href="#"
            class="bg-primary text-white"
            icon="fas fa-heart"
          />
        </div>
      </q-toolbar>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { computed, ref } from "vue";
import { useAuthStore } from "stores/all";
import { goToSection } from "src/support/helpers/scroll";
import SearchBar from '../components/Search.vue'

const $store = useAuthStore();

const drawerRight = ref(false);

const isAuthenticated = computed(() => $store.isAuthenticated);

const navigate = (section) => {
  leftDrawerOpen.value = false;
  setTimeout(() => {
    goToSection(section);
  }, 250);
};

const toggleLeftDrawer = () => (drawerRight.value = !drawerRight.value);
const logout = () => {
  $store.SIGN_OUT();
};
</script>
