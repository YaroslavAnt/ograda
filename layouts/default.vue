<template>
  <div class="page">
    <app-spinner></app-spinner>
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

    <div
      class="content"
      ref="scrolledContent"
      id="scrolledContent"
    >
      <app-header :current_page="current_page"></app-header>
      <nuxt />
      <app-footer></app-footer>

      <div class="connect">
        <a href="tel:+380971111111">
          <icon-base
            :width='75'
            :height='75'
          >
            <icon-phone />
          </icon-base>
        </a>
      </div>
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
      z-index: 100;
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
    width: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid var(--dark);
    position: absolute;
    z-index: 150;
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
  .connect {
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 150;
    cursor: pointer;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.85);
    border-radius: 50%;

    @media (min-width: 768px) {
      display: none;
    }
  }
</style>

<script>
import sidebarVue from "../components/layout/sidebar.vue";
import headerVue from "../components/layout/header.vue";
import footerVue from "../components/layout/footer.vue";
import { getAll } from "../api/categories";
import { getAllProducts } from "../api/products";
import { getAllPosts } from "../api/posts";
import SliderVue from "../components/common/Slider.vue";
import SpinnerVue from "../components/common/Spinner.vue";
import httpClient from "../api/httpClient";
import IconBaseVue from "../components/common/IconBase.vue";
import IconPhoneBlueVue from "../components/icons/IconPhoneBlue.vue";

export default {
  name: "default.vue",
  components: {
    "app-sidebar": sidebarVue,
    "app-header": headerVue,
    "app-footer": footerVue,
    "app-spinner": SpinnerVue,
    "icon-base": IconBaseVue,
    "icon-phone": IconPhoneBlueVue
  },
  watch: {
    $route(to) {
      this.current_page = to.path;
      this.$refs.scrolledContent.scrollTo(0, 0);
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
  methods: {
    name() {}
  },

  mounted() {
    this.$store.dispatch("common/runSpinner");
    Promise.all([
      getAll().then(res => {
        this.$store.commit("categories/SET_CATEGORIES", res.data.data);
      })
    ])
      .catch(() => alert("Невозможно загрузить данные"))
      .finally(() => this.$store.dispatch("common/stopSpinner"));
  }
};
</script>
 