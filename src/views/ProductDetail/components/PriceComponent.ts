import { defineComponent } from 'vue';
import OptionGeneratorComponent from './OptionGeneratorComponent.vue';

export default defineComponent({
  name: 'PriceOptionComponent',

  components: {
    OptionGeneratorComponent
  },

  props: {
    create: { type: Boolean, default: false },
    id: { type: Number, defualt: 0 },
  },

  data() {
    return {
      saleSettings: {
        exhibition: true,
        sell: true,
        price: 0,
        minQuantity: 1,
        maxQuantity: 20,
        useOption: true,
        setStock: false,
        stock: 10,
      },
      optionSettings: {
        customOption: false,
        generated: false,
        optionItems: [] as Product.Option[],
      },
      dialogReset: false,

      // Validations
      rules: {
        price: [
          v => v >= 0 || '0원 이상만 가능합니다.',
          v => v % 10 === 0 || '10원 단위로 입력해주세요',
          v => v < 100000000 || '1억원 이하로 입력해주세요',
        ],
        min: [
          v => v > 0 || '1개 이상만 가능합니다.',
          v => v <= 20 || '20개 이하만 가능합니다.',
          v => v <= this.saleSettings['maxQuantity'] || '최소 수량보다 작거나 같아야 합니다.',
        ],
        max: [
          v => v > 0 || '1개 이상만 가능합니다.',
          v => v <= 20 || '20개 이하만 가능합니다.',
          v => v >= this.saleSettings['minQuantity'] || '최소 수량보다 크거나 같아야 합니다.',
        ],
        stock: [
          v => v > 0 || '1개 이상만 가능합니다.',
          v => v < 100000000 || '1억개 이하로 입력해주세요',
        ],
      },
    };
  },

  watch: {
    saleSettings: {
      handler() {
        if (this.create) {
          this.$store.commit('saleSettings', this.saleSettings);
        }
      },
      deep: true
    },
    optionSettings: {
      handler() {
        if (this.create) {
          this.$store.commit('optionSettings', this.optionSettings);
        }
      },
      deep: true,
    },
  },

  computed: {
    optionItemCount() {
      return this.optionSettings.optionItems.length;
    },
  },

  mounted() {
    if (this.create) {
      //생성 페이지 초기화
      if (this.$store.getters.saleSettings) {
        // 스토어에 저장된 판매정보가 있으면 불러옴
        this.saleSettings = this.$store.getters.saleSettings;
      }
      else if (this.settings.duplicateProductId) {
        // TODO: 복제된 상품 옵션 불러오기
      }
    } else {
      // 수정 페이지 초기화
      // TODO: 옵션 정보 불러오기
    }
  },

  methods: {
    priceToText(price: number) {
      let text = '';
      const man = Math.floor(price / 10000);
      const chun = price % 10000;

      if (!man && !chun) return '';

      if (man) text += `${man}만`;
      if (chun) text += ` ${chun}`;

      return `${text}원`;
    },

    // 옵션 아이템 생성 완료
    generateOptionItems() {
      this.optionSettings.generated = true;
      this.$store.commit('showSnackbar', { text: '옵션 아이템이 생성되었습니다.' });
    },

    resetOption() {
      this.optionSettings.generated = false;
      this.colorOptions = [{ value: 'White' }];
      this.sizeOptions = [{ value: 'Free' }];
      this.setOptionItems();
    },

    generateOptions() {
      //
    }
  }
});
