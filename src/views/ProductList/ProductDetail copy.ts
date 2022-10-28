import { defineComponent } from 'vue';
import ImageUploadComponent from './components/ImageUploadComponent.vue';
import DuplicateComponent from './components/ProductSearchComponent.vue';
import EditorComponent from './components/EditorComponent.vue';
import TagComponent from './components/TagComponent.vue';
import SizeComponent from './components/SizeComponent.vue';

import mockData from './mock-data'; // 임시 데이터
import mockHtml from './mock-html'; // 임시 상세정보 html

export default defineComponent({
  name: 'ProductDetail',

  components: {
    ImageUploadComponent,
    DuplicateComponent,
    EditorComponent,
    TagComponent,
    SizeComponent,
  },

  props: {
    id: { type: String, required: true }
  },

  data() {
    return {
      selected: 'sd',
      isCreate: false,
      dialogDuplicate: false,
      validBasicForm: true,
      validImageForm: true,
      product: {
        id: 0,
        name: '',
        description: '',
        code: '',
        exhibition: true,
        sell: true,
        category1: null,
        category2: null,
        tax: true,
        delivery: 'domestic',
        images: [],
        madeIn: '상품 상세 참조',
        codi: false,
        certification: 'detail',
        pbType: '해당없음',
        seasonType: '해당없음',
        custom: false,
        tags: {
          color: 'na',
          style: '해당없음',
          ect: []
        },
        content:'',
      } as Product.Detail,

      category1Options: ['자체제작','아우터','상의','바지','원피스','스커트','신발','가방','주얼리','패션소품','언더웨어','홈웨어','비치웨어','빅사이즈','기타'],
      category2Options: ['티셔츠','셔츠/남방','블라우스','니트/스웨터','후드','맨투맨','나시/민소매','베스트'],

      deliveryOptions: [
        { title: '국내배송', value: 'domestic' },
        { title: '해외배송', value: 'overseas' },
      ],

      certificationOptions: [
        { title: '상세페이지 참조', value: 'detail' },
        { title: '인증대상', value: 'provide' },
        { title: '해당사항 없음', value: 'notProvide' },
      ],

      // validations
      nameRules: [
        v => !v.includes(`"`) && !v.includes(`'`) || '따옴표 사용 불가',
        v => v.length <= 100 || '100자 이내로 입력해주세요',
        v => !!v || '필수입력',
        v => {
          const unified_emoji_ranges = ['\ud83c[\udf00-\udfff]','\ud83d[\udc00-\ude4f]','\ud83d[\ude80-\udeff]'];
          const reg = new RegExp(unified_emoji_ranges.join('|'), 'g');
          return !v.match(reg) || '이모지 사용 불가';
        },
      ],
      descriptionRules: [
        v => !v.includes(`"`) && !v.includes(`'`) || '따옴표 사용 불가',
        v => v.length <= 100 || '100자 이내로 입력해주세요',
        v => {
          const unified_emoji_ranges = ['\ud83c[\udf00-\udfff]','\ud83d[\udc00-\ude4f]','\ud83d[\ude80-\udeff]'];
          const reg = new RegExp(unified_emoji_ranges.join('|'), 'g');
          return !v.match(reg) || '이모지 사용 불가';
        },
      ],
      required: [v => !!v || '필수입력'],
    }
  },

  watch: {
    'product.images'() {
      this.setTags();
    },
    'product.name'() {
      this.$store.commit('setPageTitle', this.product.name);
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

  created() {
    if (this.id === 'create') {
      // 생성페이지 일때
      this.isCreate = true;
      this.$store.commit('setPageTitle', '상품 추가');
    } else {
      // 수정페이지 일때
      this.$store.commit('setPageTitle', this.product.name);
      this.getProduct(+this.id);
      this.product.content = mockHtml.html;
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
        return el?.scrollIntoView({ behavior: 'smooth' });
      }

      if (!this.validImageForm) {
        const el = document.getElementById('image-section');
        return el?.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // 선택된 상품 복사
    getProduct(id: number) {
      const duplicated = mockData.products.find(item => item.id === id) as Product.List;

      this.product = {
        ...duplicated,
        name: '(복사본) ' + duplicated.name,
        description: '',
        tax: true,
        delivery: 'domestic',
        images: [
          require('@/assets/mock-product-1.jpeg'),
          require('@/assets/mock-product-2.jpeg'),
          require('@/assets/mock-product-3.jpeg'),
          require('@/assets/mock-product-4.jpeg'),
          require('@/assets/mock-product-5.jpeg'),
        ],
        madeIn: '상품 상세 참조',
        codi: false,
        certification: 'detail',
        pbType: '해당없음',
        seasonType: '봄여름',
        custom: false,
        content: '',
        tags: {
          color: 'beige',
          style: '해당없음',
          ect: []
        }
      }
    },

    // 대표 이미지 변경되면 태그 설정
    setTags() {
      this.product.tags = {
        color: 'beige',
        style: '캐주얼',
        ect: ['가디건','긴팔','브이넥','오버사이즈','무지','니트','드롭숄더','캐주얼']
      };
    }
  }
});
