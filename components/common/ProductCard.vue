<template>
  <article class="card">
    <app-image
      :img_src="getImageUrl(product)"
      :img_alt="product.img_alt"
      :lazy="false"
      :ratio="67"
    />

    <!-- :to="`/products/${replaceWithDash(product.category.name) }/${replaceWithDash(product.subcategory.name) }/${product.id}`" -->
    <nuxt-link
      to='/'
      class="card-name base-font"
    >{{product.name}}</nuxt-link>

    <div class="card-text">
      <span
        v-if="product.option.label"
        class="card-label small-font"
      >{{product.option.label}}</span>
      <p class="card-price medium-font">Цена: {{product.price}}</p>
    </div>
    {{product}}
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import { BASE_URL } from "~/config";
import { replaceWithDash } from "../../static/utils";
export default {
  data() {
    return {
      BASE_URL
    };
  },
  computed: {},

  name: "ProductCard.vue",
  props: ["product"],
  props: {
    product: {
      type: Object,
      default: {
        price: "",
        category: {
          name: ""
        },
        subcategory: {
          name: ""
        }
      }
    }
  },
  methods: {
    getImageUrl(product) {
      return product.img_set.length > 0
        ? this.BASE_URL + product.img_set[0]
        : "";
    },
    replaceWithDash: replaceWithDash
  },
  components: {
    "app-image": ImageBaseVue
  }
};
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    overflow: hidden;
    max-width: 500px;
    border: 1px solid #ddd;

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
      top: 40%;
      left: 50%;
      transform: translate(-50%, 0%);
      width: 65%;
      min-width: 260px;
      text-align: center;
      text-transform: uppercase;
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
    &-price {
      font-weight: bold;
    }
  }
</style>

