import { defineComponent } from 'vue';
import OptionData from '../data/option-data';
import OptionSelectComponent from './OptionSelectComponent.vue';

export default defineComponent({
  name: 'OptionGeneratorComponent',

  components: {
    OptionSelectComponent
  },

  props: {
    optionSettings: { type: Object, required: true },
  },

  data() {
    return {
      colorOptions: [{ value: 'White' }],
      sizeOptions: [{ value: 'Free' }],
      colors: OptionData.colors,
      sizes: OptionData.sizes,
      generatingItems: [] as Product.Option[],
    }
  },

  watch: {
    colorOptions: {
      handler() { this.setOptionItems() }, deep: true,
    },
    sizeOptions: {
      handler() { this.setOptionItems() }, deep: true,
    },
  },

  mounted() {
    this.setOptionItems();
  },

  computed: {
    optionItemCount() {
      return this.generatingItems.length;
    },
  },

  methods: {
    addOption(type: string) {
      let ref = '';

      if (type === 'color') {
        this.colorOptions.push({ value: '' });
        ref = type + (this.colorOptions.length - 1);
      }
      if (type === 'size') {
        this.sizeOptions.push({ value: '' });
        ref = type + (this.sizeOptions.length - 1);
      }

      setTimeout(() => {
        this.$refs[ref][0].open = true;
      }, 100);
    },

    removeOption(type: string, index: number) {
      if (type === 'color') this.colorOptions.splice(index, 1);
      if (type === 'size') this.sizeOptions.splice(index, 1);
    },

    // 옵션 아이템 생성
    setOptionItems() {
      const colorOptions = this.colorOptions.map((item) => item.value);
      const sizeOptions = this.sizeOptions.map((item) => item.value);

      this.generatingItems = [];

      colorOptions.forEach((color) => {
        if (color) {
          sizeOptions.forEach((size) => {
            if (size) {
              this.generatingItems.push({
                name: `${color} ${size}`,
                color: color,
                size: size,
              });
            }
          });
        }
      });
    },

    submit() {
      this.$emit('generate', this.generatingItems);
    }
  }
});
