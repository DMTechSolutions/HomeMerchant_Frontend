<template>
  <q-page style="margin-top: 10px; max-width: 99%;">
   <div class="row justify-center">
     <SubscribeAndSignup />
    <Feed page="people" />
   </div>
  </q-page>
</template>

<script>
import SubscribeAndSignup from '../components/SubscribeAndSignup.vue'
import Feed from '../components/Feed.vue'

export default {
    name: "HomePage",
    components: { SubscribeAndSignup, Feed }
};
</script>
