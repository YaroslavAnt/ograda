<template>
  <main>
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
        { name: "og:url", content: this.$route.path },
        { name: "og:image", content: this.image },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        { name: "twitter:image", content: this.image },
        { name: "twitter:image:alt", content: this.product.name }
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
    },
    image() {
      return this.product.img_set[0];
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