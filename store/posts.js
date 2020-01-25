import { getAll } from "~/api/categories";

export const state = () => ({
  list: [
    {
      id: "",
      img_alt: "",
      title: "",
      body: "",
      short_body: "",
      image: "",
      created_at: "",
      updated_at: ""
    }
  ]
});

const getters = {
  getPosts(state) {
    return state.list;
  },
  getLastPosts(state) {
    return state.list.slice(-3);
  }
};

const actions = {
  async fetchPosts({ commit }) {
    try {
      const response = await getAll();
      commit("posts/SET_POSTS", response.data);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_POSTS(state, data) {
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
