<template>
  <section class="section">
    <div class="section-padding section-intro">
      <h2 class="hero-heading with-skewed-bg">{{content.section_heading}}</h2>
    </div>
    <slider :slider_items="content.slider_items" :withAutoPlay="true" :withFilter="true" />
  </section>
</template>

<script>
import SliderVue from "~/components/common/Slider.vue";

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

