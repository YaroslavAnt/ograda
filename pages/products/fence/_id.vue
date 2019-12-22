<template>
  <div>
    <product-page :products="products" />
  </div>
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