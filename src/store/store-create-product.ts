const state = {
  createStepAccess: 1,
  createCurrentStep: 1,
  productSettings: null,
  productImages: [],
  productTags: null,
  productContent: null,
  saleSettings: null,
  optionSettings: null,
};

const getters = {
  createStepAccess: state => state.createStepAccess,
  createCurrentStep: state => state.createCurrentStep,
  productSettings: state => state.productSettings,
  productImages: state => state.productImages,
  productTags: state => state.productTags,
  productContent: state => state.productContent,
  saleSettings: state => state.saleSettings,
  optionSettings: state => state.optionSettings,
};

const mutations = {
  createStepAccess(state, step) { state.createStepAccess = step; },
  createCurrentStep(state, step) { state.createCurrentStep = step; },
  productSettings: (state, settings) => state.productSettings = settings,
  productImages: (state, images) => state.productImages = images,
  productTags: (state, tags) => state.productTags = tags,
  productContent: (state, content) => state.productContent = content,
  saleSettings: (state, settings) => state.saleSettings = settings,
  optionSettings: (state, settings) => state.optionSettings = settings,
};

const actions = {
  resetCreateProduct({ commit }) {
    commit('createStepAccess', 1);
    commit('createCurrentStep', 1);
    commit('productSettings', null);
    commit('productImages', []);
    commit('productTags', null);
    commit('productContent', null);
    commit('saleSettings', null);
    commit('optionSettings', null);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
};
