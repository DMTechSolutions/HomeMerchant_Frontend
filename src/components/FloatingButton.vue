<template>
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
</template>
<script>
  export default {
    name: "FloatingButton"
  }
</script>
