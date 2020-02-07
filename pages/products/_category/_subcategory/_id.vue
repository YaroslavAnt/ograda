<template>
  <main>
    <h1>Цена и описание товара {{product.name}} категории {{product.subcategory.name}}</h1>
    <product-page :product='product' />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { getProduct } from "~/api/products";
export default {
  name: "product.vue",
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          name: "og:title",
          content: this.title
        },
        {
          name: "og:description",
          content: this.description
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: "https://nuxtjs.org" },
        { name: "og:image", content: "https://nuxtjs.org/meta_640.png" },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@nuxt_js" },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        { name: "twitter:image", content: "https://nuxtjs.org/meta_640.png" },
        { name: "twitter:image:alt", content: "NuxtJS Logo" }
      ]
    };
  },
  data() {
    return {
      product: {
        name: "",
        subcategory: { name: "" },
        description: "",
        img_set: [],
        option: {},
        category: {
          name: "",
          id: ""
        }
      }
    };
  },
  components: {
    "product-page": ProductPage
  },
  computed: {
    category() {
      return this.$route.params.category;
    },
    title() {
      return `Цена и описание товара ${this.product.name}`;
    },
    description() {
      return `Цены (прайсы) от производителя на ${this.product.name} в Запорожье`;
    }
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.$store.dispatch("common/runSpinner");
      getProduct(this.$route.params.id)
        .then(res => {
          this.product = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
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