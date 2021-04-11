<template>
  <div class="nav">
    <div class="logo"></div>

    <ul class="sidebar-nav">
      <li @click="$store.dispatch('common/closeMenu')">
        <router-link exact to="/" class="nav-link" title="Главная страница">
          <span>Главная</span>
        </router-link>
      </li>

      <li
        v-for="(category, idx) in $store.state.categories.list"
        :key="idx"
        @click="$store.dispatch('common/closeMenu')"
        class="nav-link"
        :class="{ 'with-submenu': category.subcategories.length > 1 }"
      >
        <!-- class="" -->
        <router-link
          :to="`/${replaceWithDash(category.name)}`"
          title="На страницу товаров"
        >
          <span>{{ category.name }}</span>
        </router-link>
        <ul
          class="sidebar-subnav"
          v-if="category.subcategories && category.subcategories.length > 1"
        >
          <li
            class="subnav-link"
            v-for="(subcategory, idx) in category.subcategories"
            :key="idx"
            @click="
              $router.push(
                `/${replaceWithDash(category.name)}?subcategory=${
                  subcategory.name
                }`
              )
            "
          >
            {{ subcategory.name }}
          </li>
        </ul>
      </li>

      <li
        v-for="(nav_item, idx) in static_menu_list"
        :key="idx + 'static'"
        class="nav-link"
        :class="{ 'with-submenu': nav_item.children }"
        @click="$store.dispatch('common/closeMenu')"
      >
        <router-link
          v-if="!nav_item.children"
          :to="nav_item.path"
          :title="nav_item.name"
        >
          <span>{{ nav_item.name }}</span>
        </router-link>
        <span v-else @click.stop="nav_item_active = nav_item">{{
          nav_item.name
        }}</span>

        <ul
          class="sidebar-subnav"
          :class="{ 'sidebar-subnav-active': nav_item === nav_item_active }"
          v-if="nav_item.children"
        >
          <li
            class="subnav-link"
            v-for="(subcategory, idx) in nav_item.children"
            :key="idx"
            @click="$router.push(subcategory.path)"
          >
            {{ subcategory.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { replaceWithDash } from "../../static/utils";
export default {
  name: "sidebar.vue",
  watch: {
    isMenuActive(newValue) {
      if (!newValue) {
        this.nav_item_active = null;
      }
    },
  },

  methods: { replaceWithDash },

  props: ["isMenuActive"],

  data() {
    return {
      categories: [],
      static_menu_list: [
        // { name: "Вопрос-ответ", path: "/faq" },
        {
          name: "Услуги",
          path: "/services",
          children: [
            { name: "Замер", path: "/services/zamer" },
            { name: "Доставка", path: "/services/dostavka" },
            { name: "Заливка фундамента", path: "/services/fundament" },
            { name: "Установка забора", path: "/services/montazh" },
            { name: "Покраска еврозабора", path: "/services/pokraska" },
          ],
        },
        { name: "Цены", path: "/prices" },
        { name: "Нашы работы", path: "/blog" },
        { name: "Контакты", path: "/contact" },
      ],
      nav_item_active: null,
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
  border-right: 1px solid;
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
    padding: 10px 32px 10px 16px;
    // min-height: 50px;
    a {
      display: block;
    }
  }
  .subnav-link {
    font-size: 16px;
    padding: 10px 16px;
  }
  .nav-link,
  .subnav-link {
    display: block;
    font-weight: 500;
    position: relative;
    transition-duration: 0.2s;
    text-transform: uppercase;

    &.with-submenu {
      position: relative;
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
