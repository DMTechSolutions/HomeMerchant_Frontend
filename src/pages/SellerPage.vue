<template>
  <q-page padding>
    <!-- content -->
    <q-btn color="primary" label="Seller Profile">
        <q-menu>
          <q-list style="min-width: 138px">
            <q-item clickable v-close-popup>
              <q-item-section>Lead</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Feed</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Catalog</q-item-section>
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
  name: 'SellerPage'
}
</script>
