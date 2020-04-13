<template>
  <main class="section-padding">
    <h1 class="heading with-skewed-bg">{{this.title}}</h1>

    <div class="tables">
      <app-table
        v-for="(price, idx) in prices"
        :key="idx"
        :category='price.name'
        :items="price.products"
        class="section-table"
        :withLinks='true'
      />

      <app-table
        v-for="(price, idx) in staticPrices"
        :key="idx"
        :category='price.category'
        :items="price.items"
        class="section-table"
      ></app-table>
    </div>
  </main>
</template>
 
<script>
import section from "../../components/layout/section";
import TableVue from "../../components/common/Table.vue";
import { mapGetters } from "vuex";
import { getVarsByPage } from "../../api/variables";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";
import { DOMAIN } from "../../config";
import { getPrices } from "../../api/products";

export default {
  head() {
    return {
      title: "$ " + this.title,
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
          property: "og:title",
          content: this.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        {
          property: "og:image",
          content: DOMAIN + this.ogImage
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
          content: DOMAIN + this.ogImage
        },
        { name: "twitter:image:alt", content: "Цены на установку заборов" }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.path } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
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
  },

  async asyncData() {
    try {
      const {
        data: { data: prices }
      } = await getPrices();
      console.log({ prices });
      return { prices };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  },
  data() {
    return {
      fetchedVars: "{}",
      ogImage,
      DOMAIN,
      keywords:
        "еврозабор цена, забор бетонный наборной цена, цена забора, бетонные заборы цена, забор бетонный цена, евроштакетник цена, тротуарная плитка цена, ворота цена, бетонные столбики цена",
      title: "Цены на продукцию",
      description:
        "Цены (прайсы) от производителя на еврозаборы, ворота и калитки, бетонные столбики, тротуарную плитку в Запорожье",
      staticPrices: [
        {
          category: "Услуги",
          items: [
            {
              name: "Вызов замерщика по городу",
              price: "50"
            },
            {
              name: "Доставка",
              price: "по догов."
            },
            {
              name: "Заливка фундамена",
              price: "100 грн/метр"
            },
            {
              name: "Установка еврозабора",
              price: "150-200 грн/столб"
            },
            {
              name: "Замазка раствором щелей",
              price: "50"
            },
            {
              name: "Покраска кислотой",
              price: "50-100"
            }
          ]
        },
        {
          category: "Материалы",
          items: [
            {
              name: "Песок (35кг)",
              price: "25 грн/мешок"
            },
            {
              name: "Щебень (35кг)",
              price: "25 грн/мешок"
            },
            {
              name: "Цемент М-400 Кривой Рог (25кг)",
              price: "80 грн/мешок"
            },
            {
              name: "Кирпич для расклинивания столбов",
              price: "7 грн/шт"
            },
            {
              name: "Ceresit CM-11 для заделки швов (25кг)",
              price: "140 грн/мешок"
            }
          ]
        }
      ],
      materialsPrices: []
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
    flex: 1;
    padding-top: 100px;
    @media (min-width: 1024px) {
      padding-top: unset;
    }
  }

  .tables {
    display: grid;
    grid-gap: 24px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
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