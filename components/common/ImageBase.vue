<template>
  <div class="picture" :style="{'padding-bottom': `${ratio}%`}">
    <img
      v-if="lazy"
      :data-src="img_src"
      :alt="img_alt"
      class="picture-img"
      :class="{lazyload:lazy, square:ratio>70}"
    />
    <img v-if="!lazy" :src="img_src" :alt="img_alt" class="picture-img" :class="{square:ratio>70}" />
  </div>
</template>

<style lang="scss" scoped>
  .picture {
    width: 100%;
    overflow: hidden;
    padding-bottom: 67%;
    position: relative;

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
</style>

<script>
export default {
  name: "ImageBase.vue",
  props: {
    img_src: {
      type: String,
      default: "img_src"
    },
    img_alt: {
      type: String,
      default: "image"
    },
    lazy: {
      type: Boolean,
      default: true
    },
    ratio: {
      type: Number,
      default: 67
    }
  }
};
</script>