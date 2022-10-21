import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ListActionComponent',

  props: {
    selectMode: { type: Boolean, required: true },
    isSelected: { type: Boolean, required: true },
    viewOption: { type: String, required: true },
  },

  methods: {
    toggleSelectMode() {
      this.$emit('update:selectMode', !this.selectMode);
    },
    toggleView() {
      this.$emit('toggleView');
    }
  }
});
