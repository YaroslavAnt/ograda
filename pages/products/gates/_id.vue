<template>
  <main>
    <product-page :products="products" />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { gates_set } from "~/static/gates_data";

export default {
  name: "product.vue",
  data() {
    return {
      products: gates_set
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