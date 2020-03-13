<template>
  <div class="slider">
    <div
      v-for="(slide, idx) in slider_items"
      :key="idx"
      class="slider-item"
      :class="{'active-slide': current_slide===idx}"
    >
      <div
        class="slider-filterbox"
        :class="{'with-filter': withFilter}"
      >

        <div class="picture">
          <img
            :src="BASE_URL+ slide.image"
            :alt="slide.img_alt"
            class="picture-img"
          />
        </div>

      </div>

      <div class="slider-content section-padding">

        <nuxt-link
          v-if="slide.short_body && slide.short_body !== 'null' && slide.title"
          :to='slide.short_body'
        >
          <h2
            v-if="slide.title"
            class="slider-heading app-button huge-font slider-btn "
          >{{ String((slide.title) ).toUpperCase() }}</h2>
        </nuxt-link>

        <h2
          v-else
          class="slider-heading app-button huge-font slider-btn "
        >{{ String((slide.title) ).toUpperCase() }}</h2>

        <p
          v-if="slide.body"
          class="slider-text medium-font"
        >{{ slide.body }}</p>
      </div>

      <div class="arrows">
        <div
          class="arrow arrow-left"
          @click="backvard()"
        >
          <app-arrow :size="'12px'" />
        </div>

        <div class="indicator">
          <div
            class="button"
            v-for="(item,idx) in slider_items"
            :key="idx"
            :class="{active:current_slide === idx}"
            @click="setActive(idx)"
          ></div>
        </div>

        <div
          class="arrow arrow-right"
          @click="forvard()"
        >
          <app-arrow :size="'12px'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./Button.vue";
import ArrowVue from "./Arrow.vue";
import ImageBaseVue from "./ImageBase.vue";
import { BASE_URL } from "~/config";
import { replaceWithDash, getCyrylic } from "../../static/utils";

export default {
  name: "Slider.vue",
  components: {
    "app-button": ButtonVue,
    "app-arrow": ArrowVue,
    "app-image": ImageBaseVue
  },
  methods: {
    replaceWithDash,
    getCyrylic,
    forvard() {
      this.current_slide =
        this.current_slide < this.slider_items.length - 1
          ? this.current_slide + 1
          : 0;
    },
    backvard() {
      this.current_slide =
        this.current_slide > 0
          ? this.current_slide - 1
          : this.slider_items.length - 1;
    },
    setActive(idx) {
      this.current_slide = idx;
    },
    start() {
      this.intervalid1 = setInterval(this.forvard, 3000);
    },
    stop() {
      clearInterval(this.intervalid1);
    }
  },
  mounted() {
    if (this.withAutoPlay) {
      this.start();
    }
  },
  beforeUpdate() {
    this.stop();
  },
  updated() {
    if (this.withAutoPlay) {
      this.start();
    }
  },
  beforeDestroy() {
    this.stop();
  },
  data() {
    return {
      current_slide: 0,
      intervalid1: null,
      BASE_URL
    };
  },
  props: ["slider_items", "height", "withPreview", "withAutoPlay", "withFilter"]
};
</script>

<style lang="scss" scoped>
  .slider {
    overflow: hidden;
    position: relative;
    color: var(--white);
    height: 100%;

    &-item {
      opacity: 0;
      height: 100%;
      position: absolute;
      width: 100%;
      display: flex;
      align-items: center;
      transition-duration: 1s;
      z-index: -1;
      top: 0;
      left: 0;

      &.active-slide {
        opacity: 1;
        z-index: 1;
        position: relative;
      }
    }
    &-filterbox {
      width: 100%;
      height: 100%;
    }
    &-content {
      max-width: 100vw;
      position: absolute;
      padding-bottom: 70px;
      @media (min-width: 7680px) {
        max-width: 700px;
      }
    }
    &-btn {
      margin-bottom: 15px;
      max-width: 67%;

      @media (min-width: 768px) {
        font-size: 36px;
        max-width: unset;
      }
      @media (min-width: 1024px) {
        font-size: 48px;
      }
    }
    &-text {
      text-shadow: 1px 1px 2px #333, 0 0 1em #333, 0 0 0.2em #333;
      white-space: pre-wrap;
    }

    .picture {
      width: 100%;
      overflow: hidden;
      padding-bottom: 67%;
      position: relative;

      @media (min-width: 768px) {
        padding-bottom: 45%;
      }

      &-img {
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
    }

    .arrows {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--dark);
      max-width: 100vw;
      padding: 16px;

      @media (min-width: 400px) {
        padding: 30px 16px;
      }
      @media (min-width: 1200px) {
        padding: 30px 32px;
      }

      .arrow {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        opacity: 0.7;
        cursor: pointer;

        &-left {
          transform: rotate(90deg);
        }
        &-right {
          transform: rotate(-90deg);
        }

        &:hover {
          opacity: 1;
        }
      }
    }

    .indicator {
      display: flex;
      justify-content: space-between;

      .button {
        width: 20px;
        height: 20px;
        margin: 0 5px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.5;
        cursor: pointer;

        &.active {
          opacity: 1;
        }
      }
    }

    .preview {
      display: flex;
      justify-content: space-between;

      &-item {
        &-active {
          border: 1px solid var(--red);
        }
      }
    }

    .with-filter {
      &::after {
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
        position: absolute;
        content: "";
        display: block;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
