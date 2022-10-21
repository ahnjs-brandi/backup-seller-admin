import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FilterComponent',

  props: {
    modelValue: { type: Object as () => Product.Params, required: true },
    isSelected: { type: Boolean, required: true },
  },

  data: () => ({
    filters: {} as Product.Params,
    showFilters: true,
    date: null,
    exhibitionOptions: [
      { title: '진열 중', value: true },
      { title: '진열 안함', value: false },
    ],
    sellOptions: [
      { title: '판매 중', value: true },
      { title: 'SOLD OUT', value: false },
    ],
    discountOptions: [
      { title: '할인 중', value: true },
      { title: '미할인', value: false },
    ],
    category1Options: ['자체제작','아우터','상의','바지','원피스','스커트','신발','가방','주얼리','패션소품','언더웨어','홈웨어','비치웨어','빅사이즈','기타'],
    category2Options: []
  }),

  watch: {
    'modelValue'() {
      this.filters = this.modelValue;
    },
  },

  methods: {
    toggleFilter() {
      this.showFilters = !this.showFilters;

      if (!this.showFilters) {
        this.resetFilters();
      }
    },

    resetFilters() {
      this.filters = {
        page: 1,
        exhibition: null,
        sell: null,
        discount: null,
        category1: null,
        category2: null,
        searchText: null,
      };

      this.$emit('update:modelValue', this.filters);
      this.$emit('change');
    },
  }
});
