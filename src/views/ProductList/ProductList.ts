import { defineComponent } from 'vue';
import FilterComponent from './components/FilterComponent.vue';
import ListActionComponent from './components/ListActionComponent.vue';
import ProductCardList from './components/ProductCardList.vue';
import ProductTableList from './components/ProductTableList.vue';

import MockData from '@/mock-data/mock-product-list'; // 임시 데이터

export default defineComponent({
  name: 'ProductListView',

  components: {
    ProductCardList,
    ProductTableList,
    FilterComponent,
    ListActionComponent
  },

  data() {
    return {
      selectMode: false,
      showFilters: false,
      showNoDataMessage: false,
      date: '2022-11-01',
      params: {} as Product.Params,
      selectedItems: [],
      products: [] as Product.List[],
    }
  },

  watch: {
    'selectMode'() {
      this.selectedItems = [];
    }
  },

  mounted() {
    this.fetchProducts();

    this.params = {
      page: this.$route.query.page ? Number(this.$route.query.page) : 1,
      exhibition: this.$route.query.exhibition ? Boolean(this.$route.query.exhibition) : null,
      sell: this.$route.query.sell ? Boolean(this.$route.query.sell) : null,
      discount: this.$route.query.discount ? Boolean(this.$route.query.discount) : null,
      category1: this.$route.query.category1 ? this.$route.query.category1.toString() : null,
      category2: this.$route.query.category2 ? this.$route.query.category2.toString() : null,
      searchText: this.$route.query.searchText ? String(this.$route.query.searchText) : null,
    }
  },

  computed: {
    isSelected() {
      return this.selectedItems.length > 0;
    }
  },

  methods: {
    fetchProducts() {
      this.$store.commit('startLoading');
      this.selectedItems = [];

      // TODO: API 연동
      new Promise(resolve => setTimeout(resolve, 300)).then(() => {
        this.products = MockData.products;
        this.products = this.products.filter(product => {
          return (this.params.exhibition === product.exhibition || this.params.exhibition === null)
          && (this.params.sell === product.sell || this.params.sell === null)
          && (this.params.discount ? product.discountPercent > 0 : !product.discountPercent || this.params.discount === null)
          && (this.params.category1 === product.category1 || this.params.category1 === null)
          && (
            product.name.includes(this.params.searchText || '')
            || product.code.includes(this.params.searchText || '')
          );
        });

        this.$store.commit('endLoading');
        this.showNoDataMessage = true;
      });
    },

    search(e?) {
      if (e && e.keyCode == 13 && this.$vuetify.display.smAndDown) {
        window.location.hash = '#card-list';
      }

      const queries = {
        page: this.params.page.toString(),
        exhibition: this.params.exhibition?.toString(),
        sell: this.params.sell?.toString(),
        discount: this.params.discount?.toString(),
        category1: this.params.category1?.toString(),
        category2: this.params.category2?.toString(),
        search: this.params.searchText,
      };

      for (const key in queries) {
        if ([null, 'false', undefined].includes(queries[key]) || queries[key].length < 1) {
          delete queries[key];
        }
      }

      this.$router.push({
        path: this.$route.path,
        query: queries
      });

      this.fetchProducts();
    },

    isPriceDiffer(product: Product.List) {
      return product.price !== product.finalPrice;
    },

    editSelected(key: string, value: boolean) {

      this.selectedItems.forEach(id => {
        const product = this.products.find(product => product.id === id);
        if (product) {
          product[key] = value;
        }
      });

      this.fetchProducts();
      this.$store.commit('showSnackbar', { text: '상품 정보가 수정되었습니다.' });
      this.selectMode = false;
    },
  }
});
