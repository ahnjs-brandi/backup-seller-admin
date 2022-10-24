import { defineComponent } from 'vue';
import mockData from '../mock-data'; // 임시 데이터

export default defineComponent({
  name: 'DuplicateComponent',

  props: {
    modelValue: { type: Boolean, required: true },
  },

  data() {
    return {
      dialog: this.modelValue,
      searchText: '',
      products: [] as Product.List[],
      filteredItems: [] as Product.List[],
    }
  },

  watch: {
    'dialog'() {
      if (!this.dialog) this.$emit('update:modelValue', this.dialog);
    },
    'modelValue'() {
      this.dialog = this.modelValue;
    }
  },

  mounted() {
    this.products = mockData.products;
  },

  methods: {
    search() {
      const searchText = this.searchText.toLowerCase();

      this.filteredItems = this.products.filter(item => {
        const name = item.name.toLowerCase();
        const code = item.code;

        return name.indexOf(searchText) > -1 ||
          code.indexOf(searchText) > -1
      });
    },

    selectItem(item: Product.List) {
      this.$emit('selectItem', item.id);

      this.searchText = '';
      this.filteredItems = [];
      this.dialog = false;
    },
  }
});
