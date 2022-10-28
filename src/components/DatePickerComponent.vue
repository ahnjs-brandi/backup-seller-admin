<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <!-- 텍스트 필드 -->
      <v-text-field
        v-bind="props"
        v-model="label"
        readonly
        :density="density"
        :placeholder="placeholder"
        :disabled="disabled"
        :hide-details="hideDetails"
        prepend-inner-icon="event"
        :append-inner-icon="label && clearable ? 'cancel' : ''"
        class="cursor-pointer"
        @click:prepend-inner="menu = true"
        @click:append-inner="this.date = ''"
      />
    </template>

    <!-- 달력 -->
    <v-date-picker
      v-model="date"
      color="indigo"
      :model-config="modelConfig"
      :min-date="min"
      :max-date="max"
      :is-range="range"
    />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatePickerComponent',

  props: {
    modelValue: { type: [String, Object] },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    density: { type: String, default: 'default' },
    hideDetails: { type: Boolean, default: false },
    placeholder: { type: String, default: '날짜' },
    range: { type: Boolean, default: false },
    min: { type: String, default: '' },
    max: { type: String, default: '' },
  },

  data() {
    return {
      menu: false,
      date: this.modelValue,
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD',
      },
    }
  },

  watch: {
    date() {
      this.$emit('update:modelValue', this.date);
      this.menu = false;
    },
  },

  computed: {
    label() {
      if (!this.date) return '';
      if (!this.date.start || !this.date.end) return '';

      if (this.range) {
        return `${this.date.start} ~ ${this.date.end}`;
      } else {
        return this.date;
      }
    },
  },
})
</script>
