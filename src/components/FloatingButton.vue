<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn round color="red" icon="add" text-color="black" @click="onClick" style="border: 1px solid black" />
  </q-page-sticky>
</template>
<script>
  export default {
    name: "FloatingButton",
    methods: {
      onClick() {
        alert("you clicked upload")
      }
    }
  }
</script>
