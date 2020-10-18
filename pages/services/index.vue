<template>
  <main>
    <h1 class="heading with-skewed-bg">{{title}}</h1>
    <app-section class="section">
      <ul class="subpages">
        <li
          v-for="(sublink, subpageIdx) in this.services"
          :key='`${subpageIdx}`'
        >
          <nuxt-link
            class="subpage base-font"
            :to='"/services/"+(sublink.path||sublink.name)'
          >{{subpageIdx+1}}. {{sublink.name}}</nuxt-link>
        </li>
      </ul>
    </app-section>
  </main>
</template>

<script>
import sectionVue from "../../components/layout/section.vue";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";
import { DOMAIN } from "../../config";

export default {
  name: "index.vue",
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },

        //Open Graph
        {
          property: "og:title",
          content: this.title,
        },
        {
          property: "og:description",
          content: this.description,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        {
          property: "og:image",
          content: DOMAIN + this.ogImage,
        },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title,
        },
        {
          name: "twitter:image",
          content: DOMAIN + this.ogImage,
        },
        {
          name: "twitter:description",
          content: this.description,
        },
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath }, //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ],
    };
  },
  components: {
    "app-section": sectionVue,
  },
  computed: {},
  // mounted() {
  //   this.$store.commit("common/CLOSE_MENU");
  // },
  data() {
    return {
      fetchedVars: "{}",
      ogImage,
      DOMAIN,
      keywords: `Услуги по установке заборов, доставка еврозаборов, монтаж ограждений и ворот, покраска еврозаборов, цветные еврозаборы`,
      title:
        "Выезд на замер забора. Доставка, установка, покраска еврозаборов.",
      description:
        "Услуги по доставке и монтажу всех видов заборов. Доставка стройматериалов. Демонтаж старых ограждений. Заливка фундамента под ограждения",
      services: [
        { name: "Вызов замерщика", path: "zamer" },
        { name: "Доставка", path: "dostavka" },
        { name: "Заливка фундамента", path: "fundament" },
        { name: "Установка забора", path: "montazh" },
        { name: "Покраска еврозабора", path: "pokraska" },
      ],
    };
  },
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