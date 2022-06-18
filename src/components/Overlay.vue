<template>
  <div class="images">
    <img class="img" :src="image.urls.small" :alt="image.alt_description" />
  </div>
</template>

<script>

  export default {
    name: "OverlayComp",

    props: {
      image: Object,
    },
  }
</script>

<style>
  .images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .img {
    margin: 10px 2px;
    border-radius: 10px;
    max-width: 100%;
    object-fit: contain;
  }
</style>
