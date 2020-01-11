import { getProductByCategory } from "~/api/products";

export const state = () => ({
  list: []
});

const getters = {
  getPillars(state) {
    return state.list;
  }
};

const actions = {
  async fetchPillars({ commit }) {
    try {
      const response = await getProductByCategory(4);
      commit("SET_PILLARS", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_PILLARS(state, data) {
    state.list = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
