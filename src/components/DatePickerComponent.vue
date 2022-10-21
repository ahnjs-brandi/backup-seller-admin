<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-text-field
        v-bind="props"
        v-model="date"
        :density="density"
        :placeholder="placeholder"
        :disabled="isSelected"
        :hide-details="hideDetails"
      />
    </template>

    <v-date-picker v-model="date" :model-config="modelConfig" />
  </v-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DatePickerComponent',

  props: {
    modelValue: { type: [String, Array] },
    isSelected: { type: Boolean, default: false },
    density: { type: String, default: 'default' },
    hideDetails: { type: Boolean, default: false },
    placeholder: { type: String, default: '날짜' },
    range: { type: Boolean, default: false },
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

  methods: {
    // updateDate() {
    //   console.log('work');
    //   // this.$emit('update:modelValue', this.date)
    // },
  },
})
</script>
