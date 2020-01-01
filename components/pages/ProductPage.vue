<template>
  <section class="section-padding">
    <article class="section-padding">
      <div class="flexbox">
        <div class="slider-box">
          <app-image
            :img_src="product.img_set[active_img]"
            :img_alt="product.img_set[active_img]"
            :lazy="false"
            :ratio="69"
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
              <app-image :img_src="img" :img_alt="product.img_alt" :lazy="true" :ratio="50" />
            </div>
          </div>
        </div>

        <div class="info-box">
          <h2 class="info-box-name big-font bold">{{product.name}}</h2>
          <p class="info-box-price medium-font">
            Цена:
            <span class="bold">{{product.price}}</span>
          </p>
          <p
            class="info-box-description base-font"
            v-for="(paragraph, idx) in product.description"
            :key="idx"
          >{{ paragraph }}</p>
          <p class="info-box-category small-font">Категория: {{product.category}}</p>
          <p v-if="product.option" class="info-box-option">{{product.option.details}}</p>
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
  mounted() {
    console.log(this.products);
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
  .bold {
    font-weight: 600;
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
  }

  .info-box {
    margin-left: 32px;

    &-description,
    &-name,
    &-price {
      margin-bottom: 20px;
    }

    &-name {
      color: var(--red);
    }

    &-option {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid var(--green);
    }
  }
</style>
