<template>
  <q-btn
    class="full-width fredoka q-mt-lg"
    rounded
    no-caps
    to="/"
  >
    <router-link class="cancel-btn" to="/">Cancel</router-link>
  </q-btn>
</template>

<script>
export default {
  name: 'CancelBtn'
}
</script>

<style>
  .cancel-btn {
    text-decoration: none;
  }
</style>
