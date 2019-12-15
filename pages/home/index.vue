<template>
  <main>
    <!-- <slider></slider> -->
    <hero></hero>
    <services></services>
    <about></about>
  </main>
</template>

<script>
import heroVue from "./sections/hero.vue";
import aboutVue from "./sections/about.vue";
import servicesVue from "./sections/services.vue";
import SliderVue from "../../components/common/Slider.vue";

export default {
  components: {
    slider: SliderVue,
    hero: heroVue,
    about: aboutVue,
    services: servicesVue
  }
};
</script>

