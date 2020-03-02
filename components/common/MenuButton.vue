<template>
  <div
    id="menu-button"
    :class="{'menu-is-open': isMenuOpen}"
    :style="{width: width+'px', height: boxHeight+'px'}"
  >
    <span :style="{background: color, height: stickHeight+'px', width: width+'px'}"></span>
    <span :style="{background: color, height: stickHeight+'px', width: width+'px'}"></span>
    <span :style="{background: color, height: stickHeight+'px', width: width+'px'}"></span>
  </div>
</template>

<script>
export default {
  name: "MenuButton.vue",
  // props: ["color", "isMenuOpen"],
  props: {
    color: {
      type: String,
      default: "#fff"
    },
    isMenuOpen: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 30
    }
  },
  computed: {
    boxHeight() {
      return this.width - 0.2 * this.width;
    },
    stickHeight() {
      return this.width / 10;
    }
  }
};
</script>

<style lang="scss" scoped>
  div {
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
      background-color: #1a294a;
      transition-duration: 0.2s;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(3) {
        bottom: 0;
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
  }
</style>
