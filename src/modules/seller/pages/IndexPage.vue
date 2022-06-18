<template>
  <q-page class="q-pa-sm">
    <div class="images">
      <FeedCompo page="japan" />
    </div>
    <FloatingButton />
    <div v-if="addProduct">
      <AddProduct />
    </div>
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
  data() {
    return {
      addProduct: false,
    }
  },
    methods: {
      onClick () {
        this.addProduct = true
        alert("clicked --> " + this.addProduct)
      }
    },
    components: { FloatingButton, FeedCompo }
  }
</script>

<style>
  .images {
    width: 99%;
    margin: auto;
  }
</style>
