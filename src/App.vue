<template>
  <router-view />
</template>

<script setup>
    import {defineComponent, computed, watch} from 'vue';
    import {loader} from "src/support/helpers/loader";
    import {useCommonStore} from "stores/all";
    import {getCurrentInstance} from 'vue'
    import {input} from "src/support/utils/visual";

    const store = useCommonStore()
    const isLoading = computed(() => store.isLoading)

    const app = getCurrentInstance();

    app.appContext.config.globalProperties.$input = input;

    watch(() => isLoading.value, (newVal) => {
      if (newVal) loader.show()
      else loader.hide()
    })
</script>
