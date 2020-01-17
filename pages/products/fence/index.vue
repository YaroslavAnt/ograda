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
          v-for="(tab) in this.subcategories"
          :key="tab"
          class="switch-tab"
          :class="{'switch-tab-active': activeTab===new String(tab).toUpperCase()}"
          @click="setActiveTab(new String(tab).toUpperCase())"
        >{{new String(tab).toUpperCase()}}</span>
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

import { fence_set } from "~/static/fence_data/index";
import { getProductByCategory } from "~/api/products";
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

  async fetch({ store, params }) {
    return getProductByCategory(4)
      .then(res => {
        store.commit("fence/SET_FENCE", res.data.data);
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
  mounted() {
    const query = this.$route.query.subcategory || "ВСЕ ВИДЫ";
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

    &-grid {
      display: grid;
      grid-gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
</style>