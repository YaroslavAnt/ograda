<template>
  <section class="section">
    <div class="section-padding section-intro">
      <h2 class="section-heading with-skewed-bg">{{content.section_heading}}</h2>
    </div>

    <!-- <div class="section-padding">
      <div class="section-switch ">
        <nuxt-link
          v-for="(category) in categories"
          :key="category.name"
          class="switch-tab"
          :class="{'switch-tab-active': activeTab===new String(category.name).toUpperCase()}"
          :to='{path:`/products/${category.name}?category_id=${category.id}`}'
        >{{new String(category.name).toUpperCase()}}</nuxt-link>
      </div>
    </div> -->

    <slider
      class="section-slider"
      v-if="slides.length>0 && $store.state.products.list.length > 0"
      :slider_items="slides"
      :withAutoPlay="true"
      :withFilter="true"
    />
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
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  computed: {
    slides() {
      return this.$store.state.categories.list.map(category => {
        if (this.$store.state.products.list.length > 0) {
          return this.$store.state.products.list.find(
            product => product.category.name === category.name
          );
        }
      });
    },
    categories() {
      return this.$store.state.categories.list;
    }
  },
  data() {
    return {
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
          img_alt: "Забор из сетки",
          heading: "Забор из сетки",
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
      z-index: 10;
      position: absolute;
      @media (min-width: 768px) {
      }
    }
    &-heading {
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

    &-switch {
      display: block;

      @media (min-width: 768px) {
        display: none;
      }
    }

    &-slider {
      min-width: 768px;
    }
  }
</style>

