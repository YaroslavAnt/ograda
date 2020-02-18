<template>
  <section class="section-padding">
    <article class="section-padding">
      <div class="gridbox">
        <div class="slider-box">
          <app-image
            :img_src="product.img_set[active_img]&&baseUrl+product.img_set[active_img]"
            :img_alt="product.img_alt"
            :lazy="false"
            :ratio="69"
            class="slider-box-image"
            @click.native="isZoomActive=true"
          >
            <span
              v-if="product.option.label"
              class="slider-box-image-label small-font"
            >{{product.option.label}}</span>
          </app-image>
          <div
            class="preview"
            v-if="product.img_set.length>1"
          >
            <div
              class="preview-item"
              :class="{'preview-item-active': active_img===idx}"
              v-for="(img, idx) in product.img_set"
              :key="idx"
              @click="setActiveImg(idx)"
            >
              <app-image
                :img_src="baseUrl+img"
                :img_alt="product.img_alt"
                :lazy="true"
                :ratio="50"
              />
            </div>
          </div>
        </div>

        <div class="info-box">

          <div class="info-box-breadcrumbs">
            <nuxt-link
              to='/'
              class="small-font crumb"
            >&#8962; ГЛАВНАЯ ></nuxt-link>

            <nuxt-link
              :to='{path:`/products/${replaceWithDash(product.category.name)}`}'
              class="small-font crumb"
            >{{product.category.name}} ></nuxt-link>

            <nuxt-link
              class="small-font crumb"
              :to='{path:`/products/${replaceWithDash(product.category.name) }/${replaceWithDash(product.subcategory.name) }`}'
            >
              {{product.subcategory.name}} </nuxt-link>
          </div>
          <h1 class="info-box-name big-font bold">{{product.name}}</h1>

          <p class="info-box-price medium-font">
            Цена:
            <span class="bold">{{product.price}}</span>
          </p>
          <p
            class="info-box-description base-font"
            v-for="(paragraph, idx) in getArrayFromDescription"
            :key="idx"
          >{{ paragraph }}</p>
          <p class="info-box-category small-font">Категория: {{product.category.name}}</p>
          <p
            v-if="product.option"
            class="info-box-option medium-font"
          >{{product.option.details}}</p>
        </div>
      </div>

      <div class="popular">
        <h2 class="medium-font heading"><b>Популярные товары</b></h2>
        <div class="popular-grid">
          <product-card
            v-for="product in popular"
            :key='product.id'
            :product='product'
          ></product-card>
        </div>
      </div>
    </article>

    <div
      class="zoom"
      v-if="isZoomActive"
    >
      <div class="zoom-content">
        <app-close
          color='#fff'
          :width='40'
          :isMenuOpen='true'
          class="zoom-close"
          @click.native="isZoomActive=false"
        ></app-close>
        <img
          class="zoom-image"
          :src="product.img_set[active_img]&&baseUrl+product.img_set[active_img]"
          :alt="product.img_alt"
        >
        <div class="zoom-arrows">
          <app-arrow
            color="#fff"
            :size="'40px'"
            :direction="'left'"
            @click.native="prevImg"
          ></app-arrow>
          <app-arrow
            color="#fff"
            :size="'40px'"
            :direction="'right'"
            @click.native="nextImg"
          ></app-arrow>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
import ImageBaseVue from "../common/ImageBase.vue";
import { getProduct } from "../../api/products";
import { BASE_URL } from "../../config";
import MenuButtonVue from "../common/MenuButton.vue";
import ArrowVue from "../common/Arrow.vue";
import { replaceWithDash } from "../../static/utils";
import ProductCardVue from "../common/ProductCard.vue";

export default {
  name: "Product.vue",
  components: {
    "app-image": ImageBaseVue,
    "app-close": MenuButtonVue,
    "app-arrow": ArrowVue,
    "product-card": ProductCardVue
  },
  methods: {
    replaceWithDash: replaceWithDash,
    setActiveImg(idx) {
      this.active_img = idx;
    },
    prevImg() {
      const newIdx =
        this.active_img <= 0
          ? this.product.img_set.length - 1
          : this.active_img - 1;
      this.active_img = newIdx;
    },
    nextImg() {
      const newIdx =
        this.active_img >= this.product.img_set.length - 1
          ? 0
          : this.active_img + 1;
      this.active_img = newIdx;
    }
  },

  props: {
    product: {
      type: Object
    },
    popular: { type: Array }
  },

  data() {
    return {
      active_img: 0,
      baseUrl: BASE_URL,
      isZoomActive: false
    };
  },

  computed: {
    getArrayFromDescription() {
      return this.product.description && this.product.description.split("#");
    }
  }
};
</script>

<style lang="scss" scoped>
  section {
    background-color: #fff;
  }
  .bold {
    font-weight: 600;
  }
  article {
    background-color: #f2f1ef;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  }
  .zoom {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 200;
    }

    &-close {
      position: fixed;
      top: 5%;
      right: 5%;
      z-index: 250;
    }

    &-arrows {
      position: fixed;
      top: 50%;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    &-content {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: 100%;

      &::before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9));
      }
    }
    &-image {
      position: relative;
      width: 80%;
      max-width: 900px;
    }
  }
  .gridbox {
    display: grid;
    grid-gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    // .slider-box {
    //   width: 50%;
    //   flex-shrink: 0;
    // }

    .preview {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      &-item {
        width: 30%;
        margin: 0 5px;
        cursor: pointer;
        background: #fff;

        &:hover {
          opacity: 0.8;
        }

        &-active {
          border: 1px solid var(--red);
        }
      }
    }
  }

  .slider-box-image {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    position: relative;
    cursor: zoom-in;

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
  }

  .info-box {
    &-breadcrumbs {
      text-transform: uppercase;
      margin-bottom: 10px;
      .crumb {
        font-weight: bold;
      }
    }
    &-description,
    &-name,
    &-price {
      margin-bottom: 20px;
    }

    &-name {
      color: var(--red);
      text-transform: uppercase;
    }

    &-option {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--green);
      color: var(--green);
      font-weight: bold;
      line-height: 1.2;
    }
  }

  .popular {
    margin-top: 36px;

    .heading {
      margin-top: 10px;
      font-weight: bold;
      color: var(--red);
    }
    &-grid {
      display: grid;
      grid-gap: 24px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
