﻿<template>
  <article class="card">
    <div class="card-img-box">
      <img
        class="card-image"
        v-if="product.img_set[0]"
        :src="
          `https://cdn.statically.io/img/${CDN_URL +
            product.img_set[0]}?w=450&f=auto `
        "
        :alt="product.img_alt"
      />
    </div>

    <nuxt-link
      :to="
        `/${replaceWithDash(product.category.name)}/${replaceWithDash(
          product.name
        )}`
      "
      class="card-name base-font"
      :title="product.name"
      ><span>{{ product.name }}</span>
    </nuxt-link>

    <span
      v-if="product.option && product.option.label"
      class="card-label small-font"
      >{{ product.option.label }}</span
    >

    <div class="card-text">
      <p class="card-price medium-font">
        Цена:
        <span>&#8372; </span>
        <span>{{ product.price }}</span>
      </p>
    </div>
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import { BASE_URL, CDN_URL } from "~/config";
import { replaceWithDash } from "../../static/utils";
export default {
  data() {
    return {
      BASE_URL,
      CDN_URL
    };
  },

  name: "ProductCard.vue",
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
    // getImageUrl(product) {
    //   return product.img_set.length > 0
    //     ? this.BASE_URL + product.img_set[0]
    //     : "";
    // },
    replaceWithDash: replaceWithDash,
    getPrice(priceStr) {
      const [price] = priceStr.match(/\d+/g);
      return price;
    }
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
  box-shadow: 0px 10px 18px rgba(130, 151, 196, 0.85);
  overflow: hidden;
  max-width: 500px;
  border: 1px solid #ddd;
  margin: 0 auto;
  width: 100%;

  &-img-box {
    width: 100%;
    overflow: hidden;
    padding-bottom: 67%;
    position: relative;
  }

  &-image {
    position: absolute;
    width: 100%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
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
    font-weight: 500;
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
      background-color: var(--green);
      opacity: 0.8;
      z-index: -1;
      border-radius: 4px;
    }
  }
  &-price {
    font-weight: bold;
  }
}
</style>
