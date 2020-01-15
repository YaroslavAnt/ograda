<template>
  <main>
    <product-page :products="products" />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { lanes_set } from "~/static/lanes_data";

export default {
  name: "product.vue",
  data() {
    return {
      products: lanes_set
    };
  },
  components: {
    "product-page": ProductPage
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
  }
</style>