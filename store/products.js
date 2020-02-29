import {
  getAllProducts,
  getProductByCategory,
  getPrices
} from "~/api/products";

import { runSpinner } from "./common";

export const state = () => ({
  list: [],
  byCategory: [],
  product: {
    name: {}
  },
  prices: [
    {
      name: ""
    }
  ]
});

const getters = {
  getProducts(state) {
    return state.list;
  },
  getFirstProduct(state) {
    return state.list[0];
  },
  getProduct(state) {
    return state.product;
  },
  getPopularProducts: state => {
    return state.list.filter(product => {
      return product.isPopular === 1;
    });
  },
  getPrices: state => state.prices
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
  },
  async fetchPrices({ commit }) {
    try {
      const { data } = await getPrices();
      commit("SET_PRICES", data.data);
    } catch (err) {
      alert("Невозможно загрузить данные");
    }
  },
  setProduct({ commit }, product) {
    commit("SET_PRODUCT", product);
  }
};

export const mutations = {
  SET_PRODUCTS(state, data) {
    state.list = data;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_PRODUCT(state, product) {
    state.product = product;
  },
  SET_BY_CATEGORY(state, products) {
    state.byCategory = products;
  },
  SET_PRICES(state, prices) {
    state.prices = prices;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
