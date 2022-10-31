import { defineComponent } from 'vue';
import OptionData from '../data/option-data';

// import MockData from '@/mock-data/mock-product-list'; // 임시 데이터

export default defineComponent({
  name: 'OptionSelectComponent',

  props: {
    modelValue: { type: String, required: true },
    type: { type: String, required: true },
  },

  data() {
    return {
      open: false,
      searchText: '',
      timeout: 0,
      optionItems: [] as string[],
      filteredItems: [] as string[],
    }
  },

  // watch: {
  //   'dialog'() {
  //     if (!this.dialog) {
  //       this.$emit('update:modelValue', this.dialog)
  //     } else {
  //       this.reset();
  //     }
  //   },
  //   'modelValue'() {
  //     this.dialog = this.modelValue;
  //   }
  // },

  mounted() {
    this.OptionItems = this.type === 'color' ? OptionData.colors : OptionData.sizes;
    this.filteredItems = this.OptionItems;
  },

  methods: {
    search() {
      const searchText = this.searchText.toLowerCase();
      this.filteredItems = this.OptionItems.filter(item => item.toLowerCase().includes(searchText));
    },

    // selectItem(item: Product.List) {
    //   this.$emit('selectItem', item.id);
    //   this.dialog = false;
    // },

    // reset() {
    //   this.searchText = '';
    //   this.filteredItems = this.products;
    // },

    chageKeyword(event) {
      if (event.isComposing || event.keyCode === 229) return;

      this.searchText = event.target.value;
      this.search();
    }
  }
});
