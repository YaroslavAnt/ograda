<template>
  <app-section
    :heading="'Акционные товары'"
    v-if="Array.isArray(special) && special.length>0"
  >
    <div class="section-grid">
      <product-card
        v-for="(product,idx) in special"
        :key="idx"
        :product="product"
      />
    </div>
  </app-section>
</template>
 
<script>
import sectionVue from "~/components/layout/section.vue";
import ProductCardVue from "~/components/common/ProductCard.vue";
import { fence_set } from "~/static/fence_data/index";

export default {
  name: "special.vue",
  components: {
    "app-section": sectionVue,
    "product-card": ProductCardVue
  },
  props: {
    special: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
  .section {
    &-grid {
      display: grid;
      grid-gap: 24px;
      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    .card {
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
      overflow: hidden;

      &-image {
        padding-top: 67%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        outline: 1px solid #aaa;
        outline-offset: -10px;
        position: relative;
      }

      &-text {
        padding: 10px 16px;
        background-color: var(--white);
      }
      &-label {
        display: block;
        background-color: var(--green);
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        right: 0;
        top: 0;
        padding: 4px 8px;
        border-radius: 0px 0 0 4px;
      }
      &-name {
        // font-weight: 600;
        color: #fff;
        padding: 8px 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 65%;
        text-align: center;
        cursor: pointer;
        &:hover {
          &::after {
            opacity: 1;
          }
        }
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          background-color: var(--red);
          opacity: 0.7;
          z-index: -1;
          border-radius: 4px;
        }
      }
    }
  }
</style>