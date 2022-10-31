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
      if (type === 'color') this.colorOptions.push({ value: null })
      if (type === 'size') this.sizeOptions.push({ value: null })
    },

    removeOption(type: string, index: number) {
      if (type === 'color') this.colorOptions.splice(index, 1);
      if (type === 'size') this.sizeOptions.splice(index, 1);
    },

    // 옵션값 중복 확인
    checkDuplicateOption(type: string, value: string, index: number) {
      this.$store.commit('hideSnackbar');

      let options = [] as { value: string }[];

      if (type === 'color') options = this.colorOptions;
      if (type === 'size') options = this.sizeOptions;

      if (value === null) return;

      const count = options.filter((item) => item.value === value).length;

      if (count > 1) {
        this.$store.commit('showSnackbar', { text: '중복된 옵션 입니다.', type: 'error' });

        if (type === 'color') this.colorOptions[index] = { value: null };
        if (type === 'size') this.sizeOptions[index] = { value: null };
      }
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
  }
});
