<template>
  <main>
    <product-page
      :product='productData'
      :popular='popular'
    />
  </main>
</template>
 
<script>
import ProductPage from "~/components/pages/ProductPage";
import { getProduct, getPopularProducts, getPrices } from "~/api/products";
import { replaceWithDash } from "../../../static/utils";
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
          content: `${this.productData.name} с ценой и описанием, ${this.productData.name}, ${this.productData.name}`
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
        { name: "twitter:image:alt", content: this.productData.name }
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
      return `${this.productData.name} от производителя. Цена - ${this.productData.price} грн`;
    },
    description() {
      return `Цены (прайсы) от производителя на ${this.productData.name} в Запорожье`;
    },
    image() {
      return this.productData.img_set[0];
    }
  },

  async asyncData({ params }) {
    try {
      const {
        data: { data: pricesData }
      } = await getPrices();
      const categoryArr = pricesData.find(
        category => replaceWithDash(category.name) === params.category
      );
      const product =
        categoryArr.products.find(
          product => replaceWithDash(product.name) === params.id
        ) || {};
      const {
        data: { data: productData }
      } = await getProduct(product.id);
      const {
        data: { data: popular }
      } = await getPopularProducts();

      return { productData, popular };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
  }
</style>