<template>
  <main>
    <h1>Производство и установка еврозаборов в Запорожье</h1>
    <about :content="about.about" />
    <advantages :content="about.advantages" />
    <exposition :content="about.expo" />
  </main>
</template>

<script>
import aboutVue from "./sections/about.vue";
import advantagesVue from "./sections/advantages.vue";
import expositionVue from "./sections/exposition.vue";
import { about } from "~/static/content_data";
export default {
  head: {
    title: "Производство и установка еврозаборов в Запорожье",
    meta: [
      { hid: "description", name: "description", content: "О нашей компании" }
    ]
  },
  components: {
    about: aboutVue,
    advantages: advantagesVue,
    exposition: expositionVue
  },
  data() {
    return {
      about
    };
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    position: absolute;
    left: -500px;
  }
</style>