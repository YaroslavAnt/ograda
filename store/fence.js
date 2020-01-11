import { getProductByCategory } from "~/api/products";

export const state = () => ({
  list: []
});

const getters = {
  getFence(state) {
    return state.list;
  }
};

const actions = {
  async fetchFence({ commit }) {
    try {
      const response = await getProductByCategory();
      commit("SET_FENCE", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_FENCE(state, data) {
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
