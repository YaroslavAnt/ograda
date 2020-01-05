<template>
  <app-section :heading="'Ограждения'" class="section">
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

import { fence_set } from "~/static/fence_data/index";
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
          : new String(el.subcategory).toUpperCase() === this.activeTab
      );
    }
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
    getSetOfObjItems(arr = [], objItem) {
      return Array.from(new Set(arr.map(el => el[objItem])));
    }
  },
  mounted() {
    // debugger;
    const query = this.$route.query.subcategory || "ВСЕ ВИДЫ";
    // const category = decodeURI(query);
    this.setActiveTab(new String(query).toUpperCase());
  },
  data() {
    return {
      activeTab: null,
      products: fence_set,
      subcategories: this.getSetOfObjItems(fence_set, "subcategory")
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;

    &-switch {
      border: 1px solid var(--red);
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;

      @media (min-width: 768px) {
        display: inline-flex;
        flex-direction: row;
      }

      .switch-tab {
        padding: 10px 20px;
        color: var(--red);
        cursor: pointer;
        // text-transform: uppercase;

        &-active {
          background-color: var(--red);
          color: #fff;
        }
      }
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