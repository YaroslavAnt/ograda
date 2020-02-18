<template>
  <header class="header">
    <div class="header-padding header-location">
      <icon-base
        :iconColor="'#ff5b00'"
        :width="18"
        :height="18"
      >
        <icon-location />
      </icon-base>
      <span>{{location}}</span>
    </div>

    <div class="header-padding base-font header-logo">
      <logo />
      <div class="contact">
        <div class="contact-item">
          <icon-base :iconColor="'#ff5b00'">
            <icon-phone />
          </icon-base>
          <span class="text"><a :href="`tel:${PHONE}`">{{PHONE}}</a></span>
        </div>

        <div class="contact-item">
          <icon-base :iconColor="'#ff5b00'">
            <icon-mail />
          </icon-base>
          <span class="text"><a :href="`mailto:${EMAIL}`">{{EMAIL}}</a></span>
        </div>
      </div>
      <div class="menu">
        <menu-btn
          :isMenuOpen="$store.state.common.isMenuOpen"
          @click.native="$store.commit('common/SET_MENU', !$store.state.common.isMenuOpen)"
        ></menu-btn>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header {
    color: var(--dark);
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
    font-weight: 500;
    height: 85px;
    background-color: #eee;
    z-index: 50;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    position: fixed;

    @media (min-width: 1024px) {
      height: 105px;
      position: relative;
    }

    .menu {
      display: flex;
      align-items: center;
      @media (min-width: 1024px) {
        display: none;
      }
    }

    &-location {
      display: none;
      @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: var(--dark);
        color: var(--white);
        height: 35px;
      }
    }
    &-logo {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .logo-text {
    font-family: "Pacifico", cursive;
  }

  .contact {
    align-items: center;
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }

    &-item {
      display: flex;
      align-items: center;
      margin-right: 24px;
    }

    svg {
      margin-right: 12px;
      path {
        fill: var(--orange);
      }
    }
  }
</style>

<script>
import LogoVue from "../common/Logo.vue";
import IconBaseVue from "../common/IconBase.vue";
import IconMailVue from "../icons/IconMail.vue";
import IconPhoneVue from "../icons/IconPhone.vue";
import IconLocationVue from "../icons/IconLocation.vue";
import MenuButtonVue from "../common/MenuButton.vue";
import { PHONE, EMAIL, LOCATION } from "../../config";

export default {
  name: "header.vue",
  components: {
    logo: LogoVue,
    "icon-base": IconBaseVue,
    "icon-mail": IconMailVue,
    "icon-phone": IconPhoneVue,
    "icon-location": IconLocationVue,
    "menu-btn": MenuButtonVue
  },
  props: ["current_page"],
  data() {
    return {
      PHONE,
      EMAIL,
      location: LOCATION,
      isMenuOpen: false
    };
  }
};
</script> 