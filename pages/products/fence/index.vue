<template>
  <app-section :heading="'Ограждения'" class="section">
    <div class="section-switch">
      <span
        class="switch-tab"
        :class="{'switch-tab-active': activeTab==='все'}"
        @click="setActiveTab('все')"
      >Все</span>
      <span
        class="switch-tab"
        :class="{'switch-tab-active': activeTab==='еврозабор'}"
        @click="setActiveTab('еврозабор')"
      >Еврозабор</span>
      <span
        class="switch-tab"
        :class="{'switch-tab-active': activeTab==='сетка-рабица'}"
        @click="setActiveTab('сетка-рабица')"
      >Сетка-рабица</span>
      <span
        class="switch-tab"
        :class="{'switch-tab-active': activeTab==='забор из профнастила'}"
        @click="setActiveTab('забор из профнастила')"
      >Забор из профнастила</span>
    </div>

    <div class="section-grid">
      <product-card
        v-for="(product,idx) in products.filter(el=>activeTab==='все'? el: el.subcategory === activeTab)"
        :key="idx"
        :product="product"
      />
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";
import but_3 from "~/assets/img/fence/but/but_3.jpg";
import but_loza_3 from "~/assets/img/fence/but_loza/but_loza_3.jpg";
import but_rovnyi_1 from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import fagot_2 from "~/assets/img/fence/fagot/fagot_2.jpg";
import krym_1 from "~/assets/img/fence/krym/krym_1.jpg";
import { fence_set } from "../../../static/fence_data/index";
export default {
  name: "fencePage.vue",
  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  },
  mounted() {
    console.log(this.$store);
    const query = this.$route.query.subcategory;
    const tab = {
      koncrete: "еврозабор",
      rabitz: "сетка-рабица",
      steel: "забор из профнастила"
    };
    this.setActiveTab(tab[query] || "все");
  },
  data() {
    return {
      activeTab: "все",
      products: fence_set
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