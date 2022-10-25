import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TagComponent',

  props: {
    color: { type: String, required: true },
    style: { type: String, required: true },
    ect: { type: Array as () => string[], required: true },
  },

  data() {
    return {
      colorTag: this.color,
      styleTag: this.style,
      ectTags: this.ect,
      newTag: '',
      tagErrorMessages: [] as string[],

      colorOptions: [
        { title: '해당없음', value: 'na', style: '' },
        { title: '레드', value: 'red', style: 'background: #FF3839' },
        { title: '오렌지', value: 'orange', style: 'background: #ff7800' },
        { title: '옐로우', value: 'yellow', style: 'background: #ffd333' },
        { title: '베이지', value: 'beige', style: 'background: #ebd7b7' },
        { title: '브라운', value: 'brown', style: 'background: #92542e' },
        { title: '그린', value: 'green', style: 'background: #319760' },
        { title: '민트', value: 'mint', style: 'background: #bbf3ec' },
        { title: '스카이', value: 'sky', style: 'background: #94cbfe' },
        { title: '블루', value: 'blue', style: 'background: #3a72e6' },
        { title: '네이비', value: 'navy', style: 'background: #001c69' },
        { title: '퍼플', value: 'purple', style: 'background: #9743d5' },
        { title: '핑크', value: 'pink', style: 'background: #fe6e9a' },
        { title: '화이트', value: 'white', style: 'background: #ffffff; border: 1px solid #eee' },
        { title: '그레이', value: 'grey', style: 'background: #abb3bd' },
        { title: '블랙', value: 'black', style: 'background: #202429' },
        { title: '카키', value: 'khaki', style: 'background: #9c8a58' },
        { title: '라벤더', value: 'lavender', style: 'background: #e1d0f6' },
        { title: '와인', value: 'wine', style: 'background: #a30105' },
        { title: '골드', value: 'gold', style: 'background: linear-gradient(140deg, #fee9b4 10%, #f0be48 100%)' },
        { title: '로즈골드', value: 'roseGold', style: 'background: linear-gradient(140deg, #ffe5d3 10%, #faa66b 100%)' },
        { title: '실버', value: 'silver',  style: 'background: linear-gradient(140deg, #eaeaeb 10%, #b1b2b3 100%)' },
      ],

      ectOptions: ['가디건','긴팔','브이넥','오버사이즈','무지','니트','드롭숄더','캐주얼']
    }
  },

  computed: {
    colorTitle() {
      return this.colorOptions.find((item) => item.value === this.colorTag)?.title || '';
    },
    colorStyle() {
      return this.colorOptions.find((item) => item.value === this.colorTag)?.style || '';
    }
  },

  watch: {
    'color'() { this.colorTag = this.color; },
    'style'() { this.styleTag = this.style; },
    'ect'() { this.ectTags = this.ect; },
  },

  mounted() {
    //
  },

  methods: {
    removeTag(tag: string) {
      this.ectTags = this.ectTags.filter(t => t !== tag);
    },
    addTag(event) {
      // Chrome IME 299 버그로 인해 keydown 이벤트가 발생하지 않는 문제가 있음
      if (event.isComposing || event.keyCode === 229) return;

      if (!this.newTag.length) return;

      if (this.ectTags.find((tag) => tag === this.newTag)) {
        this.tagErrorMessages = ['이미 등록된 태그입니다.'];
        return;
      }

      this.ectTags.push(this.newTag);
      this.newTag = '';
    }
  }
});
