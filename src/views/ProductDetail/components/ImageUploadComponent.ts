import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageUploadComponent',

  props: {
    create: { type: Boolean, default: false },
    id: { type: Number, defualt: 0 },
  },

  data() {
    return {
      images: [],
      settings: this.$store.getters.productSettings || {},
      newImages: [] as File[],
      imgUrls: [] as string[],
      imageRules: [
        () => this.images.length < 6 || '최대 5장의 이미지만 등록 가능 합니다.',
        () => this.images.length > 0 || '최소 1장의 이미지가 필요 합니다.',
      ],
    }
  },

  watch: {
    newImages: {
      handler() {
        this.images = this.images.concat(this.newImages);
      },
      deep: true
    },
    images: {
      handler() {
        this.setImgUrl();

        if (this.create) {
          this.$store.commit('productImages', this.images);
        }
      },
      deep: true
    },
  },

  mounted() {
    if (this.create) {
      //생성 페이지 초기화
      if (this.$store.getters.productImages.length) {
        // 스토어에 저장된 상품정보가 있으면 불러옴
        this.images = this.$store.getters.productImages;
      }
      else if (this.settings.duplicateProductId) {
        // 복제된 상품이 있으면 불러옴
        this.duplicateImages(this.settings.duplicateProductId);
      }
    } else {
      // 수정 페이지 초기화
      this.duplicateImages(this.id);
    }
  },


  methods: {
    getObjectUrl(file: File) {
      return URL.createObjectURL(file);
    },

    removeImage(index: number) {
      this.images.splice(index, 1);
      this.$refs.form.validate();
    },

    moveImage(index: number, direction: number) {
      const temp = this.images[index];
      this.images[index] = this.images[index + direction];
      this.images[index + direction] = temp;
    },

    swipe (direction: string, index: number) {
      if (!this.images.length) return;

      if (direction === 'left' && index > 0) {
        this.moveImage(index, -1);
      }
      if (direction === 'right' && (index < this.images.length - 1)) {
        this.moveImage(index, 1);
      }
      if (this.$vuetify.display.smAndDown) {
        if (direction === 'up' && index > 2) {
          const temp = this.images[index];
          this.images[index] = this.images[index - 3];
          this.images[index - 3] = temp;
        }
        if (direction === 'down' && (this.images.length - index > 3)) {
          const temp = this.images[index];
          this.images[index] = this.images[index + 3];
          this.images[index + 3] = temp;
        }
      }
    },

    startDrag() {
      document.documentElement.style.overflow = 'hidden'
    },

    endDrag() {
      document.documentElement.style.overflow = 'auto'
    },

    setImgUrl() {
      this.imgUrls = this.images.map((img: File | string) => {
        return (typeof img === 'string') ? img : URL.createObjectURL(img);
      });
    },

    duplicateImages(id: number) {
      console.log('duplicateId', id);

      this.images = [
        require('@/assets/mock-product-3.jpeg'),
        require('@/assets/mock-product-2.jpeg'),
        require('@/assets/mock-product-4.jpeg'),
        require('@/assets/mock-product-5.jpeg'),
        require('@/assets/mock-product-6.jpeg'),
      ]
    },
  }
});
