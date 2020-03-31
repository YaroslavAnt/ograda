<template>
  <main>
    <h1 class="heading heading-page with-skewed-bg">Еврозаборы в Запорожье</h1>
    <hero />
    <section class="about section-padding">
      <!-- <h2 class="heading heading-section with-skewed-bg">О нас</h2> -->
      <p class="about-paragraph base-font">
        Наше предприятие основано в 2010 году и является одним из основных изготовителей секционных <strong>бетонных заборов</strong> в Запорожье.
        Предоставляем широкий <strong>перечень услуг</strong>, связанных с установкой еврозабора 'под ключ' от замера участка до <strong>покраски плит</strong> после окончания строительных работ.
        Принимаем заказы на монтаж ограждений и ворот по всей Запорожской области.
      </p>

      <p class="about-paragraph base-font">На данном сайте вы можете ознакомиться с полным списком товаров с ценами и описанием в категориях:</p>
      <ul class="medium-font">
        <li
          v-for="category in categories"
          :key='category.name'
          class="category"
        >
          &rarr;&ensp;<nuxt-link
            :to='`/products/${replaceWithDash(category.name)}`'
            class="category-link"
          >{{category.name.toUpperCase()}}</nuxt-link>
        </li>
      </ul>

      <p class="base-font">
        В разделе
        <nuxt-link
          to='/blog'
          class="category-link"
        >&rarr; новостей</nuxt-link>
        опубликованы отчеты о выполненных работах
      </p>

      <p
        id='services'
        class="about-paragraph base-font"
      >
        Чтобы вы могли убедиться в качестве нашых <strong>еврозаборов</strong>, организованы
        <nuxt-link
          to='/expo'
          class="category-link"
        >&rarr; натурные выставки</nuxt-link> ограждений.
        В них представлены основные образцы бетонных плит с применением покраски и без.
      </p>
    </section>
    <advantages :content="about.advantages" />
    <special :special='special'></special>
    <services :content="services" />
    <news />
  </main>
</template>
  
<script>
import heroVue from "../components/sections/home/hero";
import servicesVue from "../components/sections/home/services.vue";
import newsVue from "../components/sections/home/news.vue";
import specialVue from "../components/sections/home/special.vue";
import aboutVue from "~/components/sections/about/about.vue";
import advantagesVue from "~/components/sections/about/advantages.vue";
import sectionVue from "~/components/layout/section.vue";

import { getSpecialProducts } from "../api/products";
import { getAllSlides } from "../api/slides";
import { getAllPosts } from "../api/posts";

import measure from "~/assets/icons/measure.svg";
import cargo from "~/assets/icons/cargo.svg";
import brush from "~/assets/icons/brush.svg";
import fence from "~/assets/icons/fence.svg";
import ogImage from "../assets/img/services/zvetnoi_zabor2.jpg";

import { DOMAIN } from "../config";

import { about } from "~/static/content_data";

import { mapGetters } from "vuex";
import { replaceWithDash } from "../static/utils";

export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
    special: specialVue,
    services: servicesVue,
    news: newsVue,
    about: aboutVue,
    advantages: advantagesVue,
    "app-section": sectionVue
  },

  methods: {
    replaceWithDash
  },

  computed: {
    ...mapGetters({
      categories: "categories/getAllCategories"
    })
  },

  async fetch({ store }) {
    try {
      const {
        data: { data: slidesData }
      } = await getAllSlides();
      const {
        data: { data: specialData }
      } = await getSpecialProducts();
      const {
        data: { data: postsData }
      } = await getAllPosts();

      store.commit("slides/SET_SLIDES", slidesData);
      store.commit("posts/SET_POSTS", postsData);
      this.special = specialData;
      return { slidesData, specialData, postsData };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  },

  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },

  data() {
    return {
      title: "Еврозаборы c ценой и описанием в Запорожье",
      about,
      description:
        "Еврозаборы в Запорожье от производителя в большом ассортименте. Высокое качество продукции и материалов. Весь перечень работ по установке ограждений",
      special: [],
      slides: [],
      fetchedVars: {},
      keywords:
        "еврозабор в запорожье, купить еврозабор, глянцевые еврозаборы, бетонный забор, забор из профнастила",
      services: {
        section_heading: "Услуги",
        section_subheading:
          "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
        card_list: [
          {
            icon: cargo,
            id: "delivery",
            heading: "Доставка продукции и строй-материалов",
            link: "/services"
          },
          {
            icon: fence,
            id: "montage",
            heading: "Установка заборов, ворот",
            link: "/services"
          },
          {
            icon: brush,
            id: "pokraska",
            heading: "Покраска заборов",
            link: "/services"
          },
          {
            icon: measure,
            id: "measure",
            heading: "Выезд замерщика",
            link: "/services"
          }
        ]
      },
      ogImage,
      DOMAIN
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords
        },

        //Open Graph
        {
          property: "og:title",
          content: this.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        {
          property: "og:image",
          content: DOMAIN + this.ogImage
        },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        {
          name: "twitter:image",
          content: DOMAIN + this.ogImage
        },
        {
          name: "twitter:image:alt",
          content: this.title
        }
      ],
      link: [
        { rel: "canonical", href: this.DOMAIN + this.$route.path } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    // background-color: #fff;
    position: relative;

    .heading {
      position: relative;
      font-weight: bold;
      font-size: 22px;
      // width: calc(100% - 32px);
      line-height: 1;
      display: inline-block;
      text-align: center;
      color: #fff;
      padding: 12px 24px;
      z-index: 5;
      display: flex;
      justify-content: center;

      &::before {
        background-color: var(--green);
      }

      &-page {
        margin: 20px 16px -20px;
      }

      @media (min-width: 600px) {
        font-size: 28px;
        line-height: 1;
      }
    }

    .about {
      background-color: #fff;

      &-paragraph {
        margin-top: 24px;
        &:nth-child(1) {
          margin-top: 0;
        }
      }
    }
    .category {
      line-height: 42px;
    }
    .category-link {
      color: var(--red);
    }
  }
</style>


