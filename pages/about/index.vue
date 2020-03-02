<template>
  <main>
    <h1 class="heading with-skewed-bg">{{title}}</h1>
    <about :content=" about.about" />
    <advantages :content="about.advantages" />
    <exposition
      :content="about.expo"
      :exhibitions='exhibitions'
    />
  </main>
</template>

<script>
import aboutVue from "~/components/sections/about/about.vue";
import advantagesVue from "~/components/sections/about/advantages.vue";
import expositionVue from "~/components/sections/about/exposition.vue";
import { about } from "~/static/content_data";
import { getExhibitions } from "../../api/products";
import { getVarsByPage } from "../../api/variables";
export default {
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
        // Open Graph
        { name: "og:title", content: this.title },
        {
          name: "og:description",
          content: this.description
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: this.$route.path },
        {
          name: "og:image",
          content: "../../assets/img/services/zvetnoi_zabor2.jpg"
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
          content: "../../assets/img/services/zvetnoi_zabor2.jpg"
        },
        { name: "twitter:image:alt", content: "Производство еврозаборов" }
      ]
    };
  },
  components: {
    about: aboutVue,
    advantages: advantagesVue,
    exposition: expositionVue
  },
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
    getExhibitions()
      .then(({ data }) => {
        this.exhibitions = data.data.data;
      })
      .catch(() => alert("Невозножно загрузить данные"));
    // getVarsByPage(this.$route.path).then(({ data }) => {
    //   console.log({ data });
    //   this.fetchedVars = data.data.variable;
    // });
  },

  data() {
    return {
      about,
      title: "О нашей компании",
      description: "Производство и установка еврозаборов в Запорожье",
      keywords:
        "Производство еврозаборов, установка еврозабора, забор под ключ в Запорожье, доставка еврозаборов по Запорожью и области",
      exhibitions: [],
      fetchedVars: "{}"
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    position: relative;
  }
  .heading {
    position: relative;
    width: calc(100% - 32px);
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin: 20px 16px -30px;
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
</style>