<template>
  <header class="header">
    <div class="header-padding header-location">
      <icon-base :iconColor="'#ff5b00'" :width="18" :height="18">
        <icon-location />
      </icon-base>
      <span>{{ location }}</span>
    </div>

    <div class="header-padding base-font header-logo">
      <logo />
      <div class="contact">
        <div class="contact-item contact-item-phones">
          <span>
            <svg class="header-icon">
              <use :xlink:href="sprite + '#phone-svg'"></use>
            </svg>
          </span>
          <span class="text">
            <a title="Телефон" :href="`tel:${PHONE}`">{{ PHONE }}</a> <br />
            <a title="Телефон" :href="`tel:${PHONE1}`">{{ PHONE1 }}</a>
          </span>
        </div>

        <div class="contact-item">
          <span>
            <svg class="header-icon">
              <use :xlink:href="sprite + '#mail-svg'"></use>
            </svg>
          </span>
          <span class="text">
            <a title="Почта" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
          </span>
        </div>
      </div>

      <div class="menu">
        <menu-btn
          :isMenuOpen="$store.state.common.isMenuOpen"
          @click.native="
            $store.commit('common/SET_MENU', !$store.state.common.isMenuOpen)
          "
        ></menu-btn>
      </div>
    </div>

    <ul
      class="header-breadcrumbs"
      v-if="links[1]"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      <li
        v-for="(link, idx) in links.slice(0, links.length - 1)"
        :key="idx"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <nuxt-link :to="getPath(idx) || '/'" itemprop="item">
          <span itemprop="name">{{
            idx === 0 ? "главная" : getPathName(link)
          }}</span>
          <span>&ensp;/&ensp;</span>
        </nuxt-link>
        <meta itemprop="position" :content="idx + 1" />
      </li>
      <li
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <span itemprop="item">
          {{ getPathName(links[links.length - 1]) }}
          <meta
            itemprop="name"
            :content="getPathName(links[links.length - 1])"
          />
        </span>
        <meta itemprop="position" :content="links.length" />
      </li>
    </ul>
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
  height: 60px;
  background-color: #eee;
  z-index: 50;
  box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  position: fixed;

  @media (min-width: 1024px) {
    height: 105px;
    position: relative;
  }

  &-breadcrumbs {
    position: absolute;
    display: flex;
    top: 100%;
    padding: 4px 20px;
    color: #555;
    background-color: #eee;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    border-radius: 0 0 10px 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &-icon {
    width: 36px;
    height: 36px;
    color: #ff5b00;
    fill: currentColor;
  }

  .menu {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    background-color: var(--red);
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

.contact {
  align-items: center;
  display: none;

  @media (min-width: 768px) {
    display: flex;
  }

  &-item {
    display: flex;
    align-items: center;
    &-phones {
      margin-right: 24px;
      white-space: nowrap;
    }
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
import { PHONE, EMAIL, LOCATION, PHONE1 } from "../../config";
import sprite from "../../assets/icons/sprite.svg";
import { replaceWithSpace } from "../../static/utils";

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

  data() {
    return {
      PHONE,
      PHONE1,
      EMAIL,
      location: LOCATION,
      isMenuOpen: false,
      sprite
    };
  },
  computed: {
    links() {
      return this.$route.path.split("/");
    }
  },

  methods: {
    replaceWithSpace,
    getPath(index) {
      return this.$route.path
        .split("/")
        .slice(0, index + 1)
        .join("/");
    },
    getPathName(name) {
      const pages = {
        services: "услуги",
        zamer: "замер",
        dostavka: "доставка",
        fundament: "заливка фундамента",
        pokraska: "покраска заборов",
        montazh: "установка заборов",
        faq: "вопросы",
        prices: "цены",
        contact: "контакты",
        expo: "выставки",
        blog: "новости",
        karta: "карта сайта"
      };

      return pages[name] || this.replaceWithSpace(name);
    }
  }
};
</script>
