<template>
  <section class="section-padding">
    <span class="intro">{{section_intro}}</span>
    <h2 class="heading big-font" v-html="heading"></h2>
    <div class="grid-box">
      <div v-for="(section,idx) in intro_list" :key="idx">
        <intro
          :img_src="but_2"
          :heading="section.heading"
          :intro_txt="section.intro_txt"
          :reversed="idx%2"
        ></intro>
      </div>
    </div>
  </section>
</template>

<script>
import IntroVue from "../../../components/common/Intro.vue";
import but_2 from "../../../assets/img/but_2.jpg";

export default {
  name: "about.vue",
  components: {
    intro: IntroVue
  },
  data() {
    return {
      but_2,
      section_intro: "О нас",
      heading:
        "Наше предприятие является одним из лидеров по изготовлению <strong>бетонных еврозаборов</strong> в Запорожье",
      intro_list: [
        {
          heading: "Еврозаборы",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        },
        {
          heading: "Еврозаборы",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        },
        {
          heading: "Еврозаборы",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.intro {
  color: var(--red);
}
.heading {
  max-width: 1000px;
  padding: 40px 0;
  font-weight: 700;
}
.grid-box {
  display: grid;
  row-gap: 40px;
}
</style>