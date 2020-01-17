<template>
  <main>
    <h1>Цена и описание товара {{product.name}} категории {{product.subcategory.name}}</h1>
    <product-page :product='product' />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { getProduct } from "../../../api/products";
export default {
  name: "product.vue",
  head() {
    return {
      title: `Цена и описание товара ${this.product.name}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Цены (прайсы) от производителя на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье"
        }
      ]
    };
  },
  data() {
    return {
      product: {
        name: "",
        subcategory: { name: "" }
      }
    };
  },
  components: {
    "product-page": ProductPage
  },
  computed: {
    category() {
      return this.$route.params.category;
    }
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      getProduct(this.$route.params.id)
        .then(res => {
          this.product = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    }
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;

    h1 {
      position: absolute;
      transform: translateX(-100%);
      left: -500px;
    }
  }
</style>