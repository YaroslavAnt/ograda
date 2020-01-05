<template>
  <article class="card">
    <app-image :img_src="card.img_src" :img_alt="card.img_alt" :lazy="true" />
    <div class="card-text">
      <span class="card-label base-font">
        <icon-base>
          <icon-calendar />
        </icon-base>
        {{card.date}}
      </span>
      <p class="card-name base-font">{{card.name}}</p>
      <p class="card-price small-font">{{card.text}}</p>
    </div>
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconCalendarVue from "~/components/icons/IconCalendar.vue";

export default {
  name: "BlogCard",
  components: {
    "app-image": ImageBaseVue,
    "icon-base": IconBaseVue,
    "icon-calendar": IconCalendarVue
  },
  props: {
    card: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    position: relative;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.25);
    overflow: hidden;

    &-text {
      padding: 40px 16px 20px;
      background-color: #eee;
      position: relative;
    }

    &-label {
      display: flex;
      align-items: center;
      background-color: var(--red);
      color: #fff;
      position: absolute;
      left: 16px;
      top: 0;
      transform: translateY(-50%);
      padding: 10px;
      border-radius: 4px;
    }
  }
</style>