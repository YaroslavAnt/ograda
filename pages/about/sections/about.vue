<template>
  <app-section class="section" :heading="heading">
    <app-intro
      :img_src="logo"
      img_alt="Производсто и продажа еврозаборов"
      :paragraphs="paragraphs"
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
  data() {
    return {
      logo,
      heading: "Несколько слов о компании",
      paragraphs: [
        {
          text:
            "Мы являемся одним из первых и основных производителей еврозаборов в Запорожье. " +
            "Предприятие основано в 2010 году и специализируется на установке бетонных заборов 'под ключ'."
        },
        {
          text:
            "Полностью берем на себя вопросы по доставке, сборке и установке всех необходимых строительных материалов для еврозабора."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;
  }
</style>