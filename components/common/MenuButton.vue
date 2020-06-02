<template>
  <div
    id="menu-button"
    class="menu-button"
    :class="{'menu-is-open': isMenuOpen}"
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  name: "MenuButton.vue",
  // props: ["color", "isMenuOpen"],
  props: {
    isMenuOpen: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-button {
  width: 30px;
  height: 26px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #fff;
    transition-duration: 0.2s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(3) {
      bottom: 0;
    }
  }
}
.menu-is-open {
  span {
    &:nth-child(1) {
      top: unset;
      transform: rotate(-45deg);
    }

    &:nth-child(2) {
      display: none;
    }

    &:nth-child(3) {
      bottom: unset;
      transform: rotate(45deg);
    }
  }
}
</style>
