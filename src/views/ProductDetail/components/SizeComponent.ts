import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SizeComponent',

  props: {
    create: { type: Boolean, default: false },
    id: { type: Number, defualt: 0 },
  },

  data() {
    return {
      included: true,
      sizeCount: 1,
      product: {
        madeIn: '상품 상세 참조',
        certification: 'detail',
      },
      certificationOptions: [
        { title: '상세페이지 참조', value: 'detail' },
        { title: '인증대상', value: 'provide' },
        { title: '해당사항 없음', value: 'notProvide' },
      ],
    }
  },

  computed: {
    certificationHint() {
      if (this.product.certification === 'detail') {
        return '* 인증번호, 모델명, KC번호 필수';
      } else if (this.product.certification === 'notProvide') {
        return '* 안전인증정보가 미기재 된 상품은 품목에 따라 판매제한 될 수 있습니다.';
      } else {
        return '';
      }
    }
  },

  mounted() {
    //
  },

  methods: {
    addSize() {
      this.sizeCount++;
      setTimeout(() => {
        this.$refs[`size${this.sizeCount}`][0].focus()
      }, 100);
    }
  }
});
