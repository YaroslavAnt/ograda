<template>
  <div class="card">
    <img :src="icon_src" alt="icon" class="card-icon" />
    <h5 class="heading medium-font">{{heading}}</h5>
    <p class="card-text base-font">{{text}}</p>
    <span class="card-link">Подробнее &rarr;</span>
  </div>
</template>

<script>
import IconBaseVue from "./IconBase.vue";

export default {
  name: "IconCard.vue",
  components: {
    "icon-base": IconBaseVue
  },
  props: ["icon_src", "heading", "text"]
};
</script>

<style lang="scss" scoped>
.card {
  &-icon {
    width: 100px;
    display: block;
    margin: 0 auto;
  }
  &-text,
  &-link {
    margin-top: 24px;
  }
  &-link {
    display: inline-block;
    color: var(--sand);
    cursor: pointer;
  }
}
</style>