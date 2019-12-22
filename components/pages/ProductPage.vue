<template>
  <section class="section-padding">
    {{$route.params.id}}
    <article class="section-padding">
      <div class="flexbox">
        <div class="slider-box">
          <app-image
            :img_src="product.img_set[active_img]"
            :img_alt="product.img_set[active_img]"
            :lazy="false"
            :ratio="80"
            class="slider-box-image"
          />
          <div class="preview">
            <div
              class="preview-item"
              :class="{'preview-item-active': active_img===idx}"
              v-for="(img, idx) in product.img_set"
              :key="idx"
              @click="setActiveImg(idx)"
            >
              <app-image :img_src="img" :img_alt="product.img_alt" :lazy="true" :ratio="100" />
            </div>
          </div>
        </div>

        <div class="info-box">
          <h2 class="info-box-name big-font">{{product.name}}</h2>
          <p class="info-box-price medium-font">{{product.price}}</p>
          <p class="info-box-description base-font">{{product.description}}</p>
          <p class="info-box-category small-font">Категория: {{product.category}}</p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import ImageBaseVue from "../common/ImageBase.vue";
export default {
  name: "Product.vue",
  components: {
    "app-image": ImageBaseVue
  },
  props: ["products"],
  methods: {
    setActiveImg(idx) {
      this.active_img = idx;
    }
  },
  data() {
    return {
      active_img: 0,
      product: this.products.find(el => el.id === this.$route.params.id)
    };
  }
};
</script>

<style lang="scss" scoped>
  section {
    background-color: #fff;
  }
  article {
    background-color: #f2f1ef;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  }
  .flexbox {
    display: flex;

    .slider-box {
      width: 50%;
      flex-shrink: 0;
    }

    .preview {
      display: flex;
      justify-content: center;
      margin-top: 20px;

      &-item {
        width: 30%;
        margin: 0 5px;
        cursor: pointer;

        &-active {
          border: 1px solid var(--red);
        }
      }
    }
  }

  .slider-box-image {
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  }

  .info-box {
    margin-left: 50px;

    &-name,
    &-price {
      font-weight: 600;
      margin-bottom: 20px;
    }
    &-description {
      margin-bottom: 20px;
    }
  }
</style>
