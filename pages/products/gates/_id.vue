<template>
  <div>
    <product-page :products="products" />
  </div>
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