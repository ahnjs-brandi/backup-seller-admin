import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopComponent',

  data() {
    return {
      fullscreen: false,
      safari: false,
    }
  },

  mounted() {
    this.safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    document.addEventListener('fullscreenchange', () => {
      if (document.fullscreenElement) {
        // 전체화면 열리면 메뉴닫기
        this.fullscreen = true;
      } else {
        // 전체화면 닫히면 메뉴열기
        this.fullscreen = false;
      }
    });
  },

  methods: {
    toggleFullscreen() {
      if (!this.fullscreen) {
        // 전체화면 열기
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        }
      } else {
        // 전체화면 닫기
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    },

    openMyStore() {
      window.open("https://www.brandi.co.kr/shop/sugarpowder?id=14020", "_blank")
    }
  },

});