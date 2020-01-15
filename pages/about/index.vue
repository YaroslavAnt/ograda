<template>
  <div>
    <about :content="about.about" />
    <advantages :content="about.advantages" />
    <exposition :content="about.expo" />
  </div>
</template>

<script>
import aboutVue from "./sections/about.vue";
import advantagesVue from "./sections/advantages.vue";
import expositionVue from "./sections/exposition.vue";
import { about } from "~/static/content_data";
export default {
  components: {
    about: aboutVue,
    advantages: advantagesVue,
    exposition: expositionVue
  },
  data() {
    console.log({ about });
    return {
      about
    };
  }
};
</script>

<style lang="scss" scoped>
</style>