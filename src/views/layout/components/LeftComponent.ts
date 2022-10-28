import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LeftComponent',

  data() {
    return {
      open: [] as string[],
      drawer: true,
    }
  },

  computed: {
    currentView() {
      return this.$route.path.split('/')[1];
    }
  },

  watch: {
    '$route.path'() {
      this.openGourp();
    }
  },

  mounted() {
    this.openGourp();
  },

  methods: {
    openGourp() {
      this.open = [];
      if ( ['product-list', 'product'].includes(this.currentView) ) {
        this.open = ['Products'];
      }
    },
    openMyStore() {
      window.open("https://www.brandi.co.kr/shop/sugarpowder?id=14020", "_blank")
    }
  }
});