import { getAll } from "~/api/categories";

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
      const response = await getAll();
      commit("SET_CATEGORIES", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_CATEGORIES(state, data) {
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
