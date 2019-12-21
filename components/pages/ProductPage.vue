<template>
  <section class="section-padding">
    <article class="section-padding">
      <div class="flexbox">
        <div class="slider-box">
          <app-image
            :img_src="product.images[active_img].img_src"
            :img_alt="product.images[active_img].img_src"
            :lazy="false"
            :ratio="80"
            class="slider-box-image"
          />
          <div class="preview">
            <div
              class="preview-item"
              :class="{'preview-item-active': active_img===idx}"
              v-for="(img, idx) in product.images"
              :key="idx"
              @click="setActiveImg(idx)"
            >
              <app-image :img_src="img.img_src" :img_alt="img.img_src" :lazy="true" :ratio="100" />
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
import SliderVue from "../common/Slider";
import but_loza_1 from "~/assets/img/fence/but_loza/but_loza_1.jpg";
import but_loza_2 from "~/assets/img/fence/but_loza/but_loza_2.jpg";
import but_loza_3 from "~/assets/img/fence/but_loza/but_loza_3.jpg";
import ImageBaseVue from "../common/ImageBase.vue";
export default {
  name: "Product.vue",
  components: {
    "app-slider": SliderVue,
    "app-image": ImageBaseVue
  },
  methods: {
    setActiveImg(idx) {
      this.active_img = idx;
    }
  },
  data() {
    return {
      active_img: 0,
      product: {
        name: 'Плита "Бут-Лоза"',
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis laboriosam rem.",
        price: "160грн",
        category: "Бетонный забор",
        images: [
          { img_src: but_loza_1 },
          { img_src: but_loza_2 },
          { img_src: but_loza_3 }
        ]
      }
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
        width: 15%;
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
