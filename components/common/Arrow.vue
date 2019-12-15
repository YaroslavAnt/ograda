<template>
  <span :style="{'border-color': color, 'width':size, 'height':size}"></span>
</template>

<style lang="scss" scoped>
span {
  display: block;
  border-bottom: 3px solid;
  border-right: 3px solid;
  transform: rotate(45deg);
}
</style>

<script>
export default {
  name: "Arrow.vue",
  props: ["color", "size"]
};
</script>