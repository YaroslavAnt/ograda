<template>
  <section class="section-padding">
    <span class="intro">{{section_intro}}</span>
    <!-- <h2 class="heading big-font" v-html="heading"></h2> -->
    <div class="card-grid">
      <div class="card-item" v-for="(card,idx) in card_list" :key="idx">
        <icon-card :icon_src="card.icon" :heading="card.heading" :text="card.intro_txt"></icon-card>
      </div>
    </div>
  </section>
</template>

<script>
import IconBrushVue from "../../../components/icons/IconBrush.vue";
import IconCargoVue from "../../../components/icons/IconCargo.vue";
import IconMeasureVue from "../../../components/icons/IconMeasure.vue";
import IconCardVue from "../../../components/common/IconCard.vue";
import measure from "../../../assets/icons/measure.svg";
import cargo from "../../../assets/icons/cargo.svg";
import brush from "../../../assets/icons/brush.svg";
import fence from "../../../assets/icons/fence.svg";

export default {
  name: "services.vue",
  components: {
    "icon-brush": IconBrushVue,
    "icon-cargo": IconCargoVue,
    "icon-measure": IconMeasureVue,
    "icon-card": IconCardVue
  },
  data() {
    return {
      section_intro: "Услуги",
      heading:
        "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
      card_list: [
        {
          icon: cargo,
          heading: "Доставка продукции и стройматериалов",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        },
        {
          icon: fence,
          heading: "Установка заборов, ворот",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        },
        {
          icon: brush,
          heading: "Покраска заборов",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
        },
        {
          icon: measure,
          heading: "Выезд замерщика",
          intro_txt:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?"
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

  .intro {
    color: var(--red);
  }

  .heading {
    padding: 40px 0;
  }

  .card-grid {
    display: grid;
    max-width: 700px;
    margin: 40px auto 0;
    grid-gap: 24px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 36px;
    }
  }
}
</style>