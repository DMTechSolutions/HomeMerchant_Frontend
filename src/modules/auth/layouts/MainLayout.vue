<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar style="background-color: #9c615c">
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
          class="text-black"
          @click="toggleLeftDrawer"
        />
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
            <q-item clickable v-if="!isAuthenticated" to="/login">
              <q-item-section>
                <q-item-label class="text-black">Login</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-if="!isAuthenticated" to="/signup">
              <q-item-section>
                <q-item-label class="text-black">Sign Up</q-item-label>
              </q-item-section>
            </q-item>
            <q-item clickable v-if="isAuthenticated" @click="logout">
              <q-item-section>
                <q-item-label class="text-black">Logout</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-drawer>
      </q-toolbar>
    </q-header>

    <q-page-container class="pt-0-important bg-auth">
      <q-page>
        <div class="row" style="height: 100vh">
          <div class="col-12 flex content-center justify-center">
            <router-view/>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {useQuasar} from "quasar";
import { ref } from 'vue'

const $q = useQuasar()
$q.dark.set(false)

const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value
</script>


<style scoped>
.bg-auth {
  backgroud-color: #F0F4F3;
  background-image: url("src/assets/login/bg-auth.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
