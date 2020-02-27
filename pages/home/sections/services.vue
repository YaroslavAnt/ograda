<template>
  <app-section
    :heading="content.section_heading"
    class="section"
  >
    {{content.card_list}}
    <div class="card-grid">
      <article
        class="card-item"
        v-for="(card,idx) in content.card_list"
        :key="idx"
      >
        <nuxt-link :to="{path: '/services'}">
          <icon-card
            :icon_src="card.icon"
            :heading="card.heading"
            :text="card.intro_txt"
          ></icon-card>
        </nuxt-link>
      </article>
    </div>
    <router-link
      class="section-link base-font"
      to="/services"
    >&rarr; Услуги по установке заборов </router-link>
  </app-section>
</template>

<script>
import IconCardVue from "~/components/common/IconCard.vue";
import sectionVue from "~/components/layout/section.vue";

export default {
  name: "services.vue",
  components: {
    "icon-card": IconCardVue,
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
  section {
    background-color: var(--dark);
    color: var(--white);

    .card-grid {
      display: grid;
      margin: 0 auto 40px;
      grid-gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
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