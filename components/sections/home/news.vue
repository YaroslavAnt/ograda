<template>
  <app-secion
    :heading="'Отчеты о выполненных работах'"
    class="section"
    v-if="lastPosts.length > 0"
  >
    <div class="news-grid">
      <blog-card
        v-for="(post,idx) in lastPosts"
        :key="idx"
        :card="post"
      />
    </div>
    <nuxt-link
      title="Смотреть больше новостей"
      to='/blog'
    >
      <span class="section-link base-font">&rarr; Смотреть больше новостей </span>
    </nuxt-link>
  </app-secion>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import BlogCardVue from "~/components/common/BlogCard.vue";

export default {
  name: "news.vue",
  components: {
    "app-secion": sectionVue,
    "blog-card": BlogCardVue,
  },
  props: {
    lastPosts: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-color: #fff;

  .news-grid {
    display: grid;
    margin-bottom: 40px;

    grid-gap: 24px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &-link {
    cursor: pointer;
    color: var(--red);
  }
}
</style>

