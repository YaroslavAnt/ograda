<template>
  <app-section
    :heading="content.heading"
    class="section"
  >
    <div
      :class="{'exposition-item': expo_idx !==0}"
      v-for="(exposition, expo_idx) in content.expositions"
      :key="expo_idx"
    >
      <div class="flexbox">
        <div class="slider-box">
          <app-image
            :img_src="exposition.img_set[active_imgs[expo_idx]]"
            :img_alt="exposition.name"
            :lazy="false"
            :ratio="80"
            class="slider-box-image"
          />
          <div
            class="preview"
            v-if="exposition.img_set.length > 1"
          >
            <div
              class="preview-item"
              :class="{'preview-item-active': active_imgs[expo_idx]===idx}"
              v-for="(img, idx) in exposition.img_set"
              :key="idx"
              @click="setActiveImg(expo_idx, idx)"
            >
              <app-image
                :img_src="img"
                :img_alt="exposition.name"
                :lazy="true"
                :ratio="100"
              />
            </div>
          </div>
        </div>

        <div class="info-box">
          <h2 class="info-box-name big-font">{{exposition.name}}</h2>
          <p class="info-box-place base-font">{{exposition.place}}</p>
        </div>
      </div>
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import ImageBase from "~/components/common/ImageBase.vue";

export default {
  name: "exposition.vue",
  components: {
    "app-section": sectionVue,
    "app-image": ImageBase
  },
  methods: {
    setActiveImg(expo_idx, idx) {
      let newArr = this.active_imgs.slice();
      newArr.splice(expo_idx, 1, idx);
      this.active_imgs = newArr;
    }
  },
  props: {
    content: {
      type: Object,
      default: {}
    }
  },

  data() {
    return {
      active_imgs: [0, 0, 0]
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
      margin-left: 50px;
    }

    &-name,
    &-place {
      font-weight: 600;
      margin-bottom: 20px;
    }
  }
</style>