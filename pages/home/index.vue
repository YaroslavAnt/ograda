<template>
  <main>
    <hero :content="home.hero" />
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
      home
    };
  }
};
</script>

