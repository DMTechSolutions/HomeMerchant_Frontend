<template>
  <div class="q-pa-md q-gutter-sm">
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn rounded label="+" class="text-black f-btn" color="red" @click="prompt = true" />
    </q-page-sticky>

    <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Upload</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-file outlined v-model="model" label="browse images" multiple>
            <template v-slot:prepend>
              <q-icon name="attach_file" />
            </template>
        </q-file>
         <div style="max-width: 100%; background-color: #ffffff;" class="q-mt-md">
            <q-input
              outlined
              label="Description"
              v-model="text"
              type="textarea"
             />
          </div>
          <div class="q-mt-md">
            <q-select outlined v-model="optionModel" :options="options" label="Tags" />
          </div>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn flat label="Upload" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const prompt = ref(false)
const address = ref('')

const model = ref(null)

const optionModel = ref(null)

const options = ['Buyer', 'Sellr']

console.log('model ' + model.value);

</script>

<style>
  .f-btn {
    font-size: 20px;
    font-weight: bold;
    border: 1px solid #000000;
  }
</style>
