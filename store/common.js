import { getProductByCategory } from "~/api/products";

export const state = () => ({
  isMenuOpen: false,
  isSpinnerActive: false
});

const getters = {
  getMenuState(state) {
    return state.isMenuOpen;
  }
};

export const actions = {
  runSpinner({ commit }) {
    commit("RUN_SPINNER");
  },
  stopSpinner({ commit }) {
    commit("STOP_SPINNER");
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
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
