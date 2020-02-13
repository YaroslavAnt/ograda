<template>
  <main>
    <h1>Цены на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье</h1>
    <app-section
      v-for="(price, idx) in prices"
      :key="idx"
      class="section"
      :heading="price.heading"
    >
      <app-table :items="price.items" />
    </app-section>
  </main>
</template>

<script>
import section from "../../components/layout/section";
import TableVue from "../../components/common/Table.vue";

import { fence_set } from "../../static/fence_data";
import { pillar_set } from "../../static/pillars_data";
import { gates_set } from "../../static/gates_data";

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
          content:
            "Цены на установку заборов, прайсы плит еврозаборов, цены на ворота, цены на калитки, цены на автоматику для ворот"
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
        { name: "og:image", content: "https://nuxtjs.org/meta_640.png" },
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
        { name: "twitter:image", content: "https://nuxtjs.org/meta_640.png" },
        { name: "twitter:image:alt", content: "Цены на установку заборов" }
      ]
    };
  },
  name: "index.vue",
  components: {
    "app-section": section,
    "app-table": TableVue
  },
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },
  data() {
    //TODO endpoint for prices

    return {
      title:
        "Цены на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье",
      description:
        "Цены (прайсы) от производителя на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье",
      prices: [
        {
          heading: "Цены на заборы в Запорожье",
          items: fence_set
        },
        {
          heading: "Цены на столбики для еврозабора, для винограда в Запорожье",
          items: pillar_set
        },
        {
          heading: "Цены на ворота и калитки в Запорожье",
          items: gates_set
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
  }
  h1 {
    position: absolute;
    transform: translateX(-100%);
    left: -500px;
  }
</style>