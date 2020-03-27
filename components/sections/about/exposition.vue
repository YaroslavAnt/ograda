<template>
  <app-section class="section">

    <div class="flexbox">
      <div class="slider-box">
        <app-image
          :img_src="BASE_URL + expo.img_set[active_img]"
          :img_alt="expo.name"
          :lazy="false"
          :ratio="80"
          class="slider-box-image"
        />

        <div
          class="preview"
          v-if="expo.img_set.length > 1"
        >
          <div
            class="preview-item"
            :class="{'preview-item-active': active_img===idx}"
            v-for="(img, idx) in expo.img_set"
            :key="idx"
            @click="setActiveImg(idx)"
          >
            <app-image
              :img_src="BASE_URL + (img||'')"
              :img_alt="expo.name"
              :lazy="true"
              :ratio="100"
            />
          </div>
        </div>
      </div>

      <div class="info-box">
        <h2 class="info-box-name big-font">{{expo.name}}</h2>
        <p class="info-box-place base-font">{{expo.description}}</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ImageBase from "~/components/common/ImageBase.vue";
import { BASE_URL } from "../../../config";

export default {
  name: "exposition.vue",
  components: {
    "app-section": sectionVue,
    "app-image": ImageBase
  },
  methods: {
    setActiveImg(idx) {
      this.active_img = idx;
    }
  },
  props: {
    expo: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      active_img: 0,
      BASE_URL
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;
  }
  .exposition-item {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #aaa;
  }
  .flexbox {
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      flex-wrap: nowrap;
    }

    .slider-box {
      flex-shrink: 0;
      flex-grow: 0;
      width: 100%;
      margin-bottom: 24px;

      @media (min-width: 768px) {
        width: 50%;
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
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    border: 4px solid #ddd;
  }

  .info-box {
    @media (min-width: 768px) {
      margin-left: 24px;
    }

    &-name,
    &-place {
      margin-bottom: 20px;
    }

    &-name {
      font-weight: 600;
      color: var(--red);
    }
  }
</style>