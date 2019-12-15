<template>
  <section>
    <slider :slider_items="slider_items" />
  </section>
</template>

<script>
import SliderVue from "../../../components/common/Slider.vue";
import zabor from "../../../assets/img/but_2.jpg";
import rabitsa from "../../../assets/img/but_rovnyi_1.jpg";
import vorota from "../../../assets/img/fagot_1.jpg";
import stolbiki from "../../../assets/img/but_loza_3.jpg";
export default {
  name: "hero.vue",
  components: {
    slider: SliderVue
  },
  data() {
    return {
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
</style>

