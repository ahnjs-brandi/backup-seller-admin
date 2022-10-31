<template>
  <div>
    <v-dialog :model-value="modelValue" max-width="390" @click:outside="cancel">
      <v-card>
        <v-card-text class="py-12">
          <!-- 컨텐츠 슬랏 -->
          <slot />
        </v-card-text>

        <v-card-actions class="px-4 pb-4">
          <v-spacer />
          <v-btn @click="cancel">취소</v-btn>
          <v-btn variant="elevated" color="primary" @click="confirm">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConfirmationComponent',

  props: {
    modelValue: { type: Boolean, required: true }
  },

  watch: {
    'modelValue'() { this.$store.commit('hideSnackbar') }
  },

  data() {
    return {
      //
    }
  },

  methods: {
    cancel() {
      this.$emit('update:modelValue', false);
    },

    confirm() {
      this.$emit('update:modelValue', false);
      this.$emit('confirm');
    }
  }
})
</script>
