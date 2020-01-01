<template>
  <div>
    <product-page :products="products" />
  </div>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { pillar_set } from "~/static/pillar_data";

export default {
  name: "product.vue",
  data() {
    return {
      products: pillar_set
    };
  },
  components: {
    "product-page": ProductPage
  }
};
</script>