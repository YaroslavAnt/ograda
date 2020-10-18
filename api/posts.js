const END_POINT = "/posts";

export default $axios => ({
  posts(page = 1) {
    return $axios.$get(`${END_POINT}?page=${page}`);
  },
  post(id) {
    return $axios.$get(`${END_POINT}/${id}`);
  }
});
