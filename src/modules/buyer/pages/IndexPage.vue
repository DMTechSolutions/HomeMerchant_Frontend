<template>
  <q-page class="q-pa-sm">

    <div class="images">
      <FeedCompo page="sofa" />
    </div>
    <AddProduct />
  </q-page>
</template>

<script setup>
  import FeedCompo from '../../../components/Feed.vue'
  import AddProduct from '../../../components/FloatingButton.vue'
</script>
