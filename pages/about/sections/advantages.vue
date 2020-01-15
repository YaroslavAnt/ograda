<template>
  <app-section
    :heading="content.section_intro"
    class="section"
  >
    <div class="grid">
      <div
        class="grid-item"
        v-for="(card,idx) in content.card_list"
        :key="idx"
      >
        <img
          class="grid-item-icon lazyload"
          :data-src="card.icon"
          alt="icon"
        />
        <p class="grid-item-text medium-font">{{card.heading}}</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import IconCardVue from "~/components/common/IconCard.vue";
import IconBaseVue from "~/components/common/IconBase.vue";
import sectionVue from "~/components/layout/section.vue";

export default {
  name: "advantages.vue",
  components: {
    "icon-card": IconCardVue,
    "icon-base": IconBaseVue,
    "app-section": sectionVue
  },
  props: {
    content: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="scss" scoped>
  .section {
    .grid {
      display: grid;
      grid-gap: 24px;

      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 36px;
      }

      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        &-icon {
          width: 70px;
        }

        &-text {
          text-align: center;
        }
      }
    }
  }
</style>