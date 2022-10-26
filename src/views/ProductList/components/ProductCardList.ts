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
      this.allSelected = this.selected.length === this.products.length;
      this.$emit('update:modelValue', this.selected);
    },
    'modelValue'() {
      this.selected = this.modelValue;
    }
  },

  data() {
    return {
      selected: this.modelValue,
      allSelected: false,
      rating: 4.8,
    }
  },
  mounted() {
    this.allSelected = this.selected.length === this.products.length;
  },

  methods: {
    priceChanged(product: Product.List) {
      return product.price !== product.finalPrice;
    },

    toggleAll() {
      this.selected = this.allSelected ? this.products.map(product => product.id) : [];
    },

    openStore() {
      window.open("https://www.brandi.co.kr/products/78727614", "_blank")
    },

    checkItem(id: number) {
      if (this.selectMode) {
        if (this.selected.includes(id)) {
          this.selected = this.selected.filter(item => item !== id);
        } else {
          this.selected.push(id);
        }
      }
    }

  }

});
