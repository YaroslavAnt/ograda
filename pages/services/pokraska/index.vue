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
import pokraska from "~/assets/img/services/but_paint.jpg";
import zvetnoi_zabor2 from "../../../assets/img/services/zvetnoi_zabor2.jpg";
import zvetnoi_zabor3 from "../../../assets/img/services/zvetnoi_zabor3.jpg";
import zvetnoi_zabor4 from "../../../assets/img/services/zvetnoi_zabor4.jpg";
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
          content: this.description,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords,
        },

        //Open Graph
        {
          property: "og:title",
          content: this.serviceObj.title,
        },
        {
          property: "og:description",
          content: this.description,
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        { property: "og:image", content: DOMAIN + this.serviceObj.img_src },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.serviceObj.title,
        },
        {
          name: "twitter:description",
          content: this.description,
        },
        { name: "twitter:image", content: DOMAIN + this.serviceObj.img_src },
        {
          name: "twitter:image:alt",
          content: this.serviceObj.img_alt,
        },
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath }, //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ],
    };
  },
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue,
  },

  // mounted() {
  //   this.$store.commit("common/CLOSE_MENU");
  // },
  data() {
    return {
      fetchedVars: {},
      DOMAIN,
      keywords: `покраска еврозаборов, покраска бетонного забора, кислотная покраска, цветной еврозабор, покраска еврозабора цена, приемущества кислотной окраски`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Услуги по покраске бетонных еврозаборов. Покраска за один день.",
      serviceObj: {
        img_src: [zvetnoi_zabor2, zvetnoi_zabor3, zvetnoi_zabor4],
        id: "pokraska",
        img_alt: "Покраска еврозабора в Запорожье",
        title: "Покраска еврозабора",
        paragraphs: [
          { text: "Забор окрашивается после монтажа." },
          {
            text:
              "Возможная палитра цветов - от светло-бежевого до темно-коричневого.",
          },
          {
            text:
              "Покраска выполняется нашим сотрудником непосредственно на объекте, используя специальный кислотный краситель.",
          },
          {
            text: "Приемущества кислотной окраски:",
            list: [
              "- крашенные таким образом бетонные заборы имеют повышенную стойкость к выцветанию;",
              "- заборы приобретают очень красивый глянцевый цвет с переливами, которого не достичь с помощью обычной краски;",
            ],
          },
          {
            text:
              "Стоимость покраски еврозабора зависит от насыщенности и глубины оттенка.",
          },
        ],
      },
    };
  },
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