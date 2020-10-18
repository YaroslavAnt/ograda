export const state = () => ({
  list: [
    {
      name: "",
      subcategories: [
        {
          name: ""
        }
      ]
    },
    {
      name: "",
      subcategories: [
        {
          name: ""
        }
      ]
    },
    {
      name: "",
      subcategories: [
        {
          name: ""
        }
      ]
    },
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
  getAllCategories(state) {
    return state.list;
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
  // actions,
  mutations
};
