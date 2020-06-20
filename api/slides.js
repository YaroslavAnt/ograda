const END_POINT = "/sliders";

export default $axios => ({
  slides() {
    return $axios.$get(END_POINT);
  }
});
