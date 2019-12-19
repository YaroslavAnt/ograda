<template>
  <footer class="footer footer-padding base-font">
    <nav class="container-footer container">
      <ul class="footer-navitems">
        <li class="footer-navitem" v-for="(item, index) in menu_list" :key="index">
          <h6>{{item.name}}</h6>
          <ul>
            <li
              class="footer-navlink footer-navlink_info small-font"
              v-for="(link, idx) in item.links"
              :key="idx"
              @click="$router.push(link.path)"
            >
              <arrow :color="'#ff5b00'" :borderWidth="'1px'" :size="'10px'" :direction="'right'" />
              {{link.name}}
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div class="footer-navitem">
      <h6>{{contact_list.name}}</h6>
      <ul>
        <li
          class="footer-navlink footer-navlink_contact small-font"
          v-for="(contact,idx) in contact_list.links"
          :key="idx"
        >{{contact.name}}</li>
      </ul>
      <img src="../../assets/icons/facebook.svg" alt="fb-icon" class="footer-icon" />
      <img src="../../assets/icons/youtube.svg" alt="fb-icon" class="footer-icon" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    background-color: var(--dark);
    color: var(--white);
    font-weight: 500;
    display: flex;
    justify-content: space-between;

    &-navitems {
      display: flex;
    }
    &-icon,
    &-navlink {
      cursor: pointer;
      margin-top: 10px;
    }
    &-navlink {
      &:hover {
        color: var(--orange);
      }

      &_info {
        margin-right: 12px;
      }
    }

    &-icon {
      width: 36px;
    }
  }
</style>

<script>
import ArrowVue from "../common/Arrow.vue";
export default {
  name: "footer.vue",
  components: {
    arrow: ArrowVue
  },
  data() {
    return {
      menu_list: [
        {
          name: "Продукция",
          links: [
            { name: "Бетонные заборы", path: "/fence-koncrete" },
            { name: "Сетка рабица", path: "/fence-rabitz" },
            { name: "Забор из профнастила", path: "/fence-steel" },
            { name: "Ворота и калитки", path: "/gates" },
            { name: "Бетонные столбики", path: "/pillar" },
            { name: "Садовые дорожки", path: "/lane" }
          ]
        },
        {
          name: "Информация",
          links: [
            { name: "О нас", path: "/about" },
            { name: "Популярные товары", path: "/popular" },
            { name: "Каталог", path: "/catalog" },
            { name: "Новости", path: "/news" }
          ]
        }
      ],
      contact_list: {
        name: "Контакты",
        links: [
          { name: "+380(97)111 11 11", path: "/contact" },
          { name: "sokurmen@gmail.com", path: "/contact" }
        ]
      }
    };
  }
};
</script>