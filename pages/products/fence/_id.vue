<template>
  <div>
    <product-page />
  </div>
</template>

<script>
import ProductPage from "../../../components/pages/ProductPage";
export default {
  name: "product.vue",
  components: {
    "product-page": ProductPage
  }
};
</script>