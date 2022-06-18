<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab
      icon="add"
      direction="up"
      color="accent"
    >
      <q-fab-action @click="onClick" label="Upload" label-position="left"  color="primary" icon="upload">
      </q-fab-action>
    </q-fab>
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
