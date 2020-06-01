<template>
  <div class="card">
    <img
      :data-src="icon_src"
      alt="icon"
      class="card-icon lazyload"
    />
    <h3 class="card-heading medium-font">{{heading}}</h3>
    <p
      v-if="text"
      class="card-text small-font"
    >{{text}}</p>
    <span
      v-if="link"
      class="card-link base-font"
    >Подробнее &rarr;</span>
  </div>
</template>

<script>
import IconBaseVue from "./IconBase.vue";

export default {
  name: "IconCard.vue",
  components: {
    "icon-base": IconBaseVue
  },
  props: ["icon_src", "heading", "text", "link"]
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: center;
  &-icon {
    max-width: 70px;
    flex-grow: 0;
    display: block;
    margin-right: 24px;
    width: 20%;
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