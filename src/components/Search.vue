<template>
  <q-input rounded outlined standout bottom-slots v-model="text" placeholder="search" dense class="q-mt-lg">
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon v-if="text !== ''" name="close" @click="text = ''" class="cursor-pointer" />
    </template>
  </q-input>

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
        toggleSearch,
        text: ref(''),
        dense: ref(false)
      }
    }
  }
</script>
