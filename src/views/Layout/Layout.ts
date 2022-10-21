import { defineComponent } from 'vue';
import TopComponent from './components/TopComponent.vue';
import LeftComponent from './components/LeftComponent.vue';

export default defineComponent({
  name: 'Layout',

  components: {
    TopComponent,
    LeftComponent,
  },

  data: () => ({
    open: [],             // 네비게이션 메뉴 그룹 펼침 여부
    fullscreen: false,    // 전체화면 여부
    safari: false,        // 사파리 여부
  }),

  mounted() {
    // 사파리 여부 파악
    this.safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // 모바일에서는 왼쪽 메뉴 닫고 시작하기
    if (this.$vuetify.display.smAndDown) {
      this.$store.commit('closeLeftDrawer');
    }
  },

  methods: {
    // 전체화면 토글
    toggleFullscreen() {
      if (!this.fullscreen) {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    }
  },

});