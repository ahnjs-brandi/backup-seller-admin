import { createStore } from 'vuex'
import CreateProduct from './store-create-product';

export default createStore({
  state: {
    drawer: true,       // 네비게이션 드로워 여부
    loading: false,     // 로딩 여부
    pageTitle: '',      // 페이지 타이틀
    demoDialog: false,  // 데모 다이얼로그 여부
  },
  getters: {
    drawer: state => state.drawer,
    pageTitle: state => state.pageTitle,
    loading: state => state.loading,
  },
  mutations: {
    toggleLeftDrawer(state) { state.drawer = !state.drawer; },
    closeLeftDrawer(state) { state.drawer = false; },
    setPageTitle(state, title) { state.pageTitle = title; },
    startLoading(state) { state.loading = true; },
    endLoading(state) { state.loading = false; },

    openDemoDialog(state) { state.demoDialog = true; },
    closeDemoDialog(state) { state.demoDialog = false; },
  },
  actions: {

  },
  modules: {
    CreateProduct
  }
})
