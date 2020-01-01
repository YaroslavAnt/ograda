<template>
  <div>
    <about />
    <advantages />
    <exposition />
  </div>
</template>

<script>
import aboutVue from "./sections/about.vue";
import advantagesVue from "./sections/advantages.vue";
import expositionVue from "./sections/exposition.vue";
export default {
  components: {
    about: aboutVue,
    advantages: advantagesVue,
    exposition: expositionVue
  }
};
</script>

<style lang="scss" scoped>
</style>