<template>
  <main>
    <app-section class="section" :heading="services.heading">
      <app-intro
        v-for="(service, idx) in services.services"
        :key="idx"
        :img_src="service.img_src"
        :img_alt="service.img_alt"
        :heading="service.heading"
        :paragraphs="service.paragraphs"
        :withBorder="true"
        :reversed="Boolean(idx%2)"
      />
    </app-section>
  </main>
</template>

<script>
import IntroVue from "../../components/common/Intro.vue";
import sectionVue from "../../components/layout/section.vue";
import { services } from "~/static/content_data";

export default {
  name: "index.vue",
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue
  },
  data() {
    return {
      services
    };
  }
};
</script>

<style lang="scss" scoped>
</style>