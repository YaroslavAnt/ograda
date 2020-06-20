import { getAllPosts } from "~/api/posts";

export const state = () => {
  return {
    posts: {
      last_page: "",
      data: []
    }
  };
};

const getters = {
  getPosts(state) {
    return state.posts;
  },
  getLastPosts(state) {
    return state.posts.data.slice(0, 3);
  }
};

const actions = {
  async fetchPosts({ commit }) {
    try {
      const response = await getAllPosts();
      commit("posts/SET_POSTS", response);
    } catch (error) {
      console.log("*******");
    }
  }
};

export const mutations = {
  SET_POSTS(state, data) {
    state.posts = data;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
