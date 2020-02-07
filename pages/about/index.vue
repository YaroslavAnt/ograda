<template>
  <main>
    <h1>Производство и установка еврозаборов в Запорожье</h1>
    <about :content="about.about" />
    <advantages :content="about.advantages" />
    <exposition :content="about.expo" />
  </main>
</template>

<script>
import aboutVue from "./sections/about.vue";
import advantagesVue from "./sections/advantages.vue";
import expositionVue from "./sections/exposition.vue";
import { about } from "~/static/content_data";
export default {
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        // Open Graph
        { name: "og:title", content: this.title },
        { name: "og:description", content: this.description },
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
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: "https://nuxtjs.org/meta_640.png" },
        { name: "twitter:image:alt", content: "NuxtJS Logo" }
      ]
    };
  },
  components: {
    about: aboutVue,
    advantages: advantagesVue,
    exposition: expositionVue
  },
  data() {
    return {
      about,
      title: "Производство и установка еврозаборов в Запорожье",
      description: "О нашей компании"
    };
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    position: absolute;
    left: -500px;
  }
</style>