<template>
  <app-section :heading="section_heading" class="section">
    <div class="card-grid">
      <article class="card-item" v-for="(card,idx) in card_list" :key="idx">
        <icon-card :icon_src="card.icon" :heading="card.heading" :text="card.intro_txt"></icon-card>
      </article>
    </div>
    <span class="section-link base-font" @click="$router.push('/services')">Узнать подробнее &rarr;</span>
  </app-section>
</template>

<script>
import IconCardVue from "~/components/common/IconCard.vue";
import measure from "~/assets/icons/measure.svg";
import cargo from "~/assets/icons/cargo.svg";
import brush from "~/assets/icons/brush.svg";
import fence from "~/assets/icons/fence.svg";
import sectionVue from "~/components/layout/section.vue";

export default {
  name: "services.vue",
  components: {
    "icon-card": IconCardVue,
    "app-section": sectionVue
  },
  data() {
    return {
      section_heading: "Услуги",
      section_subheading:
        "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
      card_list: [
        {
          icon: cargo,
          heading: "Доставка продукции и стройматериалов",
          // intro_txt:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
          link: "/services"
        },
        {
          icon: fence,
          heading: "Установка заборов, ворот",
          // intro_txt:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
          link: "/services"
        },
        {
          icon: brush,
          heading: "Покраска заборов",
          // intro_txt:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
          link: "/services"
        },
        {
          icon: measure,
          heading: "Выезд замерщика",
          // intro_txt:
          //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
          link: "/services"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  section {
    background-color: var(--dark);
    color: var(--white);

    .card-grid {
      display: grid;
      max-width: 700px;
      margin: 0 auto 40px;
      grid-gap: 24px;
      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 36px;
      }
    }

    .card-item {
      background: var(--white);
      color: var(--dark);
      padding: 5%;
      border-radius: 4px;
    }
  }
  .section-link {
    color: var(--orange);
    cursor: pointer;
  }
</style>