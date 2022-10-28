const state = {
  createStepAccess: 1,
  createCurrentStep: 1,
  productSettings: null,
  productImages: [],
  productTags: null,
  productContent: null,
};

const getters = {
  createStepAccess: state => state.createStepAccess,
  createCurrentStep: state => state.createCurrentStep,
  productSettings: state => state.productSettings,
  productImages: state => state.productImages,
  productTags: state => state.productTags,
  productContent: state => state.productContent,
};

const mutations = {
  createStepAccess(state, step) { state.createStepAccess = step; },
  createCurrentStep(state, step) { state.createCurrentStep = step; },
  productSettings: (state, settings) => state.productSettings = settings,
  productImages: (state, images) => state.productImages = images,
  productTags: (state, tags) => state.productTags = tags,
  productContent: (state, content) => state.productContent = content,
};

export default {
  state,
  getters,
  mutations,
};