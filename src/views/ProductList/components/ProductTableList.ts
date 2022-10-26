import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductTableList',

  props: {
    loading: Boolean,
    modelValue: { type: Array as () => number[], required: true, },
    products: { type: Array as () => Product.List[], required: true, },
    selectMode: { type: Boolean, required: true, }
  },

  data() {
    return {
      selected: this.modelValue,
      allSelected: false,
    }
  },

  watch: {
    'selected'() {
      this.allSelected = this.selected.length === this.products.length;
      this.$emit('update:modelValue', this.selected);
    },
    'modelValue'() {
      this.selected = this.modelValue;
    }
  },

  mounted() {
    this.allSelected = this.selected.length === this.products.length;
  },

  methods: {
    toggleAll() {
      this.selected = this.allSelected ? this.products.map(product => product.id) : [];
    },
    openProductDetail(id: number) {
      console.log(id);
      // this.$router.push({ name: 'product-detail', params: { id: product.id } });
    },
  }

});
