<template>
  <div
    class="box"
    :class="{reversed: reversed}"
  >

    <div class="slider-box">
      <div
        class="slider-imagebox"
        :style="{'padding-bottom': ratio}"
      >
        <img
          :src="img_set[active_img]"
          :alt="img_alt"
          class="slider-image"
        />
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
        v-if="img_set.length>1"
      >
        <div
          class="preview-item"
          :class="{'preview-item-active': active_img===idx}"
          v-for="(img, idx) in img_set"
          :key="idx"
          @click="setActiveImg(idx)"
        >
          <app-image
            :img_src="img"
            :img_alt="img_alt"
            :lazy="true"
            :ratio="60"
          />
        </div>
      </div>
    </div>

    <div class="box-text">
      <h4
        v-if="heading"
        class="heading big-font"
      >{{heading}}</h4>
      <div class="intro-text base-font">
        <div
          v-for="(paragraph,idx) in paragraphs"
          :key="idx"
        >
          <p>{{ paragraph.text }}</p>
          <ul
            v-if="paragraph.list"
            class="small-font"
          >
            <li
              v-for="(item,idx) in paragraph.list"
              :key="idx"
            >{{ item }}</li>
          </ul>
        </div>
      </div>
      <slot />
      <div
        v-if="link"
        class="intro-btn"
      >
        <nuxt-link
          :to='link'
          class="app-button"
        >Подробнее</nuxt-link>
        <!-- <app-button :text="'Подробнее'" @click="this.$router.push(link)"></app-button> -->
      </div>
    </div>

    <div
      class="zoom"
      v-if="isZoomActive"
    >
      <div class="zoom-content">

        <span
          class="zoom-close"
          @click="isZoomActive=false"
        >&#10006;</span>
        <img
          class="zoom-image"
          :src="img_set[active_img]"
          :alt="img_alt"
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
  </div>
</template>

<script>
import ButtonVue from "./Button.vue";
import ImageBaseVue from "./ImageBase.vue";
import IconBaseVue from "./IconBase.vue";
import IconZoomVue from "../icons/IconZoom.vue";
import ArrowVue from "./Arrow.vue";
export default {
  name: "Intro.vue",

  data() {
    return {
      active_img: 0,
      isZoomActive: false
    };
  },
  methods: {
    setActiveImg(idx) {
      this.active_img = idx;
    },
    prevImg() {
      const newIdx =
        this.active_img <= 0 ? this.img_set.length - 1 : this.active_img - 1;
      this.active_img = newIdx;
    },
    nextImg() {
      const newIdx =
        this.active_img >= this.img_set.length - 1 ? 0 : this.active_img + 1;
      this.active_img = newIdx;
    }
  },
  props: {
    img_set: {
      type: Array,
      default: []
    },
    // active_img: {
    //   type: Number,
    //   default: 0
    // },
    img_alt: {
      type: String,
      default: "img-alt"
    },
    ratio: {
      type: String,
      default: "67%"
    },
    heading: {
      type: String
    },
    paragraphs: {
      type: Array,
      default: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae."
      ]
    },
    link: {
      type: String
    },
    reversed: {
      type: Boolean,
      default: false
    },
    withBorder: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "app-button": ButtonVue,
    "app-image": ImageBaseVue,
    "base-icon": IconBaseVue,
    "zoom-icon": IconZoomVue,
    "app-arrow": ArrowVue
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  &.reversed {
    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }

    .box-text {
      @media (min-width: 768px) {
        padding-left: 0px;
      }
    }
  }

  .slider-box {
    width: 100%;
    @media (min-width: 768px) {
      width: 42%;
    }
  }

  .box-text {
    @media (min-width: 768px) {
      width: 55%;
    }
    .heading {
      color: var(--red);
    }

    .intro-text {
      p {
        margin-top: 10px;
      }
    }
  }
}

.slider-imagebox {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.85);
  position: relative;
  overflow: hidden;

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
    cursor: pointer;
    font-size: 30px;
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
</style>