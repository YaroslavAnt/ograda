const END_POINT = "/categories";

export default $axios => ({
  categories() {
    return $axios.$get(`${END_POINT}`);
  },
  category(id) {
    return $axios.$get(`${END_POINT}/${id}`);
  }
});
