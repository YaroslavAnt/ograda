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
          class="grid-item-icon"
          :src="card.icon"
          alt="icon"
        />
        <p class="grid-item-text medium-font">{{card.heading}}</p>
      </div>
    </div>
  </app-section>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";

export default {
  name: "advantages.vue",
  components: {
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
      grid-gap: 12px;

      @media (min-width: 500px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 768px) {
        // grid-template-columns: repeat(4, 1fr);
      }

      &-item {
        display: flex;
        // flex-direction: column;
        align-items: center;
        background-color: #fff;
        border-radius: 4px;
        padding: 24px;
        &-icon {
          width: 70px;
          margin-right: 16px;
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