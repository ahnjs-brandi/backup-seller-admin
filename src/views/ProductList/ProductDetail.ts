import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductDetail',

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
      imageRules: [
        v => v.length < 6 || '최대 5장의 이미지만 등록 가능 합니다.',
        v => v.length > 0 || '최소 1장의 이미지가 필요 합니다.',
      ],
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
      (this.$refs.basicForm as HTMLFormElement).validate();
      // const child = this.$refs.profile;
      // child.x();

      if (this.validBasicForm && this.validImageForm) {
        alert('submit');
      }
    },

    getObjectUrl(file: File) {
      return URL.createObjectURL(file);
    },

    removeImage(index: number) {
      this.product.images.splice(index, 1);
      this.$refs.imageForm.validate();
    },

    moveImage(index: number, direction: number) {
      const temp = this.product.images[index];
      this.product.images[index] = this.product.images[index + direction];
      this.product.images[index + direction] = temp;
    },

    swipe (direction: string, index: number) {
      if (!this.product.images.length) return;

      if (direction === 'left' && index > 0) {
        this.moveImage(index, -1);
      }
      if (direction === 'right' && (index < this.product.images.length - 1)) {
        this.moveImage(index, 1);
      }
      if (this.$vuetify.display.smAndDown) {
        if (direction === 'up' && index > 2) {
          const temp = this.product.images[index];
          this.product.images[index] = this.product.images[index - 3];
          this.product.images[index - 3] = temp;
        }
        if (direction === 'down' && (this.product.images.length - index > 3)) {
          const temp = this.product.images[index];
          this.product.images[index] = this.product.images[index + 3];
          this.product.images[index + 3] = temp;
        }
      }
    },

    startDrag() {
      document.documentElement.style.overflow = 'hidden'
    },

    endDrag() {
      document.documentElement.style.overflow = 'auto'
    },


  }
});
