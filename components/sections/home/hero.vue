<template>
  <section
    class="section"
    v-if="slides.length > 0"
  >

    <slider
      class="section-slider"
      :slider_items="slides"
      :withAutoPlay="true"
      :withFilter="true"
    />
  </section>
</template>

<script>
import SliderVue from "~/components/common/Slider.vue";
import { mapGetters } from "vuex";

export default {
  name: "hero.vue",
  components: {
    slider: SliderVue
  },

  computed: {
    ...mapGetters({
      products: "products/getProducts",
      slides: "slides/getSlides"
    })
  }
};
</script>

<style lang="scss" scoped>
  .section {
    position: relative;
    overflow: hidden;

    &-intro {
      z-index: 10;
      position: absolute;
      padding: 30px 16px;

      @media (min-width: 1200px) {
        padding: 30px 32px;
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
      min-width: 400px;
    }
  }
</style>

