<template>
  <q-page padding>
    <!-- content -->
    <q-btn color="primary" label="Buyer Profile">
        <q-menu>
          <q-list style="min-width: 132px">
            <q-item clickable v-close-popup>
              <q-item-section>My Profile</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>My Collection</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Request</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
  </q-page>
</template>

<script>
export default {
  name: 'BuyerPage'
}
</script>
