<template>
  <div class="page">
    <div class="sidebar">
      <app-sidebar></app-sidebar>
    </div>
    <div class="content">
      <app-header></app-header>
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
}
.sidebar {
  height: 100vh;
  width: 280px;
  flex-grow: 0;
  flex-shrink: 0;
  box-shadow: -8px 4px 18px #ccc;
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
  }
};
</script>
