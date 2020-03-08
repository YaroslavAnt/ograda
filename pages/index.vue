<template>
  <main>
    <h1 class="heading with-skewed-bg">{{title}}</h1>
    <hero />
    <special :special='special'></special>
    <services :content="services" />
    <news />
  </main>
</template>
  
<script>
import heroVue from "../components/sections/home/hero";
import servicesVue from "../components/sections/home/services.vue";
import newsVue from "../components/sections/home/news.vue";
import specialVue from "../components/sections/home/special.vue";

import { mapGetters } from "vuex";
import { getSpecialProducts, getAllProducts } from "../api/products";
import { getAll } from "../api/categories";
import { getAllSlides } from "../api/slides";
import { getAllPosts } from "../api/posts";

import measure from "~/assets/icons/measure.svg";
import cargo from "~/assets/icons/cargo.svg";
import brush from "~/assets/icons/brush.svg";
import fence from "~/assets/icons/fence.svg";
import { getVarsByPage } from "../api/variables";
import ogImage from "../assets/img/services/zvetnoi_zabor2.jpg";
import { DOMAIN } from "../config";

export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
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
    this.$store.dispatch("common/runSpinner");
    this.fetchSpecial();
    this.$store.commit("common/CLOSE_MENU");
    Promise.all([
      getAllSlides().then(({ data }) => {
        this.slides = data.data.data;
        this.$store.commit("slides/SET_SLIDES", data.data);
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
      return getSpecialProducts()
        .then(res => {
          this.special = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    }
  },

  data() {
    return {
      title: "Еврозаборы в Запорожье",
      description:
        "Еврозаборы от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений",
      special: [],
      slides: [],
      fetchedVars: {},
      keywords:
        "Каталог еврозаборов, еврозабор цена с установкой в запорожье, еврозабор Запорожье, бетонный забор запорожье, еврозабор цена Запорожье, стоимость установки еврозабора, забор под ключ Запорожье, глянцевые еврозаборы в запорожье",
      services: {
        section_heading: "Услуги",
        section_subheading:
          "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
        card_list: [
          {
            icon: cargo,
            id: "delivery",
            heading: "Доставка продукции и строй-материалов",
            link: "/services"
          },
          {
            icon: fence,
            id: "montage",
            heading: "Установка заборов, ворот",
            link: "/services"
          },
          {
            icon: brush,
            id: "pokraska",
            heading: "Покраска заборов",
            link: "/services"
          },
          {
            icon: measure,
            id: "measure",
            heading: "Выезд замерщика",
            link: "/services"
          }
        ]
      },
      ogImage,
      DOMAIN
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
          content: this.keywords
        },

        //Open Graph
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
        {
          property: "og:image",
          content: DOMAIN + this.ogImage
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
          name: "twitter:image",
          content: DOMAIN + this.ogImage
        },
        {
          name: "twitter:image:alt",
          content: this.title
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
      position: relative;
      font-weight: bold;
      font-size: 22px;
      // width: calc(100% - 32px);
      line-height: 1;
      display: inline-block;
      text-align: center;
      color: #fff;
      margin: 20px 16px -20px;
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


