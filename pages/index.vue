<template>
  <main>
    <h1 class="heading with-skewed-bg">{{this.parsedVars.title || this.title}}</h1>
    <hero />
    <special :special='special'></special>
    <services :content="services" />
    <news />
  </main>
</template>
  
<script>
import heroVue from "./home/sections/hero.vue";
import popularVue from "./home/sections/popular.vue";
import servicesVue from "./home/sections/services.vue";
import newsVue from "./home/sections/news.vue";
import { mapGetters } from "vuex";
import specialVue from "./home/sections/special.vue";
import { getSpecialProducts, getAllProducts } from "../api/products";
import { getAll } from "../api/categories";
import { getAllPosts } from "../api/posts";

import measure from "~/assets/icons/measure.svg";
import cargo from "~/assets/icons/cargo.svg";
import brush from "~/assets/icons/brush.svg";
import fence from "~/assets/icons/fence.svg";
import { getVarsByPage } from "../api/variables";

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
    }),

    parsedVars() {
      return JSON.parse(this.fetchedVars);
    }
  },

  mounted() {
    this.$store.dispatch("common/runSpinner");
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

    getVarsByPage("home").then(({ data }) => {
      this.fetchedVars = data.data.variable;
    });
  },

  methods: {
    fetchSpecial() {
      return getSpecialProducts()
        .then(res => {
          this.special = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    }
  },

  data() {
    return {
      title: "Продажа и установка еврозаборов в Запорожье и области",
      description:
        "Еврозаборы от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений",
      special: [],
      fetchedVars: "{}",
      keywords:
        "Каталог еврозаборов, еврозабор цена с установкой в запорожье, еврозабор Запорожье, бетонный забор запорожье, еврозабор цена Запорожье, стоимость установки еврозабора, забор под ключ Запорожье, глянцевые еврозаборы в запорожье",
      services: {
        section_heading: "Услуги",
        section_subheading:
          "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
        card_list: [
          {
            icon: cargo,
            heading: "Доставка продукции и строй-материалов",
            link: "/services"
          },
          {
            icon: fence,
            heading: "Установка заборов, ворот",
            link: "/services"
          },
          {
            icon: brush,
            heading: "Покраска заборов",
            link: "/services"
          },
          {
            icon: measure,
            heading: "Выезд замерщика",
            link: "/services"
          }
        ]
      }
    };
  },

  head() {
    return {
      title: this.parsedVars.title || this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.parsedVars.description || this.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.parsedVars.keywords || this.keywords
        },

        //Open Graph
        {
          name: "og:title",
          content: this.parsedVars.title || this.title
        },
        {
          name: "og:description",
          content: this.parsedVars.description || this.description
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: this.$route.path },
        {
          name: "og:image",
          content:
            (this.firstProduct && this.firstProduct.img_set[0]) ||
            "https://nuxtjs.org/meta_640.png"
        },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.parsedVars.title || this.title
        },
        {
          name: "twitter:description",
          content: this.parsedVars.description || this.description
        },
        {
          name: "twitter:image",
          content:
            (this.firstProduct && this.firstProduct.img_set[0]) ||
            "https://nuxtjs.org/meta_640.png"
        },
        {
          name: "twitter:image:alt",
          content: this.firstProduct && this.firstProduct.name
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    // background-color: #fff;
    position: relative;

    .heading {
      position: absolute;
      font-weight: bold;
      font-size: 22px;
      width: calc(100% - 32px);
      line-height: 1;
      display: inline-block;
      text-align: center;
      color: #fff;
      margin: 20px 16px 20px;
      padding: 12px 24px;
      z-index: 5;
      display: flex;
      justify-content: center;
      &::before {
        background-color: var(--green);
      }

      @media (min-width: 600px) {
        font-size: 28px;
        line-height: 1;
      }
    }
  }
</style>


