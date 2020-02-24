<template>
  <main>
    <product-page
      :product='product'
      :popular='popular'
    />
  </main>
</template>
 
<script>
import ProductPage from "~/components/pages/ProductPage";
import { getProduct, getPopularProducts } from "~/api/products";
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
          hid: "keywords",
          name: "keywords",
          content: `${this.product.name} с ценой и описанием, ${this.product.category.name}, ${this.product.subcategory.name}`
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
      },
      popular: []
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
      return `${this.product.name.toUpperCase()} от производителя. Цена - ${
        this.product.price
      } грн`;
    },
    description() {
      return `Цены (прайсы) от производителя на ${this.product.name} в Запорожье`;
    },
    image() {
      return this.product.img_set[0];
    }
  },
  mounted() {
    this.$store.dispatch("common/runSpinner");
    this.fetchProduct();
    this.fetchPopular();
  },
  methods: {
    fetchProduct() {
      getProduct(this.$route.query.id)
        .then(res => {
          this.product = res.data.data;
        })
        .catch(() => {
          this.$store.dispatch("common/stopSpinner");
          alert("Невозможно загрузить данные");
        });
    },
    fetchPopular() {
      getPopularProducts()
        .then(res => {
          this.popular = res.data.data;
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
  }
</style>