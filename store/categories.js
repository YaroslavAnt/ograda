import { getAll } from "~/api/categories";

export const state = () => ({
  list: [
    {
      name: "",
      subcategories: [
        {
          name: ""
        }
      ]
    }
  ],
  category: {
    name: "",
    id: ""
  }
});

const getters = {
  getFence(state) {
    return state.list;
  }
};

const actions = {
  async fetchCategories({ commit }) {
    try {
      const response = await getAll();
      commit("categories/SET_CATEGORIES", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_CATEGORIES(state, data) {
    state.list = data;
  },
  SET_CATEGORY(state, data) {
    state.category = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
