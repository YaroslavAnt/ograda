const END_POINT = "/subcategories";

export default $axios => ({
  subcategories() {
    return $axios.$get(`${END_POINT}`);
  },
  subcategoriesByCategory(categoryId) {
    return $axios.$get(`${END_POINT}/category/${categoryId}`);
  },
  subcategory(id) {
    return $axios.$get(`${END_POINT}/${id}`);
  }
});
