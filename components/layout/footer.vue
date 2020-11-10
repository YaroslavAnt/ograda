<template>
  <footer class="footer  base-font">
    <div class="share footer-padding align-center">
      <span class="medium-font">Поделиться:</span>

      <div class="align-center">
        <ShareNetwork
          v-for="network in SOCIAL_SHARE"
          :network="network.network"
          :key="network.name"
          :style="{
            backgroundColor: network.color
          }"
          :url="currentURL"
          class="footer-share-link"
          :title="'Еврозаборы в Запорожье'"
        >
          {{ network.name }}
        </ShareNetwork>
      </div>

      <div class="footer-rating">
        <div class="elfsight-app-34771295-8af0-4459-87cc-2af7e7b87bc4"></div>
        <div class="footer-rating-box">
          <svg class="footer-icon footer-icon--rating">
            <use xlink:href="../../assets/icons/sprite_s.svg#google" />
          </svg>
          <span class="medium-font">Google рейтинг</span>
          <div>
            <b class="big-font">{{ Number(rating).toFixed(1) }}</b>
            <v-rating :rating="rating"></v-rating>
          </div>
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://www.google.com/maps/place/%D0%95%D0%B2%D1%80%D0%BE%D0%B7%D0%B0%D0%B1%D0%BE%D1%80+%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D0%B5.+%D0%92%D0%BE%D1%80%D0%BE%D1%82%D0%B0+%D0%BA%D0%B0%D0%BB%D0%B8%D1%82%D0%BA%D0%B8.+%D0%A3%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0.+%D0%94%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0./@47.8484007,35.257578,17z/data=!3m1!4b1!4m7!3m6!1s0x0:0xe7caf92c070da69e!8m2!3d47.8484007!4d35.2597667!9m1!1b1?hl=ru"
            class="small-font footer-rating-link"
            >Смотреть отзывы ({{ reviews_number }})</a
          >
        </div>
      </div>
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
                <span class="color-orange">&#10095;</span>
                <nuxt-link
                  title="страница товара"
                  :to="`/${replaceWithDash(link.name)}`"
                  >{{ link.name }}</nuxt-link
                >
              </li>
            </ul>
          </li>

          <li
            class="footer-navitem"
            v-for="(item, index) in menu_list"
            :key="index"
          >
            <p>{{ item.name }}</p>
            <ul>
              <li
                class="footer-navlink footer-navlink_info small-font"
                v-for="(link, idx) in item.links"
                :key="idx"
              >
                <span class="color-orange">&#10095;</span>
                <nuxt-link title="Подробнее" :to="link.path">{{
                  link.name
                }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <address class="footer-navitem footer-contacts">
        <div>
          <p>{{ contact_list.name }}</p>
          <ul>
            <li>
              <span> г. Запорожье,</span>
              <br />
              <span> ул.Стартовая 1ж</span>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a :href="`tel:${PHONE}`" title="Телефон">{{ PHONE }}</a>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a :href="`tel:${PHONE1}`" title="Телефон">{{ PHONE1 }}</a>
            </li>
            <li class="footer-navlink footer-navlink_contact small-font">
              <a title="Эл.почта" :href="`mailto:${EMAIL}`">{{ EMAIL }}</a>
            </li>
          </ul>

          <div>
            <a
              :content="FACEBOOK"
              :href="FACEBOOK"
              target="_blank"
              rel="noreferrer noopener"
              title="Наша страничка в соцсетях"
            >
              <svg class="footer-icon">
                <use xlink:href="../../assets/icons/sprite_s.svg#facebook" />
              </svg>
            </a>
            <a
              :content="INSTAGRAM"
              :href="INSTAGRAM"
              target="_blank"
              rel="noreferrer noopener"
              title="Наша страничка в соцсетях"
            >
              <!-- <img
                src="../../assets/icons/instagram.svg"
                alt="fb-icon"
                class="footer-icon lazyload"
              /> -->

              <svg class="footer-icon">
                <use xlink:href="../../assets/icons/sprite_s.svg#instagram" />
              </svg>
            </a>
            <a
              :content="TWITTER"
              :href="TWITTER"
              target="_blank"
              rel="noreferrer noopener"
              title="Наша страничка в соцсетях"
            >
              <svg class="footer-icon">
                <use xlink:href="../../assets/icons/sprite_s.svg#twitter" />
              </svg>
            </a>
            <a
              :content="YOUTUBE"
              :href="YOUTUBE"
              target="_blank"
              rel="noreferrer noopener"
              title="Наша страничка в соцсетях"
            >
              <svg class="footer-icon">
                <use xlink:href="../../assets/icons/sprite_s.svg#youtube" />
              </svg>
            </a>
            <a
              :content="PINTEREST"
              :href="PINTEREST"
              target="_blank"
              rel="noreferrer noopener"
              title="Наша страничка в соцсетях"
            >
              <svg class="footer-icon">
                <use xlink:href="../../assets/icons/sprite_s.svg#pinterest" />
              </svg>
            </a>
          </div>

          <p>Пн-Сб, 9:00 - 18:00</p>
        </div>
      </address>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  font-weight: 500;
  position: relative;
  overflow: hidden;

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

  &-rating {
    display: inline-block;

    &-box {
      margin-top: 24px;
      background-color: #fff;
      padding: 24px;
      border-radius: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-link {
      margin-top: 12px;
      color: var(--red);
      text-decoration: underline;
    }
  }

  &-navitems {
    display: inline-flex;
    flex-wrap: wrap;
  }
  &-navitem {
    margin-bottom: 36px;
    max-width: 270px;
    min-height: 220px;
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
    height: 36px;

    &--rating {
      height: 70px;
      margin-top: -30px;
    }
  }

  &-share-link {
    margin: 5px;
    font-weight: bold;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    padding: 6px 20px;
    border-radius: 32px;
  }

  .counters {
    position: absolute;
    bottom: 5px;
    text-align: center;
    visibility: hidden;
  }
}
</style>

<script>
import {
  DOMAIN,
  BASE_URL,
  PHONE,
  EMAIL,
  PHONE1,
  FACEBOOK,
  INSTAGRAM,
  YOUTUBE,
  TWITTER,
  PINTEREST,
  SOCIAL_SHARE
} from "../../config";
import { replaceWithDash } from "../../static/utils";
import vRating from "../common/Rating/Rating.vue";
// import SocialSharing from "vue-social-sharing";

export default {
  name: "footer.vue",

  methods: {
    replaceWithDash
  },
  components: {
    vRating
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
      INSTAGRAM,
      YOUTUBE,
      TWITTER,
      PINTEREST,
      SOCIAL_SHARE,
      rating: this.$store.state.common.rating,
      reviews_number: this.$store.state.common.reviews_number,
      menu_list: [
        {
          name: "Информация",
          links: [
            { name: "выставки", path: "/expo" },
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
