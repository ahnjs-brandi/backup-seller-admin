import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageUploadComponent',

  props: {
    modelValue: { type: Array as () => File[], required: true },
  },

  data() {
    return {
      images: this.modelValue,
      valid: true,
      imageRules: [
        v => v.length < 6 || '최대 5장의 이미지만 등록 가능 합니다.',
        v => v.length > 0 || '최소 1장의 이미지가 필요 합니다.',
      ],
    }
  },

  watch: {
    'images'() {
      this.$emit('update:modelValue', this.images);
    },
    'valid'() {
      this.$emit('validation', this.valid);
    },
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
  }
});
