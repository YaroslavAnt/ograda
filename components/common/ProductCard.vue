<template>
  <article class="card">
    <app-image :img_src="product.img_src" :img_alt="product.img_alt" :lazy="false" />

    <p
      class="card-name base-font"
      @click="onClickProduct(product.category, product.id)"
    >{{product.name}}</p>

    <div class="card-text">
      <span v-if="product.label" class="card-label small-font">{{product.label}}</span>
      <p class="card-price small-font">Цена: {{product.price}}</p>
    </div>
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
export default {
  name: "ProductCard.vue",
  props: ["product"],
  methods: {
    onClickProduct(category, id) {
      console.log({ category });
      const categories = {
        забор: "fence"
      };
      this.$router.push(`/products/${categories[category]}/${id}`);
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
</style>

