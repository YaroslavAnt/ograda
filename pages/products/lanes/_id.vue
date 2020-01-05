<template>
  <div>
    <product-page :products="products" />
  </div>
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