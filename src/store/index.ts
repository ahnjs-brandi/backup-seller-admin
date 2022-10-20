import { createStore } from 'vuex'

export default createStore({
  state: {
    drawer: true,       // 네비게이션 드로워 여부
    loading: false,     // 로딩 여부
    pageTitle: '',      // 페이지 타이틀
  },
  getters: {
    drawer: state => state.drawer,
    pageTitle: state => state.pageTitle,
    loading: state => state.loading
  },
  mutations: {
    toggleLeftDrawer(state) { state.drawer = !state.drawer; },
    closeLeftDrawer(state) { state.drawer = false; },
    setPageTitle(state, title) { state.pageTitle = title; },
    startLoading(state) { state.loading = true; },
    endLoading(state) { state.loading = false; },
  },
  actions: {

  },
  modules: {
  }
})
