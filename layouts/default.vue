<template>
  <div class="page">
    <div
      class="overlay"
      :class="{'isMenuActive': $store.state.common.isMenuOpen}"
      @click="$store.commit('common/SET_MENU', !$store.state.common.isMenuOpen)"
    ></div>
    <nav
      class="sidebar"
      :class="{'isMenuActive': $store.state.common.isMenuOpen}"
    >
      <app-sidebar :current_page="current_page"></app-sidebar>
    </nav>
    <div class="content">
      <app-header :current_page="current_page"></app-header>
      <nuxt />
      <app-footer></app-footer>
    </div>
  </div>
</template>

<style src='./../styles/index.scss' lang="scss" >
</style>

<style lang="scss" scoped>
  .page {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    box-shadow: 0px 4px 18px #ccc;
  }
  .overlay {
    display: none;

    &.isMenuActive {
      display: block;
      z-index: 15;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    }
  }
  .sidebar {
    height: 100vh;
    width: 280px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid var(--dark);
    position: absolute;
    z-index: 20;
    left: -120%;
    transition-duration: 0.3s;
    &.isMenuActive {
      left: 0;
    }

    @media (min-width: 1024px) {
      position: relative;
      left: unset;
    }
  }
  .content {
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }
</style>

<script>
import sidebarVue from "../components/layout/sidebar.vue";
import headerVue from "../components/layout/header.vue";
import footerVue from "../components/layout/footer.vue";
import { getAll } from "../api/categories";
import { getAllProducts } from "../api/products";
export default {
  name: "default.vue",
  components: {
    "app-sidebar": sidebarVue,
    "app-header": headerVue,
    "app-footer": footerVue
  },
  watch: {
    $route(to) {
      this.current_page = to.path;
    }
  },
  created() {
    this.current_page = this.$route.path;
  },
  data() {
    return {
      current_page: "/"
    };
  },
  mounted() {
    getAll()
      .then(res => {
        console.log(res.data);
        this.$store.commit("categories/SET_CATEGORIES", res.data.data);
      })
      .catch(() => alert("Невозможно загрузить данные"));
    getAllProducts()
      .then(res => {
        console.log({ res });
        this.$store.commit("products/SET_PRODUCTS", res.data.data.data);
      })
      .catch(() => alert("Невозможно загрузить данные"));
  }
};
</script>
