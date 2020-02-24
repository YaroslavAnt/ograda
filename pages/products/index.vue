<template>
  <main>
    <h1 class="with-skewed-bg">{{categoryObj.name||''}}</h1>

    <app-section class="section">
      <div class="section-switchbox">
        <div
          class="section-switch"
          v-if="subcategories.length>1"
        >

          <router-link
            v-for="(tab,idx) in subcategories"
            :key="idx"
            :to="{ path: `/products?category=${$route.query.category }&subcategory=${tab.id }`}"
          >
            <span
              class="switch-tab"
              :class="{'switch-tab-active': +$route.query.subcategory===+tab.id}"
            >{{tab.name}}</span>
          </router-link>
        </div>
      </div>
      <p
        class="large-font section-placeholder"
        v-if="productsData.data.length === 0"
      >Товары еще не загружены...</p>

      <div
        class="section-grid"
        v-if="productsData.data.length > 0"
        itemscope
        itemtype="http://schema.org/ItemList"
      >
        <product-card
          v-for="(product) in productsData.data"
          :key="product.id"
          :product="product"
          itemprop="itemListElement"
          itemscope
          itemtype="http://schema.org/Product"
        />
      </div>
    </app-section>

    <p
      class="base-font section-description"
      v-html="categoryObj.description"
      v-if="categoryObj.description"
    ></p>
    <p
      class="base-font section-description"
      v-if="subcategoryObj.description"
      v-html="subcategoryObj.description"
    ></p>

    <div class="container-paginate">
      <app-pagination
        v-if="productsData.last_page > 1"
        :page-count="productsData.last_page"
        v-model="page"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
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

import {
  getProductByCategory,
  getProductBySubcategory,
  getProductsByPage
} from "~/api/products";
import { getByCategory } from "~/api/subcategories";
import { replaceWithSpace } from "~/static/utils";
import { getAll } from "~/api/categories";

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
          hid: "keywords",
          name: "keywords",
          content: `${this.subcategoryObj.name} в Запорожье, ${this.categoryObj.name} в Запорожье`
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
        {
          name: "og:image",
          content:
            this.productsData.data.length > 0
              ? this.productsData.data[0].img_set[0]
              : ""
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
          content:
            this.productsData.data.length > 0
              ? this.productsData.data[0].img_set[0]
              : ""
        },
        {
          name: "twitter:image:alt",
          content:
            this.productsData.data.length > 0
              ? this.productsData.data[0].img_alt
              : ""
        }
      ]
    };
  },

  watch: {
    $route(from, to) {
      console.log("change url");
      return this.$route.query.subcategory
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
      set(page) {
        if (this.page === page) return;
        this.getProductsByCategory(page);
        scrolledContent.scrollTo(0, 0);
      }
    },
    title() {
      return `${this.replaceWithSpace(
        this.categoryObj.name
      ).toUpperCase()} от производителя в Запорожье. Большой ассортимент. Низкие цены`;
    },
    description() {
      return `Полный перечень продукции в каегории ${this.replaceWithSpace(
        this.categoryObj.name
      ).toUpperCase()} с описанием, ценами и фотографиями. `;
    }
  },

  methods: {
    async getAllCategories() {
      const { data: categoryData } = await getAll();
      const categoryObj = categoryData.data.find(
        category => +category.id === +this.$route.query.category
      );
      this.categoryObj = categoryObj;
    },

    async getSubcategoriesByCategory() {
      const { data: subcategoryData } = await getByCategory(
        this.$route.query.category
      );
      this.subcategories = subcategoryData.data;
    },

    getProductsByCategory(page = 1) {
      this.$store.dispatch("common/runSpinner");
      this.getAllCategories();
      this.getSubcategoriesByCategory();

      return getProductByCategory(this.$route.query.category, page)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    },

    async fetchProductsBySubcategory() {
      this.$store.dispatch("common/runSpinner");
      this.getAllCategories();
      this.getSubcategoriesByCategory();

      getProductBySubcategory(this.$route.query.subcategory)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"))
        .finally(() => this.$store.dispatch("common/stopSpinner"));
    },

    replaceWithSpace
  },

  async mounted() {
    this.getAllCategories();

    if (this.$route.query.subcategory) {
      await this.fetchProductsBySubcategory();
    } else {
      await this.getProductsByCategory();
    }
  },

  data() {
    return {
      // subcategory: this.$route.query.subcategory,
      activeTab: this.$route.query.subcategory || "ВСЕ ВИДЫ",
      productsData: {
        last_page: "",
        current_page: "",
        data: []
      },
      categories: [{}],
      subcategories: [{}],
      categoryObj: {},
      subcategoryObj: {},
      categoryId: this.$route.query.category,
      subcategoryId: this.$route.query.subcategory
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
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: block;
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
    margin: -30px 0;

    &-placeholder {
      animation: fade_out 3s;
    }

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

    &-description {
      white-space: pre-wrap;
      padding: 20px 16px;

      @media (min-width: 1200px) {
        padding: 20px 32px;
      }
    }
  }
</style>