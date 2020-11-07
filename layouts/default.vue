<template>
  <div class="page">
    <div
      class="overlay"
      :class="{ isMenuActive: $store.state.common.isMenuOpen }"
      @click="$store.commit('common/SET_MENU', !$store.state.common.isMenuOpen)"
    ></div>

    <nav
      class="sidebar"
      :class="{ isMenuActive: $store.state.common.isMenuOpen }"
    >
      <app-sidebar :isMenuActive="$store.state.common.isMenuOpen"></app-sidebar>
    </nav>

    <div class="content" ref="scrolledContent" id="scrolledContent">
      <app-header></app-header>
      <nuxt />
      <app-footer></app-footer>

      <div class="connect">
        <div class="numbers-box" v-if="isPhoneActive">
          <img src="../assets/icons/vf.png" alt="icon" width="36px" />
          <a
            class="base-font"
            :href="`tel:${PHONE}`"
            @click="isPhoneActive = false"
          >
            {{ PHONE }}</a
          >
          <img src="../assets/icons/ks100.png" alt="icon" width="36px" />
          <a
            class="base-font"
            :href="`tel:${PHONE1}`"
            @click="isPhoneActive = false"
          >
            {{ PHONE1 }}</a
          >
        </div>
        <div class="icon-box" @click="isPhoneActive = !isPhoneActive">
          <icon-phone />
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./../styles/index.scss" lang="scss"></style>

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
    position: fixed;
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
  // height: 100vh;
  // overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
.connect {
  z-index: 150;

  @media (min-width: 768px) {
    display: none;
  }
}
.numbers-box {
  position: fixed;
  box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.85);
  border-radius: 4px;
  background-color: #fff;
  right: 30px;
  bottom: 120px;
  padding: 20px;
  display: grid;
  grid-template-columns: 36px 1fr;
  column-gap: 8px;
  row-gap: 16px;
}
.icon-box {
  width: 75px;
  height: 75px;
  position: fixed;
  right: 15px;
  bottom: 30px;
  cursor: pointer;
  box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.85);
  border-radius: 50%;
}
</style>

<script>
import sidebarVue from "../components/layout/sidebar.vue";
import headerVue from "../components/layout/header.vue";
import footerVue from "../components/layout/footer.vue";
import IconPhoneBlueVue from "../components/icons/IconPhoneBlue.vue";
import { PHONE, PHONE1 } from "../config";

export default {
  name: "default.vue",
  components: {
    "app-sidebar": sidebarVue,
    "app-header": headerVue,
    "app-footer": footerVue,
    "icon-phone": IconPhoneBlueVue
  },
  watch: {
    $route(to) {
      this.$refs.scrolledContent.scrollTo(0, 0);
    }
  },
  props: {
    error: {
      type: Object
    }
  },
  data() {
    return {
      PHONE,
      PHONE1,
      isPhoneActive: false,
      categories: []
    };
  },

  middleware({ error }) {
    console.log({ error: error() });
  },

  async fetch() {
    const { data } = await this.$categoriesAPI.categories();
    this.$store.commit("categories/SET_CATEGORIES", data);
  }
};
</script>
