<template>
  <main>
    <h1
      v-if="heading"
      class="with-skewed-bg"
    >{{replaceWithSpace(heading)}}</h1>

    <app-section class="section">
      <div class="section-switchbox">
        <div
          class="section-switch"
          v-if="subcategories.length>1"
        >

          <router-link
            v-for="(tab,idx) in subcategories"
            :key="idx"
            :to="{ path: `/products/${replaceWithDash(category ) }?subcategory=${replaceWithDash(tab.name ) }`}"
          >
            <span
              class="switch-tab"
              :class="{'switch-tab-active': $route.query.subcategory===replaceWithDash(tab.name)}"
            >{{(tab.name) }}</span>
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
      class="section-description"
      v-if="subcategories[0].name"
    ><strong>{{categoryObj.name}}</strong> можно разделить на:</p>

    <div
      v-for="(subcategory,idx) in subcategories"
      :key='subcategory.id'
    >
      <h2
        v-if="subcategory.name"
        class="medium-font subheading"
      >{{idx+1}}. {{subcategory.name}}</h2>
      <p
        class="base-font section-description"
        v-if="subcategory.description"
        v-html="subcategory.description"
      ></p>

    </div>

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
import { replaceWithDash, replaceWithSpace } from "~/static/utils";
import { getAll } from "~/api/categories";
import { BASE_URL, DOMAIN } from "../../../config";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";

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
          content: `${this.subcategoryObj.name} в Запорожье, ${this.categoryObj.name} в Запорожье, ${this.subcategoryObj.name} цена, ${this.categoryObj.name}`
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
          content:
            this.productsData.data.length > 0
              ? BASE_URL + this.productsData.data[0].img_set[0]
              : DOMAIN + this.ogImage
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
              ? BASE_URL + this.productsData.data[0].img_set[0]
              : DOMAIN + this.ogImage
        },
        {
          name: "twitter:image:alt",
          content:
            this.productsData.data.length > 0
              ? this.productsData.data[0].img_alt
              : "Заборы"
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  },

  watch: {
    $route(from, to) {
      return this.$route.query.subcategory
        ? this.fetchProductsBySubcategory(this.subcategoryObj.id)
        : this.getProductsByCategory();
    }
  },

  // watchQuery: (...rest) => {
  //   console.log({ rest });
  //   // return this.fetchProductsBySubcategory(subcategoryObj.id);
  // },

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
        this.getProductsByCategory(this.categoryObj.id, page);
        scrolledContent.scrollTo(0, 0);
      }
    },
    title() {
      return `${this.replaceWithSpace(
        this.category
      ).toUpperCase()} от производителя в Запорожье. Большой ассортимент. Низкие цены`;
    },
    description() {
      return `Полный перечень продукции в каегории ${this.replaceWithSpace(
        this.category
      ).toUpperCase()} с описанием, ценами и фотографиями. `;
    },
    heading() {
      return this.categoryObj.name;
    }
  },

  methods: {
    getProductsByCategory(id, page) {
      return getProductByCategory(id, page)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    },

    fetchProductsBySubcategory() {
      const subcategoryObj = this.subcategories.find(
        subcategory =>
          replaceWithDash(subcategory.name) === this.$route.query.subcategory
      );
      this.subcategoryObj = subcategoryObj;

      getProductBySubcategory(subcategoryObj.id)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    },
    fetchProductsByPage(page) {
      getProductsByPage(page)
        .then((res = {}) => {
          this.productsData = res.data.data;
        })
        .catch(() => alert("Невозможно загрузить данные"));
    },
    replaceWithSpace,
    replaceWithDash
  },

  async asyncData({ params, query }) {
    const { data: categoryData } = await getAll();
    const categoryObj = categoryData.data.find(
      category => replaceWithDash(category.name) === params.category
    );
    const {
      data: { data: subcategories }
    } = await getByCategory(categoryObj.id);

    let productsData;
    if (query.subcategory) {
      const subcategoryObj = subcategories.find(
        subcategory => replaceWithDash(subcategory.name) === query.subcategory
      );
      const {
        data: { data }
      } = await getProductBySubcategory(subcategoryObj.id);
      productsData = data;
    } else {
      const {
        data: { data }
      } = await getProductByCategory(categoryObj.id);
      productsData = data;
    }
    return {
      productsData,
      subcategories,
      categoryObj
    };
  },

  data() {
    return {
      subcategory: this.$route.query.subcategory,
      category: this.$route.params.category,
      activeTab: this.$route.query.subcategory || "ВСЕ ВИДЫ",
      // categoryId: this.$route.query.category_id,
      productsData: {
        last_page: "",
        current_page: "",
        data: []
      },
      categories: [{}],
      subcategories: [{}],
      categoryObj: {},
      subcategoryObj: {},
      ogImage,
      DOMAIN
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
      padding: 16px 16px 30px;

      @media (min-width: 1200px) {
        padding: 20px 32px 30px;
      }
    }
  }
  .subheading {
    color: var(--red);
    font-weight: bold;
    padding: 0 16px;
    @media (min-width: 1024px) {
      padding: 0 32px;
    }
  }
</style>