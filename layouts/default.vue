<template>
  <div class="page">
    <nav class="sidebar">
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
  .sidebar {
    height: 100vh;
    width: 280px;
    flex-grow: 0;
    flex-shrink: 0;
    border-right: 1px solid var(--dark);
  }
  .content {
    flex: 1;
    height: 100vh;
    overflow-y: scroll;
  }
</style>

<script>
import sidebarVue from "../components/layout/sidebar.vue";
import headerVue from "../components/layout/header.vue";
import footerVue from "../components/layout/footer.vue";
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
  }
};
</script>
