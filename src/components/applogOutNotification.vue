<template>
  <div class="row q-gutter-xs q-pa-xs q-mr-sm">
    <div class>
      <q-btn round>
        <q-avatar size="42px">
          <img :src="userImage" />
        </q-avatar>
      </q-btn>
      <q-menu>
        <div class="fixed-top-right" style="margin: 35px 0 0 10px">
          <div
            class="bg-grey-1"
            style="padding: 10px 0 0 30px; margin: 15px 10px 0 0"
          >
            <q-avatar size="72px">
              <img :src="userImage" />
            </q-avatar>

            <div
              class="text-subtitle1 q-ma-sm"
              style="margin: 0 10px 0 -10px"
            ></div>

            <q-btn
              style="margin: 0 10px 0 -10px"
              color="secondary"
              label="Logout"
              ripple
              push
              size="md"
              v-close-popup
              @click="updateapplogout"
            />
          </div>
        </div>
      </q-menu>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useRouter } from 'vue-router'
import userImage from 'src/assets/userImage.png'

export default defineComponent({
  setup () {
    const appLogout = ref(true)
    const userId = ref('')
    const ProfileName = ref('')
    const router = useRouter()
    function updateapplogout (): void {
      localStorage.setItem('authToken', '')
      router.push({
        name: 'login'
      })
    }

    return { appLogout, userImage, userId, ProfileName, updateapplogout }
  }
})
</script>
