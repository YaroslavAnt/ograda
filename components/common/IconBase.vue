﻿<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 36 36"
    role="presentation"
  >
    <!-- <title
      :id="iconName"
      lang="en"
    >{{iconName}} icon</title> -->
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconBase.vue",
  props: {
    iconName: {
      type: String,
      default: "box"
    },
    width: {
      type: [Number, String],
      default: 36
    },
    height: {
      type: [Number, String],
      default: 36
    },
    iconColor: {
      type: String,
      default: "currentColor"
    }
  }
};
</script>

<style scoped>
  svg {
    display: inline-block;
    vertical-align: baseline;
    margin-bottom: -2px; /* yes, I'm that particular about formatting */
  }
</style>