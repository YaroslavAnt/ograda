<template>
  <app-section :heading="'Дорожки'" class="section">
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
import { lanes_set } from "~/static/lanes_data";
import { getSetOfObjItems } from "~/static/utils";
import { getProductByCategory } from "~/api/products";

export default {
  name: "lanesPage",
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
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  },
  data() {
    return {
      activeTab: "ВСЕ ВИДЫ",
      products: lanes_set,
      subcategories: getSetOfObjItems(lanes_set, "subcategory")
    };
  },
  fetch({ store, params }) {
    return getProductByCategory(5)
      .then(res => {
        store.commit("lanes/SET_LANES", res.data.data);
      })
      .catch(() => console.log("Невозможно загрузить данные"));
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
