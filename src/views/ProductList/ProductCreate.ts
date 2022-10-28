import { defineComponent } from 'vue';
import ImageUploadComponent from './components/ImageUploadComponent.vue';
import EditorComponent from './components/EditorComponent.vue';
import TagComponent from './components/TagComponent.vue';
import SizeComponent from './components/SizeComponent.vue';
import SettingsComponent from './components/SettingsComponent.vue';

export default defineComponent({
  name: 'ProductDetail',

  components: {
    ImageUploadComponent,
    EditorComponent,
    TagComponent,
    SizeComponent,
    SettingsComponent
  },

  data() {
    return {
      currentStep: 1,
      access: 1,
      steps: [
        { title: '상품정보', value: 1 },
        { title: '이미지/태그', value: 2 },
        { title: '상세정보', value: 3 },
        { title: '가격/옵션', value: 4 },
      ],
    }
  },

  watch: {
    currentStep() {
      window.scrollTo({ top: 0 });
      this.$store.commit('createCurrentStep', this.currentStep);
    }
  },

  mounted() {
    this.access = this.$store.getters.createStepAccess;
    this.currentStep = this.$store.getters.createCurrentStep;
  },

  methods: {
    nextStep() {
      if (this.currentStep < this.steps.length) {
        this.currentStep++;

        if (this.currentStep > this.access) {
          this.access = this.currentStep;
          this.$store.commit('createStepAccess', this.access);
        }
      }
    },

    cancel() {
      this.$router.push('/product-list');
    },

    submit() {
      // Step 1: 상품정보 저장
      if (this.currentStep === 1) {
        this.$refs.settings.$refs.form.validate().then(res => {
          if (!res.valid) return

          this.nextStep();
        });
      }

      // Step 2: 이미지/태그 저장
      if (this.currentStep === 2) {
        this.$refs.images.$refs.form.validate().then(res => {
          if (!res.valid) return;

          this.nextStep();
        });
      }

      // Step 3: 상세정보 저장
      if (this.currentStep === 3) {
        this.nextStep();
      }
    }
  }
});
