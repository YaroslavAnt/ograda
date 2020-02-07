<template>
  <main>
    <h1>Еврозаборы, ворота и калитки, бетонные столбики, тротуарная плитка в Запорожье</h1>
    <hero :content="home.hero" />
    <!-- //TODO add special proposition section-->
    <popular />
    <services :content="home.services" />
    <news />
  </main>
</template>

<script>
import heroVue from "./sections/hero.vue";
import popularVue from "./sections/popular.vue";
import servicesVue from "./sections/services.vue";
import newsVue from "./sections/news.vue";
import { home } from "~/static/content_data";
export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
    popular: popularVue,
    services: servicesVue,
    news: newsVue
  },

  data() {
    return {
      home,
      title: "Продажа и установка еврозаборов в Запорожье и области",
      description:
        "Еврозаборы от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений"
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
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
  }
  h1 {
    position: absolute;
    left: -500px;
    transform: translateX(-100%);
  }
</style>

