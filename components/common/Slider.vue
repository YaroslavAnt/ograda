<template>
  <div class="slider">
    <div
      v-for="(slide, idx) in slider_items"
      :key="idx"
      class="slider-item"
      :class="{'active-slide': current_slide===idx}"
    >
      <div class="slider-filterbox" :class="{'with-filter': withFilter}">
        <app-image :img_src="slide.img_src" :img_alt="slide.img_alt" :lazy="true" :ratio="56.25" />
      </div>

      <div class="slider-content section-padding">
        <h3 v-if="slide.heading" class="slider-heading huge-font">{{ slide.heading }}</h3>
        <p v-if="slide.text" class="slider-text base-font">{{ slide.text }}</p>
        <app-button
          v-if="slide.path"
          class="slider-btn"
          :text="'Подробнее'"
          @click.native="$router.push(slide.path)"
        ></app-button>
      </div>

      <div class="arrows section-padding">
        <div class="arrow arrow-left" @click="backvard()">
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

        <div class="arrow arrow-right" @click="forvard()">
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

export default {
  name: "Slider.vue",
  components: {
    "app-button": ButtonVue,
    "app-arrow": ArrowVue,
    "app-image": ImageBaseVue
  },
  methods: {
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
      this.intervalid1 = setInterval(this.forvard, 8000);
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
      intervalid1: null
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
      width: 66%;
      position: absolute;
    }
    &-btn,
    &-text {
      margin-top: 20px;
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
