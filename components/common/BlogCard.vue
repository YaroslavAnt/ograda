<template>
  <article class="card">
    <app-image
      :img_src="
        `https://cdn.statically.io/img/${CDN_URL +
          (card.image || '')}?w=600&f=auto `
      "
      :img_alt="card.title"
    />

    <div class="card-text">
      <span class="card-label base-font">
        <icon-base>
          <icon-calendar />
        </icon-base>

        <time :datetime="dateTime">{{ date }}</time>
      </span>

      <h4
        class="card-name"
        :class="{ 'base-font': !isWhole, 'medium-font': isWhole }"
      >
        <nuxt-link :to="`/blog/${card.id}`">
          {{ card.title }}
        </nuxt-link>
      </h4>

      <span
        class="small-font red card-link"
        @click="$router.push(`/blog/${card.id}`)"
        >&rarr; Подробнее...</span
      >
      <!-- <p
        v-if="!isWhole"
        class="card-price small-font"
      >{{card.short_body}}</p>
      <p
        v-if="isWhole"
        class="card-price base-font"
      >{{card.body}}</p> -->
    </div>
  </article>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import IconCalendarVue from "~/components/icons/IconCalendar.vue";
import { BASE_URL, CDN_URL } from "../../config";
import sprite from "../../assets/icons/sprite.svg";

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
    },
    dateTime() {
      const [dashedDate] = this.card.created_at.split(" ");
      return dashedDate;
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
      BASE_URL,
      CDN_URL,
      sprite
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
  transition-duration: 0.3s;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.5);
    transform: translateY(-4px);
  }

  &-text {
    padding: 40px 16px 20px;
    background-color: #eee;
    position: relative;
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  &-name {
    flex: 1;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      color: var(--red);
    }
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

  &-icon {
    flex-grow: 0;
    margin-right: 24px;
    width: 36px;
    height: 36px;
    color: #fff;
    fill: currentColor;

    // svg {
    //   max-height: 70px;
    //   max-width: 100%;
    // }
  }

  &-link {
    cursor: pointer;
    margin-top: 12px;
    display: block;
    font-weight: bold;
  }
}
</style>
