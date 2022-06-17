<template>
  <q-page class="q-pa-sm">
    <div class="images">
      <FeedCompo page="sofa" />
    </div>
    <FloatingButton />
  </q-page>
</template>

<script>
  import FeedCompo from '../../../components/Feed.vue'
  import FloatingButton from '../../../components/FloatingButton.vue'
  export default {
    components: { FloatingButton, FeedCompo },
  }
</script>
