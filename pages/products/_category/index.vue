<template>
  <main>
    <app-section
      :heading="'Ограждения'"
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
  name: "fencePage.vue",

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
    },
    categoryId() {
      const categoryObj =
        this.categories.find(
          el => String(el.name).toLowerCase() === this.$route.params.category
        ) || {};
      return categoryObj.id;
    }
  },

  methods: {
    setActiveTab(tab) {
      console.log({ tab });
      this.activeTab = tab;
    },
    getSetOfObjItems(arr = [], objItem) {
      return Array.from(new Set(arr.map(el => el[objItem].name)));
    },
    getProductsByCategory() {
      getProductByCategory(this.categoryId)
        .then((res = {}) => {
          this.products = res.data.data.data;
          console.log(res.data.data.data);
        })
        .catch(() => {
          alert("Невозможно загрузить данные");
        });
      // .finally(() => this.$store.commit("STOP_SPINNER"));
    },
    getSubcategories() {
      getOneByCategory(this.categoryId)
        .then((res = {}) => {
          this.subcategories = res.data.data;
          console.log({ res });
        })
        .catch(() => {
          alert("Невозможно загрузить данные");
        });
    }
  },

  mounted() {
    const query = this.$route.query.subcategory || "ВСЕ ВИДЫ";
    this.setActiveTab(new String(query).toUpperCase());
    this.getProductsByCategory();
    this.getSubcategories();
  },

  data() {
    return {
      activeTab: null,
      products: [],
      categories: this.$store.state.categories.list,
      subcategories: []
    };
  }
};
</script>

<style lang="scss" scoped>
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