import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageUploadComponent',

  props: {
    modelValue: { type: Array as () => File[], required: true },
  },

  data() {
    return {
      images: this.modelValue,
      uploadedImages: [] as File[],
      imgUrls: [] as string[],
      valid: true,
      imageRules: [
        () => this.images.length < 6 || '최대 5장의 이미지만 등록 가능 합니다.',
        () => this.images.length > 0 || '최소 1장의 이미지가 필요 합니다.',
      ],
    }
  },

  watch: {
    uploadedImages: {
      handler() {
        this.images = this.images.concat(this.uploadedImages);
      },
      deep: true
    },
    images: {
      handler() {
        this.setImgUrl();
        this.valid = this.images.length > 0 && this.images.length < 6;
      },
      deep: true
    },
    'valid'() {
      this.$emit('validation', this.valid);
    },
    'modelValue'() {
      this.images = this.modelValue;
    }
  },

  methods: {
    getObjectUrl(file: File) {
      return URL.createObjectURL(file);
    },

    removeImage(index: number) {
      this.images.splice(index, 1);
      this.$refs.imageForm.validate();
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
    }
  }
});
