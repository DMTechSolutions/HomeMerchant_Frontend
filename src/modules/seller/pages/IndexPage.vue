<template>
  <q-page class="q-pa-sm">
    <div class="images">
      <FeedCompo page="japan" />
    </div>
      <AddProduct />
  </q-page>
</template>

<script setup>
import { useAuthStore } from 'src/stores/all.js'
import { computed, ref } from "vue";
import FeedCompo from '../../../components/Feed.vue'
import AddProduct from '../../../components/AddProduct.vue'

const authStore = useAuthStore()

const userToken = computed(() => authStore.getUserToken)

</script>

<style>
  .images {
    width: 99%;
    margin: auto;
  }

</style>
