<template>
  <q-input
    :hidden="showSearch"
    v-model="search"
    dark
    label-color="white"
    type="search"
    class="bg-primary"
    color="white" />
  <q-btn
    flat rounded
    icon="search"
    color="white"
    @click="toggleSearch"/>

</template>

<script>
  import { defineComponent, ref } from 'vue'

  export default {
    name: "SearchBar",
    setup () {
      const showSearch = ref(false)
      const search = ref('')
      const toggleSearch = () => {
        showSearch.value = !showSearch.value
      }

      return {
        search,
        showSearch,
        toggleSearch
      }
    }
  }
</script>
