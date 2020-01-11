<template>
  <app-section :heading="'Ворота и калитки'" class="section">
    <div class="section-switch">
      <span
        class="switch-tab"
        :class="{'switch-tab-active': activeTab==='ВСЕ ВИДЫ'}"
        @click="setActiveTab('ВСЕ ВИДЫ')"
      >{{new String('ВСЕ ВИДЫ').toUpperCase()}}</span>
      <span
        v-for="(tab) in this.subcategories"
        :key="tab"
        class="switch-tab"
        :class="{'switch-tab-active': activeTab===new String(tab).toUpperCase()}"
        @click="setActiveTab(new String(tab).toUpperCase())"
      >{{new String(tab).toUpperCase()}}</span>
    </div>

    <div class="section-grid">
      <product-card v-for="(product,idx) in filteredArr" :key="idx" :product="product" />
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";
import { getProductByCategory } from "~/api/products";

import { gates_set } from "../../../static/gates_data";
export default {
  name: "gatesPage.vue",

  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue
  },

  computed: {
    filteredArr() {
      return this.products.filter(el =>
        this.activeTab === "ВСЕ ВИДЫ"
          ? el
          : new String(el.subcategory).toUpperCase() === this.activeTab
      );
    }
  },

  fetch({ store, params }) {
    return getProductByCategory(3)
      .then(res => {
        store.commit("gates/SET_GATES", res.data.data);
      })
      .catch(() => alert("Невозможно загрузить данные"));
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getSetOfObjItems(arr = [], objItem) {
      return Array.from(new Set(arr.map(el => el[objItem])));
    }
  },

  data() {
    return {
      activeTab: "ВСЕ ВИДЫ",
      products: gates_set,
      subcategories: this.getSetOfObjItems(gates_set, "subcategory")
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