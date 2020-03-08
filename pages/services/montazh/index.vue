<template>
  <main>
    <h1 class="heading with-skewed-bg">{{serviceObj.title}}</h1>
    <app-section class="section">
      <app-intro
        :img_set="serviceObj.img_src"
        :img_alt="serviceObj.img_alt"
        :paragraphs="serviceObj.paragraphs"
        :withBorder="true"
      />
    </app-section>
  </main>
</template>

<script>
import IntroVue from "~/components/common/Intro.vue";
import sectionVue from "~/components/layout/section.vue";
import { getVarsByPage } from "~/api/variables";
import montage from "~/assets/img/services/montage.jpg";
import { DOMAIN } from "../../../config";

export default {
  name: "index.vue",
  head() {
    return {
      title: this.serviceObj.title,
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
          content: this.serviceObj.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        { property: "og:image", content: this.serviceObj.img_src },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.serviceObj.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        { name: "twitter:image", content: this.serviceObj.img_src },
        {
          name: "twitter:image:alt",
          content: this.serviceObj.img_alt
        }
      ]
    };
  },
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue
  },

  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },
  data() {
    return {
      fetchedVars: {},
      DOMAIN,
      keywords: `установка еврозаборов, монтаж ограждений, забор зп`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Услуги по установке (монтажу) всех видов заборов с доставкой стройматериалов.",
      serviceObj: {
        img_src: [montage],
        id: "montage",
        img_alt: "Установка еврозаборов",
        title: "Установка ограждений",
        paragraphs: [
          {
            text:
              "Стоимость установки одной секции еврозабора (плиты + столб) составляет 150-200 грн"
          },
          {
            text: "В стоимость установки входит:",
            list: [
              `- pазгрузка изделий на объекте заказчика;`,
              `- копание ям для бетонирования столбов;`,
              `- подготовка из сыпучих материалов бетона для столбов;`,
              `- выставление и бетонировка столбов в приготовленных ямах;`,
              `- монтаж плит по уровню;`,
              `- при необходимости - подрезка плит;`
            ]
          },
          {
            text: "В стоимость установки не входит:",
            list: [
              `- материалы для бетонировки столбов (щебень, песок и цемент);`,
              `- демонаж старого забора;`,
              `- замазка плит;`
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
  .heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin: 20px 16px -20px;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
    @media (min-width: 1024px) {
      margin: 20px 32px -20px;
    }
  }
</style>