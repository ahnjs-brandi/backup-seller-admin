import { createStore } from 'vuex'
import CreateProduct from './store-create-product';

export default createStore({
  state: {
    drawer: true,       // 네비게이션 드로워 여부
    loading: false,     // 로딩 여부
    pageTitle: '',      // 페이지 타이틀
    snackbar: false,    // 스낵바 여부
    snackbarText: '',   // 스낵바 텍스트
    snackbarType: '',   // 스낵바 타입
    viewOption: 'card', // 상품 리스트 뷰 옵션

    demoDialog: false,  // 임시 프로토토타입 공사중 다이얼로그
  },
  getters: {
    drawer: state => state.drawer,
    pageTitle: state => state.pageTitle,
    loading: state => state.loading,
    snackbar: state => state.snackbar,
    snackbarText: state => state.snackbarText,
    snackbarType: state => state.snackbarType,
    viewOption: state => state.viewOption,
  },
  mutations: {
    toggleLeftDrawer(state) { state.drawer = !state.drawer; },
    closeLeftDrawer(state) { state.drawer = false; },
    setPageTitle(state, title) { state.pageTitle = title; },
    startLoading(state) { state.loading = true; },
    endLoading(state) { state.loading = false; },
    showSnackbar(state, { text, type }) {
      state.snackbar = true;
      state.snackbarText = text;
      state.snackbarType = type;
    },
    resetSnackbar(state) {
      state.snackbar = false;
      state.snackbarText = '';
      state.snackbarType = '';
    },
    hideSnackbar(state) { state.snackbar = false; },
    toggleViewOption(state) { state.viewOption = state.viewOption === 'card' ? 'table' : 'card'; },

    // 임시 프로토토타입 공사중 다이얼로그
    openDemoDialog(state) { state.demoDialog = true; },
    closeDemoDialog(state) { state.demoDialog = false; },
  },
  actions: {

  },
  modules: {
    CreateProduct
  }
})
