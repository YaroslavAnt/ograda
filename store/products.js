import { getAllProducts, getProductByCategory } from "~/api/products";

export const state = () => ({
  list: [],
  byCategory: [],
  product: {}
});

const getters = {
  getProducts(state) {
    return state.list;
  },
  getProduct(state) {
    return state.product;
  },
  getPopularProducts: state => {
    return state.list.filter(product => {
      return product.isPopular === 1;
    });
  }
};

const actions = {
  async fetchAllProducts({ commit }) {
    try {
      const response = await getAllProducts();
      commit("SET_PRODUCTS", response.data);
    } catch (error) {
      console.log("*******");
    }
  },
  async fetchByCategory(categoryId) {
    try {
      const { data } = await getProductByCategory(categoryId);
      commit("products/SET_BY_CATEGORY", data);
    } catch (err) {
      alert("Невозможно загрузить данные");
    }
  }
};

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.list = data;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_BY_CATEGORY(state, products) {
    state.byCategory = products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
