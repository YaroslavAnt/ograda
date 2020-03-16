<template>
  <footer class="footer  base-font">
    <div class="share footer-padding">
      Поделиться:
      <social-sharing
        :url="currentURL"
        inline-template
      >
        <div>
          <network network="facebook">
            <span style="margin-top: 5px; font-weight: bold; cursor: pointer; display: inline-block; background-color: #4267b2; color: #fff; padding: 10px; border-radius: 4px">Facebook</span>
          </network>
          <network network="twitter">
            <span style="margin-top: 5px; font-weight: bold; cursor: pointer; display: inline-block; background-color: rgb(29, 161, 242); color: #fff; padding: 10px; border-radius: 4px">Twitter</span>
          </network>
          <network network="vk">
            <span style="margin-top: 5px; font-weight: bold; cursor: pointer; display: inline-block; background-color: #4c75a3; color: #fff; padding: 10px; border-radius: 4px">ВКонтакте</span>
          </network>
          <network network="odnoklassniki">
            <span style="margin-top: 5px; font-weight: bold; cursor: pointer; display: inline-block; background-color: #ee8208; color: #fff; padding: 10px; border-radius: 4px">Одноклассники</span>
          </network>
        </div>
      </social-sharing>
    </div>

    <div class="footer-with-bg footer-padding container">
      <nav class="container-footer">
        <ul class="footer-navitems">
          <li
            class="footer-navitem"
            v-if="$store.state.categories.list.length > 0"
          >
            <p>Продукция</p>
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
                <nuxt-link :to='`/products/${replaceWithDash(link.name) }`'>{{link.name}}</nuxt-link>
              </li>
            </ul>
          </li>

          <li
            class="footer-navitem"
            v-for="(item, index) in menu_list"
            :key="index"
          >
            <p>{{item.name}}</p>
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

      <address
        class="footer-navitem footer-contacts"
        itemscope
        itemtype="http://schema.org/Organization"
      >
        <div>
          <span
            itemprop="name"
            content='Ограда'
          ></span>
          <p>{{contact_list.name}}</p>
          <ul
            itemprop="address"
            itemscope
            itemtype="http://schema.org/PostalAddress"
          >
            <li>
              <span itemprop="addressLocality"> г. Запорожье,</span>
              <br />
              <span itemprop="streetAddress"> ул.Стартовая 1ж</span>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a
                :href="`tel:${PHONE}`"
                itemprop="telephone"
              >{{PHONE}}</a>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a
                :href="`tel:${PHONE1}`"
                itemprop="telephone"
              >{{PHONE1}}</a>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a
                :href="`mailto:${EMAIL}`"
                itemprop="email"
              >{{EMAIL}}</a>
            </li>
          </ul>
          <a
            target="_blank"
            rel="noreferrer noopener"
            :href='FACEBOOK'
            itemprop="sameAs"
            content="https://www.facebook.com/%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B0-103254474643177/"
          >
            <img
              src="../../assets/icons/facebook.svg"
              alt="fb-icon"
              class="footer-icon"
            /></a>
          <p>Пн-Сб, 9:00 - 18:00</p>
        </div>

        <!--<div>
          <h6>Страницы в соцсетях</h6>
           <img
            src="../../assets/icons/youtube.svg"
            alt="fb-icon"
            class="footer-icon"
          /> 
        </div>-->
      </address>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    font-weight: 500;
    position: relative;

    @media (min-width: 500px) {
      flex-direction: row;
    }

    &-with-bg {
      background-color: var(--dark);
      color: var(--white);
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &-navitems {
      display: inline-flex;
      flex-wrap: wrap;
    }
    &-navitem {
      margin-bottom: 36px;
    }
    &-contacts {
      display: flex;
      flex-wrap: wrap;
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

      &_contact {
        margin-right: 10px;
      }
    }

    &-icon {
      width: 36px;
    }
  }
</style>

<script>
import ArrowVue from "../common/Arrow.vue";
import { DOMAIN, BASE_URL, PHONE, EMAIL, PHONE1, FACEBOOK } from "../../config";
import { replaceWithDash } from "../../static/utils";
import SocialSharing from "vue-social-sharing";
export default {
  name: "footer.vue",
  components: {
    arrow: ArrowVue,
    "social-sharing": SocialSharing
  },
  methods: {
    replaceWithDash
  },
  computed: {
    dynamicLinks() {
      const links = this.$store.state.categories.list.map(category => ({
        name: category.name,
        id: category.id
      }));
      return links;
    },
    currentURL() {
      return DOMAIN + this.$route.path;
    }
  },
  data() {
    return {
      DOMAIN,
      PHONE,
      PHONE1,
      EMAIL,
      FACEBOOK,

      menu_list: [
        {
          name: "Информация",
          links: [
            { name: "о нас", path: "/about" },
            { name: "цены", path: "/prices" },
            { name: "новости", path: "/blog" },
            { name: "вопросы", path: "/faq" },
            { name: "карта сайта", path: "/karta" }
          ]
        }
      ],
      contact_list: {
        name: "Контакты",
        links: [
          { name: PHONE, path: "/contact" },
          { name: EMAIL, path: "/contact" }
        ]
      }
    };
  }
};
</script>