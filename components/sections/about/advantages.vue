<template>
  <app-section
    :heading="content.section_intro"
    class="section"
  >
    <div class="grid">
      <div
        class="grid-item"
        v-for="(card,idx) in card_list"
        :key="idx"
      >
        <!-- <img
          class="grid-item-icon"
          :src="card.icon"
          alt="icon"
          width="70px"
        /> -->
        <span class="grid-item-icon">
          <svg
            width="70px"
            height="70px"
          >
            <use :xlink:href="sprite + '#' + card.icon"></use>
          </svg>
        </span>

        <p class="grid-item-text medium-font">{{card.heading}}</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import sprite from "../../../assets/icons/sprite_c.svg";
import { about } from "~/static/content_data";

export default {
  name: "advantages.vue",
  components: {
    "app-section": sectionVue
  },
  data() {
    return {
      sprite,
      about,
      content: about.advantages,
      card_list: [
        {
          icon: "case",
          heading:
            "10+ лет опыта производства ограждений. \n500+ обьектов выполненных работ"
        },
        {
          icon: "recycle",
          heading: "Полный перечень услуг по установке заборов и ворот"
        },
        {
          icon: "time",
          heading: "Выполнение работ в сжатые сроки"
        },
        {
          icon: "prices",
          heading: "Товар по цене произврдителя"
        },
        {
          icon: "garanty",
          heading: "Высокое качество и гарантия работ"
        },
        {
          icon: "choise",
          heading: "Большой асортимент продукции"
        }
      ]
    };
  }
  // props: {
  //   content: {
  //     type: Object,
  //     default: {}
  //   }
  // }
};
</script>

<style lang="scss" scoped>
.section {
  .grid {
    display: grid;
    grid-gap: 12px;

    // @media (min-width: 500px) {
    //   grid-template-columns: repeat(2, 1fr);
    // }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &-item {
      display: flex;
      // flex-direction: column;
      align-items: center;
      background-color: #fff;
      border-radius: 4px;
      padding: 3%;

      &-icon {
        width: 70px;
        margin-right: 16px;
        flex-shrink: 0;
      }

      &-text {
        // text-align: center;
        font-weight: bold;
        white-space: pre-wrap;
      }
    }
  }
}
</style>