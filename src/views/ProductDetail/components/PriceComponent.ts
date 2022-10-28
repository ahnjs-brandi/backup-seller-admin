import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PriceOptionComponent',

  props: {
    create: { type: Boolean, default: false },
    id: { type: Number, defualt: 0 },
  },

  data() {
    return {
      sellOptions: {
        exhibition: true,
        sell: true,
        price: 0,
        minQuantity: 1,
        maxQuantity: 20,
      },
      test: 3,
      rules: {
        price: [
          v => v >= 0 || '0원 이상만 가능합니다.',
          v => v % 10 === 0 || '10원 단위로 입력해주세요',
          v => v < 100000000 || '1억원 이하로 입력해주세요',
        ],
        min: [
          v => v > 0 || '1개 이상만 가능합니다.',
          v => v <= 20 || '20개 이하만 가능합니다.',
          v => v <= this.sellOptions['maxQuantity'] || '최소 수량보다 작거나 같아야 합니다.',
        ],
        max: [
          // v => v > 0 || '1개 이상만 가능합니다.',
          v => v <= 20 || '20개 이하만 가능합니다.',
          v => v >= this.sellOptions['minQuantity'] || '최소 수량보다 크거나 같아야 합니다.',
        ],
      },
    };
  },

  computed: {
    //
  },

  mounted() {
    //
  },

  methods: {
    priceToText(price: number) {
      // const text = '';
      // const man =
      // if()

      // return `${Math.floor(price / 10000)}만 원`;
      return price;
    }
  }
});
