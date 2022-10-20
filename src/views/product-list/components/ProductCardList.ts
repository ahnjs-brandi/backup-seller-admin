import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductCardList',

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
    }
  },

  data: () => ({
    selected: [] as number[],
    allSelected: false,
    rating: 4.8,
  }),

  mounted() {
    this.selected = this.modelValue;
    this.allSelected = this.selected.length === this.products.length;
  },

  methods: {
    priceChanged(product: Product.List) {
      return product.price !== product.finalPrice;
    },

    openProductDetail(product: Product.List) {
      console.log(product);
      // this.$router.push({ name: 'product-detail', params: { id: product.id } });
    },

    toggleAll() {
      this.selected = this.allSelected ? this.products.map(product => product.id) : [];
    },

    openStore() {
      window.open("https://www.brandi.co.kr/products/78727614", "_blank")
    }
  }

});
