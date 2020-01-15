<template>
  <main>
    <product-page :products="products" />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { fence_set } from "~/static/fence_data/index";

export default {
  name: "product.vue",
  data() {
    return {
      products: fence_set
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