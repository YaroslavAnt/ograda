const END_POINT = "/products";

export default $axios => ({
  products() {
    return $axios.$get(END_POINT);
  },

  product(id) {
    return $axios.$get(`${END_POINT}/${id}`);
  },

  productsByPage(page) {
    return $axios.$get(`${END_POINT}?page=${page}`);
  },

  productsByCategory(category_id, page = 1) {
    return $axios.$get(
      `${END_POINT}/search/query?category_id=${category_id}&page=${page}`
    );
  },

  productsBySubcategory(subcategory_id, page = 1) {
    return $axios.$get(
      `${END_POINT}/search/query?subcategory_id=${subcategory_id}&page=${page}`
    );
  },

  productsPopular() {
    return $axios.$get(`/products-popular`);
  },

  productsPrices() {
    return $axios.$get(`products-prices`);
  },

  productsExhibitions() {
    return $axios.$get("/exhibition");
  }
});
