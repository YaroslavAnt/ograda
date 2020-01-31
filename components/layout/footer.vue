<template>
  <footer class="footer footer-padding base-font">
    <nav class="container-footer container">
      <ul class="footer-navitems">
        <li
          class="footer-navitem"
          v-if="$store.state.categories.list.length >0"
        >
          <h6>Продукция</h6>
          <ul>
            <li
              class="footer-navlink footer-navlink_info small-font"
              v-for="(link, idx) in $store.state.categories.list"
              :key="idx"
            >
              <arrow
                :color="'#ff5b00'"
                :borderWidth="'1px'"
                :size="'10px'"
                :direction="'right'"
              />
              <nuxt-link :to='`/products/${link.name}?category_id=${link.id}`'>{{link.name}}</nuxt-link>
            </li>
          </ul>
        </li>

        <li
          class="footer-navitem"
          v-for="(item, index) in menu_list"
          :key="index"
        >
          <h6>{{item.name}}</h6>
          <ul>
            <li
              class="footer-navlink footer-navlink_info small-font"
              v-for="(link, idx) in item.links"
              :key="idx"
            >
              <arrow
                :color="'#ff5b00'"
                :borderWidth="'1px'"
                :size="'10px'"
                :direction="'right'"
              />
              <nuxt-link :to="link.path">{{link.name}}</nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <address class="footer-navitem">
      <h6>{{contact_list.name}}</h6>
      <ul>
        <li
          class="footer-navlink footer-navlink_contact small-font"
          v-for="(contact,idx) in contact_list.links"
          :key="idx"
        >{{contact.name}}</li>
      </ul>
      <img
        src="../../assets/icons/facebook.svg"
        alt="fb-icon"
        class="footer-icon"
      />
      <img
        src="../../assets/icons/youtube.svg"
        alt="fb-icon"
        class="footer-icon"
      />
    </address>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    background-color: var(--dark);
    color: var(--white);
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    @media (min-width: 500px) {
      flex-direction: row;
    }

    &-navitems {
      display: inline-flex;
      flex-wrap: wrap;
    }
    &-navitem {
      margin-bottom: 36px;
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
        text-transform: uppercase;
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
  computed: {
    dynamicLinks() {
      const links = this.$store.state.categories.list.map(category => ({
        name: category.name,
        id: category.id
      }));
      return links;
    }
  },
  data() {
    return {
      menu_list: [
        {
          name: "Информация",
          links: [
            { name: "о нас", path: "/about" },
            { name: "каталог", path: "/prices" },
            { name: "новости", path: "/blog" }
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