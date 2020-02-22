<template>
  <main class="section-padding">
    <h1 class="heading with-skewed-bg">{{this.parsedVars.title || this.title}}</h1>

    <div class="tables">
      <app-table
        v-for="(price, idx) in prices"
        :key="idx"
        :heading="`Цены (прайсы) на ${price.name.toUpperCase()}`"
        :items="price.products"
        class="section-table"
      />
    </div>
  </main>
</template>
 
<script>
import section from "../../components/layout/section";
import TableVue from "../../components/common/Table.vue";
import { mapGetters } from "vuex";
import { getVarsByPage } from "../../api/variables";

export default {
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
        { name: "og:image", content: "https://nuxtjs.org/meta_640.png" },

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
    this.$store.dispatch("products/fetchPrices");

    getVarsByPage("prices").then(({ data }) => {
      this.fetchedVars = data.data.variable;
    });
  },
  computed: {
    ...mapGetters({
      prices: "products/getPrices"
    }),
    parsedVars() {
      return JSON.parse(this.fetchedVars);
    }
  },
  data() {
    return {
      fetchedVars: "{}",
      keywords:
        "Цены на установку заборов, прайсы плит еврозаборов, цены на ворота, цены на калитки, цены на автоматику для ворот",
      title:
        "Цены на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье",
      description:
        "Цены (прайсы) от производителя на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье"
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
    flex: 1;
    padding-top: 100px;
  }

  .tables {
    display: grid;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;
    }
  }

  .heading {
    font-weight: bold;
    font-size: 22px;
    width: calc(100% - 32px);
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin: 20px 16px 20px;
    padding: 12px 24px;
    z-index: 5;
    display: flex;
    position: relative;
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