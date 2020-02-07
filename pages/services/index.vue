<template>
  <main>
    <h1>Доставка, установка, покраска еврозаборов.</h1>
    <app-section
      class="section"
      :heading="services.heading"
    >
      <app-intro
        v-for="(service, idx) in services.services"
        :key="idx"
        :img_src="service.img_src"
        :img_alt="service.img_alt"
        :heading="service.heading"
        :paragraphs="service.paragraphs"
        :withBorder="true"
        :reversed="Boolean(idx%2)"
      />
    </app-section>
  </main>
</template>

<script>
import IntroVue from "../../components/common/Intro.vue";
import sectionVue from "../../components/layout/section.vue";
import { services } from "~/static/content_data";

export default {
  name: "index.vue",
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
  },
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue
  },
  data() {
    return {
      title:
        "Выезд на замер забора. Доставка, установка, покраска еврозаборов.",
      description:
        "Услуги по доставке и монтажу всех видов заборов. Доставка стройматериалов. Демонтаж старых ограждений. Заливка фундамента под ограждения",
      services
    };
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    position: absolute;
    transform: translateX(-100%);
    left: -500px;
  }
</style>