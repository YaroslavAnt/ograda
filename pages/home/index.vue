<template>
  <main>
    <!-- <slider></slider> -->
    <hero />
    <advantages />
    <services />
    <popular />
    <!-- <about /> -->
  </main>
</template>

<script>
import heroVue from "./sections/hero.vue";
import aboutVue from "./sections/about.vue";
import servicesVue from "./sections/services.vue";
import SliderVue from "../../components/common/Slider.vue";
import advantagesVue from "./sections/advantages.vue";
import popularVue from "./sections/popular.vue";

export default {
  components: {
    slider: SliderVue,
    hero: heroVue,
    about: aboutVue,
    services: servicesVue,
    advantages: advantagesVue,
    popular: popularVue
  }
};
</script>

