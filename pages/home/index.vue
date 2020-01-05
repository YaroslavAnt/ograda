<template>
  <main>
    <hero />
    <popular />
    <services />
    <news />
  </main>
</template>

<script>
import heroVue from "./sections/hero.vue";
import popularVue from "./sections/popular.vue";
import servicesVue from "./sections/services.vue";
import newsVue from "./sections/news.vue";

export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
    popular: popularVue,
    services: servicesVue,
    news: newsVue
  }
};
</script>

