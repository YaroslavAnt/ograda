export const state = () => {
  return {
    slides: {
      last_page: "",
      data: []
    }
  };
};

const getters = {
  getSlides(state) {
    return state.slides.data;
  }
};

export const mutations = {
  SET_SLIDES(state, data) {
    state.slides = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
};
