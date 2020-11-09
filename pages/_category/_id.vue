<template>
  <main>
    <product-page :product="productData || {}" :popular="popular || []" />
  </main>
</template>

<script>
import ProductPage from "~/components/pages/ProductPage";
import { replaceWithDash } from "~/static/utils";
import { BASE_URL, DOMAIN } from "~/config";

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
          content: `${this.productData.name} с ценой и описанием, ${this.productData.category.name}, ${this.productData.subcategory.name}, ${this.productData.subcategory.name} фото`
        },
        {
          property: "og:title",
          content: this.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        { property: "og:image", content: this.image },

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
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ],
      script: [{ type: "application/ld+json", json: this.productMicrodata }]
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

  methods: {
    getPrice(priceStr) {
      const [price] = priceStr.match(/\d+/g) || ["0"];
      return price;
    }
  },

  computed: {
    category() {
      return this.$route.params.category;
    },
    title() {
      return `✔ ${this.productData.name}. Цена - ${this.productData.price} грн`;
    },
    description() {
      return `${this.productData.name} в Запорожье без посредников. ${this.productData.description} `;
    },
    image() {
      return BASE_URL + this.productData.img_set[0];
    },
    productMicrodata() {
      return {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: this.productData.name,
        image: [BASE_URL + this.productData.img_set[0]],
        description: this.productData.description.split("#").join("."),
        sku: "ograda-sku-" + this.productData.id,
        mpn: "null",
        brand: {
          "@type": "Brand",
          name: "ograda.zp.ua"
        },
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5"
          },
          author: {
            "@type": "Person",
            name: "Olena Volyk"
          }
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "20"
        },
        offers: {
          "@type": "Offer",
          url: DOMAIN + this.$route.path,
          priceCurrency: "UAH",
          price: this.getPrice(this.productData.price),
          priceValidUntil:
            new Date().getMonth() < 9
              ? new Date().getFullYear() +
                "-" +
                (new Date().getMonth() + 3) +
                "-01"
              : new Date().getFullYear() + 1 + "-02-01",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Oграда"
          }
        }
      };
    }
  },

  async asyncData({ params, store, redirect, $productsAPI, error }) {
    try {
      const { data: pricesData } = await $productsAPI.productsPrices();
      const categoryArr = pricesData.find(
        category => replaceWithDash(category.name) === params.category
      );
      const product =
        categoryArr.products.find(
          product => replaceWithDash(product.name) === params.id
        ) || {};

      if (!product) {
        error({ message: "Page not found", statusCode: 404 });
      }

      const { data: productData } = await $productsAPI.product(product.id);
      const { data: popular } = await $productsAPI.productsPopular();
      return { productData, popular };
    } catch (err) {
      error({ message: "Page not found", statusCode: 404 });
      // () => alert("Невозможно загрузить данные");
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  flex: 1;
}
</style>
