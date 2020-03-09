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
import measure from "~/assets/img/services/measure.jpg";
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
        { property: "og:image", content: DOMAIN + this.serviceObj.img_src },
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
        { name: "twitter:image", content: DOMAIN + this.serviceObj.img_src },
        {
          name: "twitter:image:alt",
          content: this.serviceObj.img_alt
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
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
      keywords: `замер еврозаборов, вызов замерщика, обмер участка под ограждение`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Выезд специалиста для замера периметра заборов. Стоимость 50грн",
      serviceObj: {
        img_src: [measure],
        id: "measure",
        img_alt: "Замер установки еврозабора",
        title: "Замер установки еврозабора",
        paragraphs: [
          {
            text: `Стоимость замера по городу - 50грн, по области - по договоренности.`
          },
          {
            text: `После замера мы составляем точную смету и высылаем на почту или вайбер.`
          },
          {
            text: `Эту же распечатанную копию водитель Вам отдаст, когда привезет все материалы.`
          },
          { text: `Вызвать замерщика можно по телефону в контактах.` }
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