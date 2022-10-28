import { defineComponent } from 'vue';
import SettingsComponent from './components/SettingsComponent.vue';
import ImageUploadComponent from './components/ImageUploadComponent.vue';
import EditorComponent from './components/EditorComponent.vue';
import TagComponent from './components/TagComponent.vue';
import SizeComponent from './components/SizeComponent.vue';
import PriceComponent from './components/PriceComponent.vue';

export default defineComponent({
  name: 'ProductDetail',

  components: {
    SettingsComponent,
    ImageUploadComponent,
    EditorComponent,
    TagComponent,
    SizeComponent,
    PriceComponent,
  },

  props: {
    id: { type: String, required: true },
  },

  data() {
    return {
      tab: '',
    }
  },

  watch: {
    'tab'() {
      this.$router.push({ path: this.$route.path, query: { tab: this.tab }, });
    },
    '$route.query'() {
      this.tab = this.$route.query.tab;
    }
  },

  mounted() {
    this.tab = this.$route.query.tab || 'settings';
  },

  methods: {
    submit() {
      //
    },
  }
});
