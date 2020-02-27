<template>
  <main>
    <h1 class="heading with-skewed-bg">{{this.parsedVars.title || title}}</h1>
    <app-section class="section">
      <app-intro
        v-for="(service, idx) in services.services"
        :id="service.id"
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
import { getVarsByPage } from "../../api/variables";

export default {
  name: "index.vue",
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
        { name: "og:image", content: this.services.services[0].img_src },
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
  computed: {
    parsedVars() {
      return JSON.parse(this.fetchedVars);
    }
  },
  mounted() {
    this.$store.commit("common/CLOSE_MENU");

    getVarsByPage("services").then(({ data }) => {
      this.fetchedVars = data.data.variable;
    });
  },
  data() {
    return {
      fetchedVars: "{}",
      keywords: `Услуги по установке заборов, доставка еврозаборов, монтаж ограждений и ворот, покраска еврозаборов, цветные еврозаборы`,
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
  .heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin: 20px 16px -20px;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
    @media (min-width: 1024px) {
      margin: 20px 32px -20px;
    }
  }
</style>