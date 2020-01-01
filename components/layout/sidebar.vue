<template>
  <div class="nav">
    <div class="logo"></div>
    <ul class="sidebar-nav">
      <li
        v-for="(item, index) in menu_list"
        :key="index + 'link'"
        @click="onClickNavItem(item.path, item.submenu, item.name)"
      >
        <p
          class="nav-link"
          :class="{
            'open-submenu': activeSubmenu===item.name,
            'with-submenu': item.submenu,
            'active': current_page===item.path
          }"
        >{{item.name}}</p>
        <ul
          v-if="item.submenu"
          class="sidebar-subnav"
          :class="{'open-submenu': activeSubmenu===item.name}"
        >
          <li
            v-for="(subitem, index) in item.submenu"
            :key="index + 'sublink'"
            @click="onClickSubNavItem(subitem.path, subitem.subCategory)"
          >
            <p class="subnav-link">{{subitem.name}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { fence_set } from "~/static/fence_data/index";

export default {
  name: "sidebar.vue",
  methods: {
    onClickNavItem(path, submenu, name) {
      return submenu ? this.setActiveSubmenu(name) : this.setRoute(path);
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
      activeSubmenu: null,
      menu_list: [
        { name: "Главная", path: "/home" },
        {
          name: "Ограждения",
          submenu: this.getSetOfObjItems(fence_set, "subcategory").map(el => ({
            name: el,
            path: "/products/fence",
            subCategory: el
          }))
        },
        { name: "Ворота и калитки", path: "/products/gates" },
        { name: "Бетонные столбики", path: "/products/pillar" },
        { name: "Садовые дорожки", path: "/products/lane" },
        { name: "Услуги", path: "/services" },
        { name: "Каталог", path: "/catalog" },
        { name: "Наши работы", path: "/blog" },
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

    .nav-link,
    .subnav-link {
      padding: 16px;
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

      &.active {
        color: var(--red);
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