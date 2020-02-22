<template>
  <app-section class="section">
    <p
      v-for="(paragraph,idx) in content.paragraphs"
      :key="idx"
      class="base-font  section-paragraph"
    >{{paragraph.text}}</p>
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

    &-paragraph {
      margin-top: 24px;
    }
  }
</style>