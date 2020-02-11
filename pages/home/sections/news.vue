<template>
  <app-secion
    :heading="section_heading"
    class="section"
    v-if="lastNews.length > 0"
  >
    <div class="news-grid">
      <blog-card
        v-for="(post,idx) in lastNews"
        :key="idx"
        :card="post"
      />
    </div>
    <nuxt-link to='/blog'>
      <span class="section-link base-font">&rarr; Смотреть больше новостей </span>
    </nuxt-link>
  </app-secion>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import but_3 from "~/assets/img/fence/but/but_3.jpg";
import but_loza_3 from "~/assets/img/fence/but_loza/but_loza_3.jpg";
import but_rovnyi_1 from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import fagot_2 from "~/assets/img/fence/fagot/fagot_2.jpg";
import krym_1 from "~/assets/img/fence/krym/krym_1.jpg";
import BlogCardVue from "~/components/common/BlogCard.vue";
import { mapGetters } from "vuex";

export default {
  name: "news.vue",
  components: {
    "app-secion": sectionVue,
    "blog-card": BlogCardVue
  },
  data() {
    return {
      section_heading: "Отчеты о выполненных работах"
    };
  },
  computed: {
    ...mapGetters({
      lastNews: "posts/getLastPosts"
    })
  }
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

