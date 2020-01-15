<template>
  <div class="nav">
    <div class="logo"></div>
    <ul class="sidebar-nav">

      <li @click="onClickNavItem">
        <router-link to="/home">
          <span class="nav-link">Главная</span>
        </router-link>
      </li>

      <li
        @click="onClickNavItem"
        v-for="(category,idx) in $store.state.categories.list"
        :key="idx"
      >
        <router-link :to='`/products/${category.name}`'>
          <span class="nav-link">{{category.name}}</span>
        </router-link>
      </li>

      <li
        @click="onClickNavItem"
        v-for="(nav_item,idx) in static_menu_list"
        :key="idx+'static'"
      >
        <router-link :to="nav_item.path">
          <span class="nav-link">{{nav_item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fence_set } from "~/static/fence_data/index";
import { getAll } from "~/api/categories";
export default {
  name: "sidebar.vue",
  // mounted() {
  //   console.log(this.categories);

  //   getAll()
  //     .then(res => (this.categories = res.data))
  //     .catch(() => alert("Невозможно загрузить занные"));
  // },
  methods: {
    onClickNavItem(path, submenu, name) {
      this.$store.commit("common/SET_MENU", false);
      // return submenu ? this.setActiveSubmenu(name) : this.setRoute(path);
    },
    onClickSubNavItem(path, query) {
      this.setRoute(path, query);
    },
    setActiveSubmenu(submenuName) {
      this.activeSubmenu =
        this.activeSubmenu === submenuName ? null : submenuName;
    },
    setRoute(path, query) {
      console.log({ path, query });
      this.$store.commit("common/SET_MENU", false);
      query
        ? this.$router.push({ path: path, query: { subcategory: query } })
        : this.$router.push(path);
    },
    getSetOfObjItems(arr, objItem) {
      return Array.from(new Set(arr.map(el => el[objItem])));
    }
  },
  props: ["current_page"],
  data() {
    return {
      categories: [],
      activeSubmenu: null,
      static_menu_list: [
        { name: "Услуги", path: "/services" },
        { name: "Цены", path: "/prices" },
        { name: "Наши работы", path: "/blog" },
        { name: "О нас", path: "/about" },
        { name: "Контакты", path: "/contact" }
      ]
    };
  },
  computed: {
    // getCategoryRoutes() {
    //   return this.categories.map(category => ({name: category.name, path: 'products/'}))
    // }
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
    height: 210px;
    background: url("../../assets/img/grass2-min.png") bottom,
      url("../../assets/img/image-min.png") center bottom,
      url("../../assets/img/plita172-min.png") bottom;
    background-repeat: repeat-x, no-repeat, no-repeat;
    background-size: 50%, 60%, 100%;
    background-color: var(--light-blue);
    flex-shrink: 0;
    transform: rotateY(180deg);
  }

  .sidebar-nav {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

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
    .nav-link,
    .subnav-link {
      display: block;
      padding: 12px 16px;
      font-size: 18px;
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
      }

      &.open-submenu.with-submenu {
        &::after {
          top: 20px;
          transform: rotate(45deg);
        }
      }
    }
  }

  .sidebar-subnav {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    padding-left: 16px;
    transition-duration: 0.3s;

    &.open-submenu {
      opacity: 1;
      max-height: 500px;
    }
  }
</style>