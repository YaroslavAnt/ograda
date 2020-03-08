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
import delivery from "~/assets/img/services/delivery.png";
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
          name: "og:title",
          content: this.serviceObj.title
        },
        {
          name: "og:description",
          content: this.description
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: DOMAIN + this.$route.path },
        { name: "og:image", content: this.serviceObj.img_src },
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
      keywords: `доставка еврозаборов, доставка строительных материаловб привоз`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Услуги по доставке всех видов заборов. Доставка стройматериалов.",
      serviceObj: {
        img_src: [delivery],
        id: "delivery",
        img_alt: "Доставка еврозаборов по Запорожью и Запорожской области",
        title: "Доставка еврозаборов",
        paragraphs: [
          {
            text: `Доставка плит и столбов на объект осуществляется бортовыми автомобилями с трехсторонней выгрузкой.`
          },
          {
            text: `Доставка является платной услугой. Для расчета стоимости доставки сообщите район установки и метраж забора.`
          },
          {
            text: `Транспортировка, перенос, отгрузка, складирование и установка плит производится строго вертикально.`
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