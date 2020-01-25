<template>
  <article class="card">
    <app-image
      :img_src="BASE_URL+ card.image"
      :img_alt="card.img_alt"
      :lazy="true"
    />
    <div class="card-text">
      <span class="card-label base-font">
        <icon-base>
          <icon-calendar />
        </icon-base>
        {{date}}
      </span>
      <p
        class="card-name"
        :class="{'base-font': !isWhole, 'medium-font': isWhole}"
      >{{card.title}}</p>
      <p
        v-if="!isWhole"
        class="card-price small-font"
      >{{card.short_body}}</p>
      <p
        v-if="isWhole"
        class="card-price base-font"
      >{{card.body}}</p>
    </div>
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconCalendarVue from "~/components/icons/IconCalendar.vue";
import { BASE_URL } from "../../config";

export default {
  name: "BlogCard",
  components: {
    "app-image": ImageBaseVue,
    "icon-base": IconBaseVue,
    "icon-calendar": IconCalendarVue
  },
  computed: {
    date() {
      return this.card.created_at
        .split(" ")[0]
        .split("-")
        .reverse()
        .join(".");
    }
  },
  props: {
    card: {
      type: Object,
      default: {}
    },
    isWhole: {
      type: Boolean
    }
  },
  data() {
    return {
      BASE_URL
    };
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
      height: 100%;
    }

    &-name {
      margin-bottom: 24px;
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