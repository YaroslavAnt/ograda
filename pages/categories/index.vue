<template>
  <main>
    <h1 v-if="heading" class="with-skewed-bg">
      {{ replaceWithSpace(heading) }}
    </h1>

    <app-section class="section">
      <div class="section-switchbox">
        <div class="section-switch" v-if="subcategories.length > 1">
          <div
            v-for="(tab, idx) in subcategories"
            :key="idx"
            @click="subcategory = tab.name"
          >
            <!-- v-on:click="$router.push(`/products/${replaceWithDash(category ) }?subcategory=${replaceWithDash(tab.name ) }`)" -->
            <span
              class="switch-tab"
              :class="{ 'switch-tab-active': subcategory === tab.name }"
              >{{ tab.name }}</span
            >
          </div>
        </div>
      </div>
      <!-- <p
        class="large-font section-placeholder"
        v-if="productsData.data.length === 0"
      >Товары еще не загружены...</p> -->

      <div class="section-grid" v-if="productsData.data.length > 0">
        <product-card
          v-for="product in productsData.data"
          :key="product.id"
          :product="product"
        />
      </div>
    </app-section>

    <div class="container-paginate" v-if="productsData.last_page > 1">
      <ul class="pagination">
        <li class="disabled">
          <span
            tabindex="-1"
            class="prev-link pagination-btn"
            @click="changePage('<')"
            >&lt;</span
          >
        </li>

        <li
          v-for="page in productsData.last_page"
          :key="page"
          :class="{ active: +$route.query.page === +page }"
        >
          <nuxt-link
            tabindex="0"
            class="pagination-btn"
            title="листать"
            :to="`/products/${replaceWithDash(category)}?page=${page}`"
            >{{ page }}</nuxt-link
          >
        </li>

        <li class="disabled">
          <span
            tabindex="0"
            class="next-link pagination-btn"
            @click="changePage('>')"
            >&gt;</span
          >
        </li>
      </ul>
    </div>

    <p
      class="base-font section-description"
      v-html="categoryObj.description"
      v-if="categoryObj.description"
    ></p>

    <p
      class="section-description section-description--small"
      v-if="subcategories[0].name"
    >
      Категорию <strong>{{ categoryObj.name }}</strong> можно разделить на:
    </p>

    <div v-for="(subcategory, idx) in subcategories" :key="subcategory.id">
      <h2 v-if="subcategory.name" class="medium-font subheading">
        {{ idx + 1 }}. {{ subcategory.name }}
      </h2>
      <p
        class="base-font section-description"
        v-if="subcategory.description"
        v-html="subcategory.description"
      ></p>
    </div>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";
import { replaceWithDash, replaceWithSpace } from "~/static/utils";
import { BASE_URL, DOMAIN } from "~/config";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";

let Paginate;
if (process.client) {
  Paginate = require("vuejs-paginate");
}
export default {
  data() {
    return {
      subcategory: "",
      category: this.$route.params.category,
      productsData: {
        last_page: "",
        current_page: "",
        data: Array(6).fill({
          img_set: [""],
          img_alt: "",
          category: { name: "" },
          name: "",
          option: "",
          price: ""
        })
      },
      categories: [{}],
      subcategories: [{}],
      categoryObj: {},
      subcategoryObj: {},
      ogImage,
      DOMAIN
    };
  },
  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue,
    "app-pagination": Paginate
  },
  async fetch() {
    try {
      const { data: categoryData } = await this.$categoriesAPI.categories();
      const categoryObj = categoryData.find(
        category => this.replaceWithDash(category.name) === this.category
      );
      this.categoryObj = categoryObj;

      const {
        data: subcategories
      } = await this.$subcategoriesAPI.subcategoriesByCategory(categoryObj.id);
      this.subcategories = subcategories;

      const { data: productsData } = await this.$productsAPI.productsByCategory(
        categoryObj.id
      );
      this.productsData = productsData;
    } catch (error) {
      redirect("/error");
    }
  },
  computed: {
    title() {
      return `✔ ${this.replaceWithSpace(
        this.category
      ).toUpperCase()} в Запорожье`;
    },
    description() {
      return `${this.replaceWithSpace(
        this.category
      ).toUpperCase()} с ценами от производителя, описанием и фотографиями. Большой ассортимент. Доставка и установка`;
    },
    heading() {
      return this.categoryObj.name;
    }
  },
  methods: {
    async getProductsByCategory(id, page) {
      const { data } = await this.$productsAPI.productsByCategory(id, page);
      this.productsData = data;
    },

    changePage(direction) {
      const page = this.$route.query.page || 1;
      if (direction === ">" && page < this.productsData.last_page) {
        this.$router.push(this.$route.path + "?page=" + (+page + 1));
      }
      if (direction === "<" && page > 1) {
        this.$router.push(this.$route.path + "?page=" + (page - 1));
      }
    },
    replaceWithSpace,
    replaceWithDash
  },
  watchQuery({ page }) {
    this.getProductsByCategory(this.categoryObj.id, page);
  },
  watch: {
    async subcategory(newValue, oldValue) {
      const subcategoryObj = this.subcategories.find(
        subcategory => subcategory.name === newValue
      );
      const { data } = await this.$productsAPI.productsBySubcategory(
        subcategoryObj.id
      );
      this.productsData = data;
    }
  },
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
        { property: "og:url", content: DOMAIN + this.$route.fullPath },
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
  }
};
</script>

<style lang="scss" scoped></style>
