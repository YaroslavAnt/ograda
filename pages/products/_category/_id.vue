<template>
  <main>
    <product-page />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
export default {
  name: "product.vue",
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