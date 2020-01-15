import { getProductByCategory } from "~/api/products";

export const state = () => ({
  isMenuOpen: false
});

const getters = {
  getMenuState(state) {
    return state.isMenuOpen;
  }
};

// const actions = {
//   setMenuState({ commit }) {
//     try {
//       const response = await getProductByCategory();
//       commit("SET_FENCE", response.data);
//     } catch (error) {
//       console.log("*******");
//     }
//   }
// };

export const mutations = {
  OPEN_MENU(state, data) {
    state.isMenuOpen = true;
  },
  CLOSE_MENU(state, data) {
    state.isMenuOpen = false;
  },
  SET_MENU(state, data) {
    state.isMenuOpen = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  // actions,
  mutations
};
