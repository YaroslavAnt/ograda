<template>
  <section>
    <article class="section-padding">

      <div class="gridbox">
        <div class="slider-box">
          <div class="slider-imagebox">
            <img
              :src="product.img_set[active_img]&&baseUrl+product.img_set[active_img]"
              :alt="product.img_alt"
              class="slider-image"
            />

            <span
              v-if="product.option.label"
              class="slider-imagebox-label small-font"
            >{{product.option.label}}</span>

            <div class="img-arrows">
              <!-- <app-arrow
                color="#fff"
                :size="'20px'"
                :direction="'left'"
                @click.native="prevImg"
              ></app-arrow>
              <app-arrow
                color="#fff"
                :size="'20px'"
                :direction="'right'"
                @click.native="nextImg"
              ></app-arrow> -->
              <span
                @click="prevImg"
                class="img-arrow"
              >&#10094;</span>
              <span
                @click="nextImg"
                class="img-arrow"
              >&#10095;</span>
            </div>

            <div
              @click="isZoomActive=true"
              class="icon-box"
            >
              <base-icon color='#fff'>
                <zoom-icon></zoom-icon>
              </base-icon>
            </div>
          </div>

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
                :ratio="60"
              />
            </div>
          </div>
        </div>

        <div class="info-box">
          <ul
            class="info-box-breadcrumbs"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
              class="crumb"
            >
              <nuxt-link
                itemprop="item"
                to='/'
                title="Главная страница"
              >&#8962; ГЛАВНАЯ ></nuxt-link>
              <meta
                itemprop="name"
                content="ГЛАВНАЯ"
              />
              <meta
                itemprop="position"
                content="1"
              />
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
              class="crumb"
            >
              <nuxt-link
                itemprop="item"
                title="Смотреть все категории товаров"
                :to='{path:`/products`}'
              >КАТЕГОРИИ ></nuxt-link>
              <meta
                itemprop="name"
                content="КАТЕГОРИИ"
              />
              <meta
                itemprop="position"
                content="2"
              />
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              itemtype="https://schema.org/ListItem"
              class="crumb"
            >
              <nuxt-link
                itemprop="item"
                title="Смотреть категорию товара"
                :to='{path:`/products/${replaceWithDash(product.category.name)}`}'
              >{{product.category.name}} ></nuxt-link>
              <meta
                itemprop="name"
                :content="product.category.name"
              />
              <meta
                itemprop="position"
                content="3"
              />
            </li>
            <li
              itemprop="itemListElement"
              itemscope
              class="crumb"
              itemtype="https://schema.org/ListItem"
            >
              <nuxt-link
                itemprop="item"
                title="Смотреть подкатегорию товара"
                :to='{path:`/products/${replaceWithDash(product.category.name) }?subcategory=${replaceWithDash(product.subcategory.name) }`}'
              >
                {{product.subcategory.name}} </nuxt-link>
              <meta
                itemprop="name"
                :content="product.subcategory.name"
              />
              <meta
                itemprop="position"
                content="4"
              />
            </li>
          </ul>

          <h1 class="info-box-name big-font bold">{{product.name}}</h1>

          <p class="info-box-price medium-font">
            Цена:
            <span class="bold">&#8372;</span>
            <span class="bold">{{product.price}}</span>
          </p>
          <p
            class="info-box-description base-font"
            v-for="(paragraph, idx) in getArrayFromDescription"
            :key="idx"
          >{{ paragraph }}</p>
          <p class="info-box-category small-font">Категория: <span>{{product.category.name}}</span> </p>
          <p
            v-if="product.option"
            itemscope
            itemtype="http://schema.org/Action"
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

        <span
          @click="isZoomActive=false"
          class="zoom-close"
        >&#10006;</span>
        <img
          class="zoom-image"
          :src="product.img_set[active_img]&&baseUrl+product.img_set[active_img]"
          :alt="product.img_alt"
        >
        <div class="zoom-arrows">
          <span @click="prevImg">&#10094;</span>
          <span @click="nextImg">&#10095;</span>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script>
import ImageBaseVue from "../common/ImageBase.vue";
import { getProduct } from "../../api/products";
import { BASE_URL } from "../../config";
import { replaceWithDash } from "../../static/utils";
import ProductCardVue from "../common/ProductCard.vue";
import IconBaseVue from "../common/IconBase.vue";
import IconZoomVue from "../icons/IconZoom.vue";

export default {
  name: "Product.vue",
  components: {
    "app-image": ImageBaseVue,
    "product-card": ProductCardVue,
    "base-icon": IconBaseVue,
    "zoom-icon": IconZoomVue
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
    },
    getPrice(priceStr) {
      const [price] = priceStr.match(/\d+/g) || ["0"];
      return price;
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
    color: #fff;
    font-size: 30px;
    cursor: pointer;
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
      position: relative;

      &:hover {
        opacity: 0.8;
      }

      &-active {
        // border: 1px solid var(--red);

        &::after {
          position: absolute;
          content: "";
          display: block;
          width: 100%;
          height: 4px;
          bottom: -10px;
          background-color: var(--red);
        }
      }
    }
  }
}

.slider-imagebox {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  position: relative;
  overflow: hidden;
  padding-bottom: 70%;

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
  .img-arrows {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3%;
  }
  .img-arrow {
    display: block;
    line-height: 50px;
    width: 50px;
    background: linear-gradient(rgba(0, 0, 0, 0.5));
    text-align: center;
    border-radius: 50%;
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }
  .icon-box {
    display: none;
    @media (min-width: 768px) {
      display: block;
      position: absolute;
      padding: 10px;
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      right: 10px;
      bottom: 10px;
      cursor: pointer;
    }
  }
}

.slider-image {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);

  &.square {
    top: 0;
    left: 50%;
    width: unset;
    height: 100%;
    transform: translateX(-50%);
  }
}

.info-box {
  &-breadcrumbs {
    text-transform: uppercase;
    margin-bottom: 10px;
    .crumb {
      font-weight: bold;
      font-size: 16px;
      line-height: 1.5;
      display: inline-block;
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

  &-description {
    white-space: pre-wrap;
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
  margin-top: 72px;

  .heading {
    margin: 10px 0;
    font-weight: bold;
    color: var(--red);
    text-align: center;
  }
  &-grid {
    display: grid;
    grid-gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
