<template>
  <q-page class="q-pa-sm">
    <div class="images">
      <FeedCompo page="japan" />
    </div>
    <FloatingButton />
  </q-page>
</template>

<script>
import {useAuthStore} from 'src/stores/all.js'
import {computed} from "vue";
import FeedCompo from '../../../components/Feed.vue'
import FloatingButton from '../../../components/FloatingButton.vue'

const authStore = useAuthStore()

const userToken = computed(() => authStore.getUserToken)

// This request is to be intercepted when the token is invalid
authStore.GET_USER(userToken.value.access)
  export default {
    components: { FloatingButton, FeedCompo }
  }
</script>

<style>
  .images {
    width: 99%;
    margin: auto;
  }
</style>
