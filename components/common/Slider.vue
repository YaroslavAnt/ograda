<template>
  <div class="slider">
    <div
      v-for="(slide, idx) in slider_items"
      :key="idx"
      class="slider-item section-padding"
      :class="{'active-slide': current_slide===idx}"
      :style="{ 'background': `100% linear-gradient(
          rgba(0, 0, 0, 0.3), 
          rgba(0, 0, 0, 0.3)
        ),url(${slide.img})`, 'height': `${height}`}"
    >
      <div class="slider-content">
        <h3 v-if="slide.heading" class="slider-heading huge-font">{{ slide.heading }}</h3>
        <p v-if="slide.text" class="slider-text base-font">{{ slide.text }}</p>
        <app-button
          v-if="slide.link"
          class="slider-btn"
          :text="'Подробнее'"
          @click.native="$router.push(slide.link)"
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

export default {
  name: "Slider.vue",
  components: {
    "app-button": ButtonVue,
    "app-arrow": ArrowVue
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
    this.start();
  },
  beforeUpdate() {
    this.stop();
  },
  updated() {
    this.start();
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
  props: ["slider_items", "height"]
};
</script>

<style lang="scss" scoped>
  .slider {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
    color: var(--white);

    &-item {
      opacity: 0;
      height: calc(100vh - 105px);
      max-height: 800px;
      position: absolute;
      width: 100%;
      display: flex;
      align-items: center;
      transition-duration: 1s;
      z-index: -1;

      &.active-slide {
        opacity: 1;
        z-index: 1;
        position: relative;
      }
    }

    &-content {
      width: 66%;
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
      /* position: absolute;
                  bottom: 0;
                  left: 50%;
                  transform: translate(-50%, -100%); */
      width: 100px;
      display: flex;
      justify-content: space-between;

      .button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.5;
        cursor: pointer;

        &.active {
          opacity: 1;
        }
      }
    }
  }
</style>
