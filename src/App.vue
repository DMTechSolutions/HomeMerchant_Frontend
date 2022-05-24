<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background-color: #e8e8e8;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #cac9c9;
}
</style>
<style lang="sass">
.my-sticky-header-column-table
  /* height or max-height is important */
  height: 450px


  tr th
    position: sticky
    /* higher than z-index for td below */
    z-index: 2
    /* bg color is important; just specify one */
    background: #fff

  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
    /* highest z-index */
    z-index: 3
  thead tr:first-child th
    top: 0
    z-index: 1
  tr:first-child th:first-child
    /* highest z-index */
    z-index: 3

  td:first-child
     z-index: 1

  td:first-child, th:first-child
     position: sticky
     left: 0
</style>
