import { defineComponent } from 'vue';
import ProductSearchComponent from './ProductSearchComponent.vue';
import MockData from '@/mock-data/mock-product-list';

export default defineComponent({
  name: 'SettingsComponent',

  components: {
    ProductSearchComponent,
  },

  props: {
    create: { type: Boolean, default: false },
  },

  data() {
    return {
      dialogDuplicate: false,
      dialogCodi: false,
      settings: {
        code: null,
        name: '',
        description: '',
        category1: null,
        category2: null,
        tax: '과세',
        delivery: '국내배송',
        codi: false,
        seasonType: null,
        custom: false,
        duplicateProductId: 0,
        codiProducts: [] as Product.List[]
      },

      // validations
      rules: {
        name: [v => v.length <= 100 || '100자 이내로 입력해주세요',],
        description: [v => v.length <= 100 || '100자 이내로 입력해주세요',],
        required: [v => !!v || '필수입력'],
        noSymbols: [
          v => !v.includes(`"`) && !v.includes(`'`) || '따옴표 사용 불가',
          v => {
            const unified_emoji_ranges = ['\ud83c[\udf00-\udfff]','\ud83d[\udc00-\ude4f]','\ud83d[\ude80-\udeff]'];
            const reg = new RegExp(unified_emoji_ranges.join('|'), 'g');
            return !v.match(reg) || '이모지 사용 불가';
          }
        ]
      }
    }
  },

  watch: {
    settings: {
      handler() {
        this.$store.commit('productSettings', this.settings);
      },
      deep: true
    }
  },

  mounted() {
    if (this.$store.getters.productSettings) {
      // 스토어에 저장된 상품정보가 있으면 불러옴
      this.settings = this.$store.getters.productSettings;
    } else if (this.settings.duplicateProductId) {
      // 복제된 상품이 있으면 불러옴
      this.duplicateSettings();
    }
  },

  methods: {
    onDuplicateSelect(id: number) {
      this.duplicateSettings(id);
    },

    duplicateSettings(id: number) {
      const duplicated = MockData.products.find(item => item.id === id);

      if (!duplicated) return;

      this.settings = {
        code: null,
        name: duplicated.name,
        description: '',
        category1: duplicated.category1,
        category2: duplicated.category2,
        tax: '과세',
        delivery: '국내배송',
        codi: false,
        seasonType: ['가을'],
        custom: false,
        duplicateProductId: duplicated.id,
        codiProducts: []
      };
    },

    addCodiProduct(id: number) {
      const codiProduct = MockData.products.find(item => item.id === id);

      this.settings.codiProducts.push(codiProduct);
    },

    removeCodiProduct(id: number) {
      this.settings.codiProducts = this.settings.codiProducts.filter(item => item.id !== id);
    }
  }
});
