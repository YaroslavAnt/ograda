<template>
  <main>
    <h1 class="heading heading-page with-skewed-bg">{{ title }}</h1>
    <hero :slides="slides"></hero>
    <section class="about section-padding">
      <!-- <h2 class="heading heading-section with-skewed-bg">О нас</h2> -->
      <p class="about-paragraph base-font">
        Наше предприятие основано в 2010 году и является одним из основных
        изготовителей секционных
        <strong>
          <nuxt-link
            title="бетонные заборы"
            to="/заборы?subcategory=бетонные-заборы"
          >
            бетонных заборов</nuxt-link
          >
        </strong>
        в Запорожье. Предоставляем широкий <strong>перечень услуг</strong>,
        связанных с установкой еврозабора 'под ключ' от замера участка до
        <strong>покраски плит</strong> после окончания строительных работ.
        Принимаем заказы на монтаж ограждений и ворот по всей Запорожской
        области.
      </p>

      <p class="about-paragraph base-font">
        На данном сайте вы можете ознакомиться с полным списком товаров с ценами
        и описанием в категориях:
      </p>
      <ul class="medium-font about-categories">
        <li v-for="(category, idx) in categories" :key="idx" class="category">
          &rarr;&ensp;<nuxt-link
            :to="`/${replaceWithDash(category.name)}`"
            :title="category.name"
            class="category-link"
            >{{ category.name.toUpperCase() }}</nuxt-link
          >
        </li>
      </ul>

      <p class="base-font">
        В разделе
        <nuxt-link to="/blog" class="category-link" title="Наши отчеты"
          >&rarr; новостей</nuxt-link
        >
        опубликованы отчеты о выполненных работах
      </p>

      <p id="services" class="about-paragraph base-font">
        Чтобы вы могли убедиться в качестве нашых <strong>еврозаборов</strong>,
        организованы
        <nuxt-link
          to="/expo"
          class="category-link"
          title="натурные выставки ограждений"
          >&rarr; натурные выставки</nuxt-link
        >
        ограждений. В них представлены основные образцы бетонных плит с
        применением покраски и без.
      </p>
    </section>
    <popular :popularProducts="popularProducts"></popular>

    <services></services>
    <news :lastPosts="posts.slice(0, 3)"></news>
  </main>
</template>

<script>
import heroVue from "../components/sections/home/hero";
import servicesVue from "../components/sections/home/services.vue";
import newsVue from "../components/sections/home/news.vue";
import sectionVue from "~/components/layout/section.vue";
import popularVue from "../components/sections/home/popular.vue";

import ogImage from "../assets/img/services/zvetnoi_zabor2.jpg";

import { DOMAIN } from "../config";

import { mapGetters } from "vuex";
import { replaceWithDash } from "../static/utils";

export default {
  scrollToTop: true,

  components: {
    hero: heroVue,
    services: servicesVue,
    news: newsVue,
    "app-section": sectionVue,
    popular: popularVue
  },

  methods: {
    replaceWithDash
  },

  computed: {
    ...mapGetters({
      categories: "categories/getAllCategories",
      rating: "common/getRating",
      greviews_number: "common/getReviews"
    })
  },

  data() {
    return {
      title: "✔ Секционные бетонные Еврозаборы в Запорожье",
      description:
        "Бетонные секционные заборы в Запорожье от производителя в большом ассортименте. Весь перечень работ по установке ограждений",
      popularProducts: [],
      slides: [],
      posts: [],
      keywords:
        "еврозабор в запорожье, купить еврозабор, глянцевые еврозаборы, бетонный забор, забор из профнастила",
      ogImage,
      DOMAIN,
      organisationMicrodata: {
        "@context": "http://www.schema.org",
        "@type": "ProfessionalService",
        currenciesAccepted: "UAH",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: this.rating || 5,
          reviewCount: this.greviews_number || 32
        },
        name: "Ограда",
        url: "https://ograda.zp.ua/",
        sameAs: [
          "https://www.instagram.com/ograda_zp/",
          "https://twitter.com/OgradaZ?s=09",
          "https://www.pinterest.com/ograda_zp0599/",
          "https://www.facebook.com/%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B0-103254474643177/"
        ],
        logo: "https://ograda.zp.ua/_nuxt/img/af5dd7f.png",
        priceRange: "$$",
        image:
          "https://ograda.zp.ua/_nuxt/assets/img/services/zvetnoi_zabor2.jpg",
        description:
          "Производство и продажа еврозаборов. Установка бетонных заборов и заборов из профнастила. Изготовление ворот и калиток",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Стартова вулиця, 1ж",
          addressLocality: "Запоріжжя",
          addressRegion: "Запорізька область",
          postalCode: "69013",
          addressCountry: "Україна"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "47.847385",
          longitude: "35.258344"
        },
        openingHours: "Mo-Sa 08:00-18:00",
        telephone: "+38(098)030-5010"
      }
    };
  },

  async asyncData({ $slidesAPI, $productsAPI, $postsAPI }) {
    const {
      data: { data: slides }
    } = await $slidesAPI.slides();

    const { data: popularProducts } = await $productsAPI.productsPopular();

    const {
      data: { data: posts }
    } = await $postsAPI.posts();

    return { slides, popularProducts, posts };
  },

  async fetch() {
    const res = await fetch(
      "https://service-reviews-ultimate.elfsight.com/data/sources?&uris[]=ChIJFXQjS-Fd3EARnqYNByz5yuc&with_text_only=1&min_rating=3&order=date&page_length=100"
    );
    if (res.ok) {
      let { result } = (await res.json()) || {};

      const { rating, reviews_number } = result.data[0] || {};

      this.$store.commit("common/SET_RATING", rating);
      this.$store.commit("common/SET_REVIEWS", reviews_number);
    } else {
      console.log("Ошибка HTTP: " + res.status);
    }
  },

  async mounted() {
    this.$store.commit("common/CLOSE_MENU");
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
        { name: "twitter:site", content: "@OgradaZ" },
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
      ],
      script: [
        { type: "application/ld+json", json: this.organisationMicrodata }
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
    position: absolute;
    right: 150%;

    @media (min-width: 425px) {
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
      right: unset;
    }

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

    &-categories {
      min-height: 250px;
    }
  }

  .category {
    line-height: 1.3;
    padding: 8px 0;
  }
  .category-link {
    color: var(--red);
  }
}
</style>
