<template>
  <main>
    <hero />
    <special :special='special'></special>
    <services :content="home.services" />
    <news />
  </main>
</template>
 
<script>
import heroVue from "./home/sections/hero.vue";
import popularVue from "./home/sections/popular.vue";
import servicesVue from "./home/sections/services.vue";
import newsVue from "./home/sections/news.vue";
import { home } from "~/static/content_data";
import { mapGetters } from "vuex";
import specialVue from "./home/sections/special.vue";
import { getSpecialProducts, getAllProducts } from "../api/products";
import { getAll } from "../api/categories";
import { getAllPosts } from "../api/posts";

export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
    popular: popularVue,
    special: specialVue,
    services: servicesVue,
    news: newsVue
  },

  computed: {
    ...mapGetters({
      firstProduct: "products/getFirstProduct"
    })
  },

  mounted() {
    this.fetchSpecial();
    this.$store.commit("common/CLOSE_MENU");
    Promise.all([
      getAllProducts().then(res => {
        this.$store.commit("products/SET_PRODUCTS", res.data.data.data);
      }),
      getAllPosts().then(({ data }) => {
        this.$store.commit("posts/SET_POSTS", data.data);
      })
    ])
      .catch(() => alert("Невозможно загрузить данные"))
      .finally(() => this.$store.dispatch("common/stopSpinner"));
  },

  methods: {
    fetchSpecial() {
      this.$store.dispatch("common/runSpinner");
      return getSpecialProducts()
        .then(res => {
          this.special = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    }
  },

  data() {
    return {
      title: "Продажа и установка еврозаборов в Запорожье и области",
      description:
        "Еврозаборы от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений",
      home,
      special: []
    };
  },

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
          content:
            "Каталог еврозаборов, еврозабор цена с установкой в запорожье, еврозабор Запорожье, бетонный забор запорожье, еврозабор цена Запорожье, стоимость установки еврозабора, забор под ключ Запорожье, глянцевые еврозаборы в запорожье"
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
        {
          // name: "og:image",
          // content: this.firstProduct.img_set[0]
        },
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
        {
          // name: "twitter:image",
          // content: this.firstProduct.img_set[0]
        },
        {
          // name: "twitter:image:alt",
          // content: this.firstProduct.name
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
  }
</style>


