<template>
  <section class="section">
    <div class="section-padding section-intro">
      <h2 class="hero-heading with-skewed-bg">{{section_heading}}</h2>
    </div>
    <slider :slider_items="slider_items" :withAutoPlay="true" :withFilter="true" />
  </section>
</template>

<script>
import SliderVue from "~/components/common/Slider.vue";
import zabor from "~/assets/img/fence/but/but_1.jpg";
import rabitsa from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import vorota from "~/assets/img/fence/fagot/fagot_1.jpg";
import stolbiki from "~/assets/img/fence/but_loza/but_loza_3.jpg";
export default {
  name: "hero.vue",
  components: {
    slider: SliderVue
  },
  data() {
    return {
      section_heading: "Основная продукция",
      slider_items: [
        {
          img_src: zabor,
          img_alt: "Бетонные заборы",
          heading: "Бетонные заборы",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita.",
          path: "/fence-koncrete"
        },
        {
          img_src: rabitsa,
          img_alt: "Сетка-рабица",
          heading: "Сетка-рабица",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet.",
          path: "/fence-rabitz"
        },
        {
          img_src: rabitsa,
          img_alt: "Забор из профнастила",
          heading: "Забор из профнастила",
          text:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, veritatis.",
          path: "/fence-steel"
        },

        {
          img_src: vorota,
          img_alt: "Ворота и калитки",
          heading: "Ворота и калитки",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet consectetur adipisicing.",
          path: "/gates"
        },
        {
          img_src: stolbiki,
          img_alt: "Бетонные столбики",
          heading: "Бетонные столбики",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor.",
          path: "/pillar"
        },
        {
          img_src: rabitsa,
          img_alt: "Садовые дорожки",
          heading: "Садовые дорожки",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid minus aspernatur.",
          path: "/lane"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    position: relative;

    &-intro {
      position: absolute;
      z-index: 10;
    }
    .hero-heading {
      color: var(--white);
      font-weight: bold;
      font-size: 22px;
      line-height: 19px;
      display: inline-block;
      text-align: center;
      margin-bottom: 20px;
      padding: 12px 24px;
      position: relative;
      &::before {
        background-color: var(--green);
      }
      // font-style: italic;

      @media (min-width: 600px) {
        font-size: 28px;
        line-height: 21px;
        margin-bottom: 40px;
      }
    }
  }
</style>

