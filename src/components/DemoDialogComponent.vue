<template>
  <v-dialog v-model="$store.state.demoDialog" max-width="390">
    <v-card>
      <v-card-text class="text-center py-16">
        <!-- <div style="font-size: 100px">🧞‍♂️</div> -->
        <div style="font-size: 100px">🦥</div>
        <div class="">아직 안만듦</div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DemoDialogComponent',

  data() {
    return {
      open: this.modelValue
    }
  },
})
</script>
