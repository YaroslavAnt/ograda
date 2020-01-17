<template>
  <main>
    <h1>Каталог продукции в категории {{category}}</h1>
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

      <p
        class="large-font"
        v-if="filteredArr.length ===0"
      >Пока нет товаров...</p>

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
      title: `Каталог продукции в категории: ${this.category}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Полный перечень продукции в каегории ${this.category} с описанием ценами и фотографиями. `
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
    },
    categoryId() {
      return this.$route.query.category_id;
    },
    category() {
      return this.$route.params.category;
    }
  },

  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },

    getProductsByCategory() {
      getProductByCategory(this.categoryId)
        .then((res = {}) => {
          this.products = res.data.data.data;
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