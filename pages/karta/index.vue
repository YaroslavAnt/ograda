<template>
  <main class="section-padding">
    <h1 class="heading with-skewed-bg">Карта сайта</h1>
    <ul class="pages">
      <li v-for="(link, pageIdx) in staticLinks" :key="pageIdx">
        <nuxt-link
          :to="link.path"
          class="page medium-font"
          v-if="!link.children"
          >{{ pageIdx + 1 }}. {{ link.name }}</nuxt-link
        >

        <p class="page medium-font" v-if="link.children">
          {{ pageIdx + 1 }}. {{ link.name }}
        </p>

        <ul class="subpages" v-if="link.children">
          <li
            v-for="(sublink, subpageIdx) in link.children"
            :key="`${pageIdx}${subpageIdx}`"
          >
            <nuxt-link
              class="subpage base-font"
              :to="
                link.path + '/' + replaceWithDash(sublink.path || sublink.name)
              "
              >{{ pageIdx + 1 }}.{{ subpageIdx + 1 }}
              {{ sublink.name }}</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import { replaceWithDash } from "../../static/utils";
import { DOMAIN } from "../../config";
export default {
  name: "sitemap.vue",
  data() {
    return { DOMAIN };
  },
  methods: {
    replaceWithDash
  },
  computed: {
    staticLinks() {
      return [
        { name: "Главная", path: "/" },
        { name: "Товары", path: "", children: this.dynamicLinks },
        { name: "Выставки", path: "/expo" },
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
      ];
    },
    ...mapGetters({
      dynamicLinks: "categories/getAllCategories"
    })
  },
  head() {
    return {
      title: "Навигация по сайту",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Эта страница предназначена для навигации по сайту"
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.path } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
main {
  // background-color: #fff;
  position: relative;
  margin-top: 85px;
  @media (min-width: 1024px) {
    margin-top: 0;
  }

  .heading {
    position: relative;
    font-weight: bold;
    font-size: 22px;
    // width: calc(100% - 32px);
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin: 20px 16px 20px;
    padding: 12px 24px;
    z-index: 5;
    display: flex;
    justify-content: center;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
  }
}
.pages {
  padding-left: 10%;
}
.page {
  color: var(--red);
}
.subpages {
  padding-left: 10px;
}
</style>
