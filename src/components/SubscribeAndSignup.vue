<template>
  <div class="subscribe">
    <p class="s-header">Subscribe</p>
    <q-input filled v-model="text" label="Enter email to subscribe" />
    <div class="s-button">
      <q-btn outline style="color: goldenrod;" label="Subscribe" class="s-btn" />
    </div>
    <div class="row justify-between q-mt-md q-mb-md">
      <div>
        <router-link to="/login" class="s-nav">Login</router-link>
      </div>
      <div>
        <router-link to="/signup" class="s-nav">Sign up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { ref } from 'vue'

  export default {
  setup() {
    return {
      text: ref('')
    }
  }
}
</script>

<style>
  .subscribe {
    background-color: #ffffff;
    width: 100%;
    padding: 10px;
    margin: 15px 0;
    border: 1px solid #0cbcbc;
    border-radius: 10px;
    max-width: 400px;
    max-height: 250px;
  }

  .s-header {
    font-size: 20px;
  }

  .s-button {
    width: 100%;
    margin-top: 20px;
  }

  .s-btn {
    width: 100%;
  }

  .s-nav {
    font-size: 15px;
    color: #02b09f;
  }
</style>
