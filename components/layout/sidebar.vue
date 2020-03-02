<template>
  <div class="nav">
    <div class="logo"></div>
    <ul class="sidebar-nav">

      <li @click="$store.dispatch('common/closeMenu')">
        <router-link
          exact
          to="/"
          class="nav-link"
        >
          <span>Главная</span>
        </router-link>
      </li>

      <li
        class="nav-link with-submenu"
        @click="onClickNavItem(category.name)"
        v-for="(category,idx) in $store.state.categories.list"
        :key="idx"
      >
        <span>{{(category.name) }}</span>
        <ul
          class="sidebar-subnav"
          :class="{'sidebar-subnav-active': category.name === activeCategory }"
        >
          <li
            v-for="(subcategory,idx) in category.subcategories"
            :key="idx"
            @click="$store.dispatch('common/closeMenu')"
          >
            <router-link :to='{path:`/products/${replaceWithDash(category.name)}?subcategory=${replaceWithDash(subcategory.name)}`}'>
              <span class="subnav-link">{{subcategory.name}}</span>
            </router-link>
          </li>
        </ul>
      </li>

      <li
        v-for="(nav_item,idx) in static_menu_list"
        :key="idx+'static'"
        @click="nav_item.children?onClickNavItem(nav_item.name):$store.dispatch('common/closeMenu')"
        class="nav-link"
        :class="{'with-submenu': nav_item.children}"
      >
        <router-link
          v-if="!nav_item.children"
          :to="nav_item.path"
        >
          <span>{{nav_item.name}}</span>
        </router-link>

        <span v-if="nav_item.children">{{(nav_item.name) }}</span>

        <ul
          v-if="nav_item.children"
          class="sidebar-subnav"
          :class="{'sidebar-subnav-active': nav_item.name === activeCategory }"
        >
          <li
            v-for="(subcategory,idx) in nav_item.children"
            :key="idx"
            @click="$store.dispatch('common/closeMenu')"
          >
            <router-link :to='{path:`${nav_item.path}/${subcategory.path}`}'>
              <span class="subnav-link">{{subcategory.name}}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { getAll } from "~/api/categories";
import { replaceWithDash } from "../../static/utils";
export default {
  name: "sidebar.vue",

  methods: {
    onClickNavItem(categoryName) {
      if (categoryName) {
        this.setActiveCategory(categoryName);
      } else {
        this.setActiveCategory(null);
        this.$store.commit("common/SET_MENU", false);
      }
    },

    setActiveCategory(categoryName) {
      this.activeCategory =
        this.activeCategory === categoryName ? null : categoryName;
    },

    replaceWithDash
  },

  props: ["current_page"],
  data() {
    return {
      categories: [],
      activeCategory: null,
      static_menu_list: [
        { name: "О нас", path: "/about" },
        {
          name: "Услуги",
          path: "/services",
          children: [
            { name: "Вызов замерщика", path: "zamer" },
            { name: "Доставка", path: "dostavka" },
            { name: "Заливка фундамента", path: "fundament" },
            { name: "Установка забора", path: "montazh" },
            { name: "Покраска еврозабора", path: "pokraska" }
          ]
        },
        { name: "Наши работы", path: "/blog" },
        { name: "Вопрос-ответ", path: "/faq" },
        { name: "Цены", path: "/prices" },
        { name: "Контакты", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .nav {
    height: 100%;
    color: var(--dark);
    background-color: var(--white);
    display: flex;
    flex-direction: column;
  }

  .logo {
    height: 120px;
    background: url("../../assets/img/gras-resize.png") bottom,
      url("../../assets/img/logo.png") center bottom,
      url("../../assets/img/plita172-min.png") bottom;
    background-repeat: repeat-x, no-repeat, no-repeat;
    background-size: 50%, 40%, 100%;
    background-color: var(--light-blue);
    flex-shrink: 0;
    transform: rotateY(180deg);
    // display: none;
    @media (min-width: 768px) {
      height: 150px;
      background-size: 50%, 47%, 100%;
    }
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    overflow: auto;

    @media (min-width: 768px) {
      overflow: unset;
    }

    &::-webkit-scrollbar {
      width: 0px; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }

    li {
      cursor: pointer;
    }
    .nuxt-link-active {
      color: var(--red);
    }
    .nav-link {
      font-size: 18px;
      padding: 12px 32px 12px 16px;
      a {
        display: block;
      }
    }
    .subnav-link {
      font-size: 16px;
      padding: 12px 16px;
    }
    .nav-link,
    .subnav-link {
      display: block;
      font-weight: 500;
      position: relative;
      transition-duration: 0.2s;
      text-transform: uppercase;

      &.with-submenu {
        &::after {
          transition-duration: 0.2s;
          content: "";
          position: absolute;
          display: block;
          width: 12px;
          height: 12px;
          border-left: 3px solid;
          border-top: 3px solid;
          top: 15px;
          right: 15px;
          transform: rotate(-135deg);
          box-sizing: border-box;
        }
      }

      &:hover {
        border-left: 3px solid var(--red);
        color: var(--red);
        background-color: #ddd;

        &.with-submenu {
          @media (min-width: 768px) {
            &::after {
              top: 15px;
              transform: rotate(-225deg);
            }
          }
        }
        .sidebar-subnav {
          @media (min-width: 768px) {
            display: block;
          }
        }
      }
    }
  }

  .sidebar-subnav {
    position: relative;
    transition-duration: 0.3s;
    max-height: 0;
    overflow: hidden;

    &-active {
      margin-top: 20px;
      max-height: 500px;
      @media (min-width: 768px) {
        margin-top: 0;
      }
    }

    @media (min-width: 768px) {
      box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.5);
      max-height: unset;
      background-color: #fff;
      display: none;
      position: absolute;
      left: 100%;
      top: 0;
      width: 280px;
    }

    &:hover {
      display: block;
    }
  }
</style>