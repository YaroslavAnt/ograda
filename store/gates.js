import { getProductByCategory } from "~/api/products";

export const state = () => ({
  list: []
});

const getters = {
  getGates(state) {
    return state.list;
  }
};

const actions = {
  async fetchGates({ commit }) {
    try {
      const response = await getProductByCategory(5);
      commit("SET_GATES", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_GATES(state, data) {
    state.list = data;
  }
};

// export default {
//   namespaced: true,
//   state,
//   getters,
//   actions,
//   mutations
// };
