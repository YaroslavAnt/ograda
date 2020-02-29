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
import { getVarsByPage } from "../../api/variables";

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
          content: this.keywords
        },

        //Open Graph
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
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:description",
          content: this.description
        }
      ]
    };
  },
  components: {
    "app-section": sectionVue
  },
  computed: {},
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },
  data() {
    return {
      fetchedVars: "{}",
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
        { name: "Покраска еврозабора", path: "pokraska" }
      ]
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