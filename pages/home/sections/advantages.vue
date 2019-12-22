<template>
  <app-section :heading="section_intro" class="section">
    <div class="grid">
      <div class="grid-item" v-for="(card,idx) in card_list" :key="idx">
        <img class="grid-item-icon lazyload" :data-src="card.icon" alt="icon" />
        <p class="grid-item-text medium-font">{{card.heading}}</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import IconCardVue from "~/components/common/IconCard.vue";
import goal from "~/assets/icons/goal.svg";
import flag from "~/assets/icons/flag.svg";
import coins from "~/assets/icons/coins.svg";
import shield from "~/assets/icons/shield.svg";
import IconBaseVue from "~/components/common/IconBase.vue";
import sectionVue from "~/components/layout/section.vue";

export default {
  name: "advantages.vue",
  components: {
    "icon-card": IconCardVue,
    "icon-base": IconBaseVue,
    "app-section": sectionVue
  },
  data() {
    return {
      section_intro: "Наши приемущества",
      card_list: [
        {
          icon: goal,
          heading: "10+ лет опыта производства ограждений"
        },
        {
          icon: flag,
          heading: "500+ обьектов выполненных работ"
        },
        {
          icon: coins,
          heading: "Умеренные цены"
        },
        {
          icon: shield,
          heading: "Высокое качество и гарантия работ"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    background-color: #fff;

    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 36px;
      }

      &-item {
        display: flex;
        align-items: center;

        .icon-box {
          display: inline-flex;
          padding: 30px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background-color: var(--red);
        }

        &-icon {
          width: 70px;
        }
      }
    }
  }
</style>