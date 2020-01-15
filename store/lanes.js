import { getProductByCategory } from "~/api/products";

export const state = () => ({
  list: []
});

const getters = {
  getLanes(state) {
    return state.list;
  }
};

const actions = {
  async fetchLanes({ commit }) {
    try {
      const response = await getProductByCategory(6);
      commit("SET_LANES", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_LANES(state, data) {
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
