<template>
  <div class="nav">
    <div class="logo"></div>

    <ul class="sidebar-nav">
      <li @click="$store.dispatch('common/closeMenu')">
        <router-link
          exact
          to="/"
          class="nav-link"
          title="Главная страница"
        >
          <span>Главная</span>
        </router-link>
      </li>

      <li
        v-for="(category, idx) in $store.state.categories.list"
        :key="idx"
        @click="$store.dispatch('common/closeMenu')"
      >
        <router-link
          class="nav-link"
          :to='`/products/${replaceWithDash(category.name)}`'
          title="На страницу товаров"
        >
          <span>{{ category.name }}</span>
        </router-link>
      </li>

      <li
        v-for="(nav_item, idx) in static_menu_list"
        :key="idx + 'static'"
        class="nav-link"
        :class="{ 'with-submenu': nav_item.children }"
      >
        <router-link
          v-if="!nav_item.children"
          :to="nav_item.path"
          :title="nav_item.name"
        >
          <span>{{ nav_item.name }}</span>
        </router-link>

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
    setActiveCategory(categoryName) {
      this.activeCategory =
        this.activeCategory === categoryName ? null : categoryName;
    },

    replaceWithDash,
  },

  watch: {
    isMenuActive: {
      immediate: true,
      handler() {
        this.activeCategory = null;
      },
    },
  },

  props: ["isMenuActive"],

  data() {
    return {
      categories: [],
      activeCategory: null,
      static_menu_list: [
        { name: "Вопрос-ответ", path: "/faq" },
        { name: "Цены", path: "/prices" },
        { name: "Контакты", path: "/contact" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  height: 100%;
  color: var(--dark);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 260px;
  border: 1px solid;
}

.logo {
  height: 20px;
  flex-shrink: 0;
  flex-grow: 0;

  @media (min-width: 768px) {
    transform: rotateY(180deg);
    background: url("../../assets/img/logo_main.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 150px;
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
    min-height: 50px;
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
        width: 8px;
        height: 8px;
        border-left: 1px solid;
        border-top: 1px solid;
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
    margin-top: 10px;
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
