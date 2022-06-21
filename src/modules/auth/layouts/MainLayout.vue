<template>
  <q-layout view="lHh Lpr lFf">
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
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
