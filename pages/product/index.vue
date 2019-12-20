<template>
  <div>
    <product-page />
  </div>
</template>

<script>
import ProductPageVue from "../../components/pages/ProductPage";

export default {
  name: "product.vue",
  components: {
    "product-page": ProductPageVue
  }
};
</script>