export const state = () => ({
  isMenuOpen: false,
  isSpinnerActive: false,
  rating: undefined,
  reviews_number: undefined
});

const getters = {
  getMenuState(state) {
    return state.isMenuOpen;
  },
  getRating(state) {
    return state.rating;
  },
  getReviews(state) {
    return state.reviews_number;
  },
  getLoaderState(state) {
    return state.isSpinnerActive;
  }
};

export const actions = {
  runSpinner({ commit }) {
    commit("RUN_SPINNER");
  },
  stopSpinner({ commit }) {
    commit("STOP_SPINNER");
  },
  closeMenu({ commit }) {
    commit("CLOSE_MENU");
  }
};

export const mutations = {
  OPEN_MENU(state, data) {
    state.isMenuOpen = true;
  },
  CLOSE_MENU(state) {
    state.isMenuOpen = false;
  },
  SET_MENU(state, data) {
    state.isMenuOpen = data;
  },
  RUN_SPINNER(state) {
    state.isSpinnerActive = true;
  },
  STOP_SPINNER(state) {
    state.isSpinnerActive = false;
  },
  SET_RATING(state, value) {
    state.rating = value;
  },
  SET_REVIEWS(state, value) {
    state.reviews_number = value;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
