<template>
  <app-section class="section" :heading="content.heading">
    <app-intro
      :img_src="logo"
      img_alt="Производсто и продажа еврозаборов"
      :paragraphs="content.paragraphs"
    />
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import IntroVue from "~/components/common/Intro.vue";
import logo from "~/assets/img/image-min.png";
export default {
  components: {
    "app-section": sectionVue,
    "app-intro": IntroVue
  },
  props: {
    content: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      logo
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;
  }
</style>