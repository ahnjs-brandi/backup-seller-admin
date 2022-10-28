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
    id: { type: Number, defualt: 0 },
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
        if (this.create) {
          this.$store.commit('productSettings', this.settings);
        }
      },
      deep: true
    }
  },

  mounted() {
    if (this.create) {
      //생성 페이지 초기화
      if (this.$store.getters.productSettings) {
        // 스토어에 저장된 상품정보가 있으면 불러옴
        this.settings = this.$store.getters.productSettings;
      } else if (this.settings.duplicateProductId) {
        // 복제된 상품이 있으면 불러옴
        this.duplicateSettings();
      }
    } else {
      // 수정 페이지 초기화
      this.duplicateSettings(this.id);
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
        code: duplicated.code,
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

      if (this.create) {
        this.$store.commit('showSnackbar', { text: '복제 되었습니다.' });
      }
    },

    addCodiProduct(id: number) {
      const exist = this.settings.codiProducts.find(item => item.id === id);

      if (exist) {
        this.$store.commit('showSnackbar', { text: '이미 추가된 상품입니다.', type: 'error' });
        return;
      }

      const codiProduct = MockData.products.find(item => item.id === id);

      this.settings.codiProducts.push(codiProduct);
    },

    removeCodiProduct(id: number) {
      this.settings.codiProducts = this.settings.codiProducts.filter(item => item.id !== id);
    },

    reset() {
      this.settings = {
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
        codiProducts: []
      };

      this.$refs.form.reset();

      setTimeout(() => {
        this.$store.dispatch('resetCreateProduct');
      }, 100);

      this.$store.commit('showSnackbar', { text: '초기화 되었습니다.' });
    }
  }
});
