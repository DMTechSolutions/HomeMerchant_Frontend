<template>
  <q-page style="margin-top: 10px; max-width: 99%;">
   <div class="row justify-center">
     <SubscribeAndSignup />
    <Feed page="people" />
   </div>
     <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-fab
              icon="add"
              direction="up"
              color="accent"
            >
              <q-fab-action @click="onClick" color="primary" icon="person_add">
              </q-fab-action>
            </q-fab>
          </q-page-sticky>
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
