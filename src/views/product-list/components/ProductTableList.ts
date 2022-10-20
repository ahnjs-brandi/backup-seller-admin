import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductTableList',

  props: {
    loading: Boolean,
    modelValue: { type: Array as () => number[], required: true, },
    products: { type: Array as () => Product.List[], required: true, },
    selectMode: { type: Boolean, required: true, }
  },

  watch: {
    'selected'() {
      if (this.selected.length !== this.products.length) {
        this.allSelected = false;
      }
      this.$emit('update:modelValue', this.selected);
    },
    'modelValue'() {
      this.selected = this.modelValue;
      this.allSelected = this.selected.length === this.products.length;
    }
  },

  data: () => ({
    selected: [] as number[],
    allSelected: false,
  }),

  mounted() {
    this.selected = this.modelValue;
    this.allSelected = this.selected.length === this.products.length;
  },

  methods: {
    toggleAll() {
      this.selected = this.allSelected ? this.products.map(product => product.id) : [];
    },
    openProductDetail(product: Product.List) {
      console.log(product);
      // this.$router.push({ name: 'product-detail', params: { id: product.id } });
    },
  }

});
