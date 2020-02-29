<template>
  <section
    class="section"
    v-if="slides.length > 0 && $store.state.products.list.length > 0"
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
import zabor from "~/assets/img/fence/but/but_1.jpg";
import rabitsa from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import vorota from "~/assets/img/fence/fagot/fagot_1.jpg";
import stolbiki from "~/assets/img/fence/but_loza/but_loza_3.jpg";
import { mapGetters } from "vuex";

export default {
  name: "hero.vue",
  components: {
    slider: SliderVue
  },

  computed: {
    ...mapGetters({
      products: "products/getProducts"
    }),
    slides() {
      let productsByCategory = [];
      if (this.products.length > 0) {
        this.categories.forEach(category => {
          const newItem = this.products.find(
            product => product.category.name === category.name
          );
          newItem && productsByCategory.push(newItem);
        });
      }
      return productsByCategory;
    },
    categories() {
      return this.$store.state.categories.list;
    }
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

