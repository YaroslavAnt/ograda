﻿<template>
  <div class="card">
    <!-- <img
      :data-src="icon_src"
      alt="icon"
      class="card-icon lazyload"
    /> -->
    <span class="card-icon">
      <svg>
        <use :xlink:href="sprite + '#' + icon_id"></use>
      </svg>
    </span>
    <h3 class="card-heading medium-font">{{ heading }}</h3>
    <p
      v-if="text"
      class="card-text small-font"
    >{{ text }}</p>
    <span
      v-if="link"
      class="card-link base-font"
    >Подробнее &rarr;</span>
  </div>
</template>

<script>
import IconBaseVue from "./IconBase.vue";
import sprite from "../../assets/icons/sprite.svg";

export default {
  name: "IconCard.vue",
  data() {
    return {
      sprite
    };
  },
  components: {
    "icon-base": IconBaseVue
  },
  props: ["icon_id", "heading", "text", "link"]
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;

  &-icon {
    flex-grow: 0;
    display: block;
    margin-right: 24px;
    width: 100%;
    color: #ff5b00;
    fill: currentColor;
    max-width: 70px;

    svg {
      max-height: 70px;
      max-width: 100%;
    }
  }

  &-heading {
    font-weight: 600;
  }

  &-text,
  &-link {
    margin-top: 24px;
  }
  &-link {
    display: inline-block;
    color: var(--red);
    cursor: pointer;
  }
}
</style>
