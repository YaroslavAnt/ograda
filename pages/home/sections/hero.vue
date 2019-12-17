<template>
  <section class="section">
    <div class="section-padding section-intro">
      <h2 class="hero-heading with-skewed-bg">{{section_heading}}</h2>
    </div>
    <slider :slider_items="slider_items" />
  </section>
</template>

<script>
import SliderVue from "../../../components/common/Slider.vue";
import zabor from "../../../assets/img/but/but_2.jpg";
import rabitsa from "../../../assets/img/but_rovnyi/but_rovnyi_1.jpg";
import vorota from "../../../assets/img/fagot/fagot_1.jpg";
import stolbiki from "../../../assets/img/but_loza/but_loza_3.jpg";
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
          img: zabor,
          heading: "Бетонные заборы",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita.",
          link: "/zabor-iz-betona"
        },
        {
          img: rabitsa,
          heading: "Сетка-рабица",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet.",
          link: "/setka-rabitsa"
        },
        {
          img: vorota,
          heading: "Ворота и калитки",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet consectetur adipisicing.",
          link: "/vorota-i-kalitki"
        },
        {
          img: stolbiki,
          heading: "Виноградные столбики",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor.",
          link: "/stolbiki"
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

