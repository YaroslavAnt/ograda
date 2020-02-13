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
          hid: "keywords",
          name: "keywords",
          content: `Услуги по установке заборов, доставка еврозаборов, монтаж ограждений и ворот, покраска еврозаборов, цветные еврозаборы`
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
        { name: "og:image", content: this.services.services[0].img_src },
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
        { name: "twitter:image", content: this.services.services[0].img_src },
        {
          name: "twitter:image:alt",
          content: this.services.services[0].img_alt
        }
      ]
    };
  },
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue
  },
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
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