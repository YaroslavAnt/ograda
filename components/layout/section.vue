﻿<template>
  <section class="section section-padding" :class="{ dark: darkTheme }">
    <h2 v-if="heading" class="section-heading with-skewed-bg">{{ heading }}</h2>
    <br />
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  overflow: hidden;
  &.dark {
    background-color: var(--dark);
    color: var(--white);
  }
  &-heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
      margin-bottom: 40px;
    }
  }
}
</style>

<script>
export default {
  name: "section.vue",
  props: ["heading", "darkTheme"]
};
</script>
