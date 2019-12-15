<template>
  <div class="box" :class="{reversed: reversed}">
    <div class="box-img" :style="{'background-image': `url(${img_src})`}"></div>
    <div class="box-text">
      <h4 class="heading medium-font">{{heading}}</h4>
      <p class="intro-text base-font">{{intro_txt}}</p>
      <div class="intro-btn">
        <app-button :text="'Подробнее'"></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonVue from "./Button.vue";
export default {
  name: "Intro.vue",
  props: ["img_src", "heading", "intro_txt", "reversed"],
  components: {
    "app-button": ButtonVue
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
        padding-right: 50px;
      }
    }
  }
}

.box-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  width: 50%;
  flex-shrink: 0;
  padding-top: 40%;
}

.box-text {
  @media (min-width: 768px) {
    padding-left: 50px;
  }

  .intro-text,
  .intro-btn {
    margin-top: 30px;
  }
}
</style>