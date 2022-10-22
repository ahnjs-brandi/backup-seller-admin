import { defineComponent } from 'vue';
import ImageUploadComponent from './components/ImageUploadComponent.vue';

export default defineComponent({
  name: 'ProductDetail',

  components: {
    ImageUploadComponent
  },

  props: {
    id: { type: String, required: true },
  },

  data() {
    return {
      selected: 'sd',
      isCreate: false,
      validBasicForm: true,
      validImageForm: true,
      product: {
        id: 0,
        exhibition: true,
        sell: true,
        category1: null,
        category2: null,
        tax: true,
        delivery: 'domestic',
        name: '',
        images: [],
      } as Product.Detail,
      category1Options: ['자체제작','아우터','상의','바지','원피스','스커트','신발','가방','주얼리','패션소품','언더웨어','홈웨어','비치웨어','빅사이즈','기타'],
      category2Options: ['티셔츠','셔츠/남방','블라우스','니트/스웨터','후드','맨투맨','나시/민소매','베스트'],
      deliveryOptions: [
        { title: '국내배송', value: 'domestic' },
        { title: '해외배송', value: 'overseas' },
      ],

      // validations
      nameRules: [
        v => !v.includes(`"`) && !v.includes(`'`) || '따옴표 사용 불가',
        v => !/\p{Emoji}/u.test(v) || '이모지 사용 불가',
        v => v.length <= 100 || '100자 이내로 입력해주세요',
        v => !!v || '필수입력'
      ],
      required: [v => !!v || '필수입력'],
    }
  },

  mounted() {
    if (this.id === 'create') {
      this.isCreate = true;
      this.$store.commit('setPageTitle', '상품 추가');
    }
  },

  methods: {
    submit() {
      this.$refs.basicForm.validate();
      this.$refs.imageUploadComponent.$refs.imageForm.validate();

      if (this.validBasicForm && this.validImageForm) {
        alert('submit');
      }

      if (!this.validBasicForm) {
        const el = document.getElementById('basic-section');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    },
  }
});
