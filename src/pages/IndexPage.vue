<template>
  <q-page style="margin-top: -60px">
    <section class="about q-mb-xl q-py-xl"></section>
  </q-page>
</template>

<script setup>
import { onMounted } from "vue";

const features = [
  {
    icon: "fas fa-check",
    label: "Feature 1",
  },
  {
    icon: "fas fa-check",
    label: "Feature 2",
  },
  {
    icon: "fas fa-check",
    label: "Feature 3",
  },
];
onMounted(() => {
  console.log("Mounted.....");
});
</script>

<style scoped></style>
