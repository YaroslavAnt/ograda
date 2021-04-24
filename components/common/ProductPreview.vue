<template>
  <article class="card">
    <div
      class="card-img-box"
      @click="
        $router.push(
          `/${replaceWithDash(product.category.name)}/${replaceWithDash(
            product.name
          )}`
        )
      "
    >
      <img
        class="card-image"
        :src="getImageUrl(product)"
        :alt="product.img_alt"
        :loading="loading"
      />
      <span :content="getImageUrl(product)"></span>
    </div>

    <span v-if="product.option.label" class="card-label small-font">{{
      product.option.label
    }}</span>

    <div class="card-text">
      <nuxt-link
        :to="`/${replaceWithDash(product.category.name)}/${replaceWithDash(
          product.name
        )}`"
        class="card-name base-font"
        :title="product.name"
      >
        <span>{{ product.name }}</span>
      </nuxt-link>
      <p class="card-price medium-font">
        <span>&#8372; </span>
        <span>{{ product.price }}</span>
      </p>
    </div>
  </article>
</template>

<script>
import { BASE_URL, CDN_URL } from "~/config";
import { replaceWithDash } from "../../static/utils";
export default {
  data() {
    return {
      BASE_URL,
      CDN_URL,
    };
  },

  name: "ProductCard.vue",
  props: {
    product: {
      type: Object,
      default: {
        price: "",
        category: {
          name: "",
        },
        subcategory: {
          name: "",
        },
      },
    },
    withLazyLoad: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getImageUrl(product) {
      return product.img_set.length > 0
        ? `https://cdn.statically.io/img/${
            this.CDN_URL + product.img_set[0]
          }?w=500&f=auto`
        : "";
      // ? this.BASE_URL + product.img_set[0]
    },
    replaceWithDash,
    getPrice(priceStr) {
      const [price] = priceStr.match(/\d+/g);
      return price;
    },
  },
  computed: {
    loading() {
      return this.withLazyLoad ? "lazy" : "eager";
    },
  },
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
  transition-duration: 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 10px 18px rgba(91, 124, 196, 0.85);
  }

  &-img-box {
    width: 100%;
    overflow: hidden;
    padding-bottom: 67%;
    position: relative;
    cursor: pointer;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
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
    text-transform: uppercase;
    cursor: pointer;
    font-weight: bold;
    color: var(--red);
  }
  &-price {
    font-weight: bold;
  }
}
</style>
