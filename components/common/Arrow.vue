<template>
  <!-- <span :style="{'border-color': color, 'width':size, 'height':size}"></span> -->
  <span
    :style="{'border-color': color,'border-width': borderWidth, 'width':size, 'height':size, 'margin': `0 ${size}`}"
    :class="`${direction}`"
  ></span>
</template>

<style lang="scss" scoped>
  span {
    display: inline-block;
    border-bottom: 3px solid;
    border-right: 3px solid;
    transform: rotate(45deg);

    &.left {
      transform: rotate(135deg);
    }

    &.right {
      transform: rotate(-45deg);
    }

    &.up {
      transform: rotate(-135deg);
    }
  }
</style>

<script>
export default {
  name: "Arrow.vue",
  props: ["color", "size", "borderWidth", "direction"]
};
</script>