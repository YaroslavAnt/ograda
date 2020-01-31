<template>
  <div
    class="box"
    :class="{reversed: reversed}"
  >
    <div
      class="box-img"
      :class="{'with-border': withBorder}"
    >
      <app-image
        :img_src="img_src"
        :img_alt="img_alt"
        :lazy="true"
        :ratio="100"
      />
    </div>
    <div class="box-text">
      <h4
        v-if="heading"
        class="heading big-font"
      >{{heading}}</h4>
      <div class="intro-text base-font">
        <div
          v-for="(paragraph,idx) in paragraphs"
          :key="idx"
        >
          <p>{{ paragraph.text }}</p>
          <ul
            v-if="paragraph.list"
            class="small-font"
          >
            <li
              v-for="(item,idx) in paragraph.list"
              :key="idx"
            >{{ item }}</li>
          </ul>
        </div>
      </div>
      <slot />
      <div
        v-if="link"
        class="intro-btn"
      >
        <nuxt-link
          :to='link'
          class="app-button"
        >Подробнее</nuxt-link>
        <!-- <app-button :text="'Подробнее'" @click="this.$router.push(link)"></app-button> -->
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./Button.vue";
import ImageBaseVue from "./ImageBase.vue";
export default {
  name: "Intro.vue",
  props: {
    img_src: {
      type: String,
      default: "img-src"
    },
    img_alt: {
      type: String,
      default: "img-alt"
    },
    heading: {
      type: String
    },
    paragraphs: {
      type: Array,
      default: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, repudiandae."
      ]
    },
    link: {
      type: String
    },
    reversed: {
      type: Boolean,
      default: false
    },
    withBorder: {
      type: Boolean,
      default: false
    }
  },
  components: {
    "app-button": ButtonVue,
    "app-image": ImageBaseVue
  }
};
</script>

<style lang="scss" scoped>
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 36px;

    @media (min-width: 768px) {
      flex-direction: row;
    }

    &.reversed {
      @media (min-width: 768px) {
        flex-direction: row-reverse;
      }

      .box-text {
        @media (min-width: 768px) {
          padding-left: 0px;
          padding-right: 24px;
        }
      }
    }
  }

  .box-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    flex-shrink: 0;
    flex-grow: 0;

    @media (min-width: 768px) {
      width: 50%;
    }

    &.with-border {
      border: 4px solid #fff;
    }
  }

  .box-text {
    @media (min-width: 768px) {
      padding-left: 24px;
    }

    .heading {
      color: var(--red);
    }

    .intro-text,
    .intro-btn {
      margin-top: 30px;
    }

    .intro-text {
      p {
        margin-top: 10px;
      }
    }
  }
</style>