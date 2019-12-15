<template>
  <nav>
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
        <ul class="sidebar-subnav" :class="{'open-submenu': activeSubmenu===item.name}">
          <li
            v-for="(subitem, index) in item.submenu"
            :key="index + 'sublink'"
            @click="onClickNavItem(subitem.path)"
          >
            <p class="subnav-link">{{subitem.name}}</p>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "sidebar.vue",
  methods: {
    onClickNavItem(path, submenu, name) {
      return submenu ? this.setActiveSubmenu(name) : this.setRoute(path);
    },
    setActiveSubmenu(submenuName) {
      this.activeSubmenu =
        this.activeSubmenu === submenuName ? null : submenuName;
    },
    setRoute(path) {
      this.$router.push(path);
      // this.$parent.toggleMenu();
    }
  },
  props: ["current_page"],
  data() {
    return {
      activeSubmenu: null,
      // current_page: this.$router.path,
      menu_list: [
        { name: "Главная", path: "/home" },
        {
          name: "Ограждения",
          submenu: [
            { name: "Бетонные заборы", path: "/zabor-iz-betona" },
            { name: "Сетка рабица", path: "/setka-rabitsa" }
          ]
        },
        { name: "Ворота и калитки", path: "/vorota-i-kalitki" },
        { name: "Виноградные столбики", path: "/stolbiki" },
        { name: "Услуги", path: "/uslugi" },
        { name: "Каталог", path: "/katalog" },
        { name: "Наши работы", path: "/blog" },
        { name: "Контакты", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
nav {
  height: 100%;
  color: var(--dark);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
}

.logo {
  height: 200px;
  background: url("../../assets/img/grass2.png") bottom,
    url("../../assets/img/image.png") center bottom,
    url("../../assets/img/plita172.png") bottom;
  // background-position: center;
  background-repeat: repeat-x, no-repeat, no-repeat;
  background-size: 50%, 60%, 100%;
  background-color: var(--light-blue);
  /* border-bottom: 6px solid var(--primary); */
  flex-shrink: 0;
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
      color: var(--accent);
    }

    &:hover {
      background-color: var(--primary);
      color: var(--white);
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
    max-height: 100px;
  }
}
</style>