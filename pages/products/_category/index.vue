<template>
  <main>
    <h1>{{category}}</h1>
    <app-section
      :heading="String(category).toUpperCase()"
      class="section"
    >
      <div class="section-switch">
        <span
          class="switch-tab"
          :class="{'switch-tab-active': activeTab==='ВСЕ ВИДЫ'}"
          @click="setActiveTab('ВСЕ ВИДЫ')"
        >{{new String('ВСЕ ВИДЫ').toUpperCase()}}</span>
        <span
          v-for="(tab) in subcategories"
          :key="tab.name"
          class="switch-tab"
          :class="{'switch-tab-active': activeTab===new String(tab.name).toUpperCase()}"
          @click="setActiveTab(new String(tab.name).toUpperCase())"
        >{{new String(tab.name).toUpperCase()}}</span>
      </div>
      <p
        class="large-font"
        v-if="filteredArr.length ===0"
      >Товары еще не загружены...</p>

      <div class="section-grid">
        <product-card
          v-for="(product,idx) in filteredArr"
          :key="idx"
          :product="product"
        />
      </div>
    </app-section>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";

import { getProductByCategory } from "~/api/products";
import { getOneByCategory } from "~/api/subcategories";
export default {
  name: "productPage.vue",

  head() {
    return {
      title: `${this.category} от производителя в Запорожье. Большой ассортимент. Низкие цены`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Полный перечень продукции в каегории ${this.category} с описанием, ценами и фотографиями. `
        }
      ]
    };
  },

  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue
  },

  computed: {
    filteredArr() {
      return this.products.filter(el =>
        this.activeTab === "ВСЕ ВИДЫ"
          ? el
          : new String(el.subcategory.name).toUpperCase() === this.activeTab
      );
    }
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getProductsByCategory() {
      getProductByCategory(this.categoryId).then((res = {}) => {
        this.products = res.data.data.data;
      });
    },
    getSubcategories() {
      getOneByCategory(this.categoryId).then((res = {}) => {
        this.subcategories = res.data.data;
      });
    }
  },

  mounted() {
    const query = this.subcategory || "ВСЕ ВИДЫ";
    this.setActiveTab(new String(query).toUpperCase());
    this.$store.dispatch("common/runSpinner");
    Promise.all([this.getSubcategories(), this.getProductsByCategory()])
      .catch(() => {
        alert("Невозможно загрузить данные");
      })
      .finally(() => this.$store.dispatch("common/stopSpinner"));
  },

  data() {
    return {
      subcategory: this.$route.query.subcategory,
      category: this.$route.params.category,
      activeTab: null,

      categoryId: this.$route.query.category_id,
      products: [
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
      ],
      categories: this.$store.state.categories.list,
      subcategories: []
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
  }
  h1 {
    position: absolute;
    transform: translateX(-100%);
    left: -500px;
  }
  .section {
    background-color: #fff;

    &-grid {
      display: grid;
      grid-gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>