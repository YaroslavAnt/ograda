<template>
  <main>
    <h1 class="with-skewed-bg">{{replaceWithSpace(category)}}</h1>
    <app-section class="section">
      <div class="section-switchbox">
        <div
          class="section-switch"
          v-if="subcategories.length>1"
        >
          <!-- <router-link :to='{path:`/products/${category}?category_id=${categoryId}`}'>
          <span
            class="switch-tab"
            :class="{'switch-tab-active': !$route.query.subcategory}"
          >ВСЕ ВИДЫ</span>
        </router-link> -->

          <router-link
            v-for="(tab,idx) in subcategories"
            :key="idx"
            :to="{ path: `/products/${replaceWithDash(category) }/${replaceWithDash(tab.name) }`}"
          >
            <span
              class="switch-tab"
              :class="{'switch-tab-active': $route.params.subcategory===replaceWithDash(tab.name)}"
            >{{tab.name}}</span></router-link>
        </div>
      </div>
      <p
        class="large-font"
        v-if="productsData.data.length === 0"
      >Товары еще не загружены...</p>

      <div class="section-grid">
        <product-card
          v-for="(product) in productsData.data"
          :key="product.id"
          :product="product"
        />
      </div>
    </app-section>

    <div class="container-paginate">
      <app-pagination
        v-if="productsData.last_page > 1"
        :page-count="productsData.last_page"
        v-model="page"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'className'"
        :prev-link-class="'prev-link'"
        :next-link-class="'next-link'"
      ></app-pagination>
    </div>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";
let Paginate;
if (process.client) {
  Paginate = require("vuejs-paginate");
}

import { getProductByCategory, getProductBySubcategory } from "~/api/products";
import { getOneByCategory } from "~/api/subcategories";
import { replaceWithDash, replaceWithSpace } from "../../../../static/utils";
export default {
  name: "productPage.vue",

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

  watch: {
    $route(from, to) {
      return this.$route.params.subcategory
        ? this.fetchProductsBySubcategory()
        : this.getProductsByCategory();
    }
  },

  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue,
    "app-pagination": Paginate
  },

  computed: {
    page: {
      get() {
        return Number(this.productsData.current_page) || this.default_page;
      },
      set(value) {
        if (this.page === value) return;
        this.getPostByCategory(this.active_category, value); //TODO ?????
      }
    },
    categoryId() {
      const fitObj =
        this.categories.find(category => {
          return (
            this.replaceWithDash(category.name) === this.$route.params.category
          );
        }) || {};
      return fitObj.id || null;
    },
    subcategoryId() {
      const fitObj =
        this.subcategories.find(subcategory => {
          return (
            this.replaceWithDash(subcategory.name) ===
            this.$route.params.subcategory
          );
        }) || {};
      return fitObj.id || null;
    },
    title() {
      return `${this.category} от производителя в Запорожье. Большой ассортимент. Низкие цены`;
    },
    description() {
      return `Полный перечень продукции в каегории ${this.category} с описанием, ценами и фотографиями. `;
    }
  },

  methods: {
    getProductsByCategory() {
      this.$store.dispatch("common/runSpinner");
      return getProductByCategory(this.categoryId)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    },
    getSubcategories() {
      this.$store.dispatch("common/runSpinner");
      return getOneByCategory(this.categoryId)
        .then((res = {}) => {
          this.subcategories = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    },
    fetchProductsBySubcategory() {
      this.$store.dispatch("common/runSpinner");
      getProductBySubcategory(this.subcategoryId)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    },
    replaceWithSpace,
    replaceWithDash
  },

  async mounted() {
    this.$store.dispatch("common/runSpinner");
    await this.getSubcategories();
    if (this.$route.params.subcategory) {
      await this.fetchProductsBySubcategory();
    } else {
      await this.getProductsByCategory();
    }
  },

  data() {
    return {
      subcategory: this.$route.params.subcategory,
      category: this.$route.params.category,
      activeTab: this.$route.params.subcategory || "ВСЕ ВИДЫ",
      // categoryId: this.$route.query.category_id,
      productsData: {
        last_page: "",
        current_page: "",
        data: [
          {
            description: "",
            img_set: [],
            option: {},
            category: {
              name: "",
              id: ""
            },
            subcategory: {
              name: "",
              id: ""
            }
          }
        ]
      },
      categories: this.$store.state.categories.list,
      subcategories: [{}]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
    background-color: #fff;
  }
  h1 {
    // position: absolute;
    // transform: translateX(-100%);
    // left: -500px;
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin: 20px 16px 0;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    text-transform: uppercase;

    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
      margin: 40px 16px 0;
    }
  }
  .section {
    background-color: #fff;

    &-switchbox {
      text-align: center;
    }

    &-grid {
      display: grid;
      grid-gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>