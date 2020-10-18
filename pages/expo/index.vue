<template>
  <main>
    <h1 class="heading with-skewed-bg">{{title}}</h1>
    <p class="base-font section-padding">Для возможности убедиться в качестве нашей продукции "вживую" есть <b>натурные выставки еврозаборов:</b></p>

    <exposition
      v-for="(expo, expo_idx) in exhibitions"
      :expo='expo'
      :key="expo_idx"
      :class="{'with-bordertop': expo_idx!==0}"
    />
  </main>
</template>
  
<script>
import expositionVue from "~/components/sections/about/exposition.vue";
import { DOMAIN } from "../../config";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";

export default {
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
        // Open Graph
        { property: "og:title", content: this.title },
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
          name: "twitter:description",
          content: this.description,
        },
        {
          name: "twitter:image",
          content: DOMAIN + this.ogImage,
        },
        { name: "twitter:image:alt", content: "Производство еврозаборов" },
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.path }, //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ],
    };
  },
  components: {
    exposition: expositionVue,
  },
  // mounted() {
  //   this.$store.commit("common/CLOSE_MENU");
  // },

  async asyncData({ $productsAPI }) {
    try {
      const { data } = await $productsAPI.productsExhibitions();
      return { exhibitions: data.data };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  },

  data() {
    return {
      DOMAIN,
      ogImage,
      title: "Выставки еврозабора",
      description: "Производство и установка еврозаборов в Запорожье",
      keywords:
        "Выставки еврозаборов, производство бетонного забора, производство тротуарной плитки",
      exhibitions: [],
    };
  },
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
  margin: 20px 16px -20px;
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

.with-bordertop {
  border-top: 1px solid var(--green);
}
</style>