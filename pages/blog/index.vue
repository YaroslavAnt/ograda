<template>
  <main>
    <h1>Отчеты о выполненых работах по установке ограждений</h1>
    <app-section
      :heading="section_heading"
      class="section"
    >
      <div class="grid">
        <blog-card
          :isWhole='true'
          class="article section-padding"
          v-for="(card) in posts.data"
          :key="card.id"
          :card="card"
        />
      </div>
    </app-section>
    <div class="container-paginate">
      <app-pagination
        v-if="posts.last_page > 1"
        :page-count="posts.last_page"
        v-model="page"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        :prev-link-class="'prev-link'"
        :next-link-class="'next-link'"
      ></app-pagination>
    </div>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import BlogCardVue from "~/components/common/BlogCard.vue";
import { getPostsByPage } from "../../api/posts";
let Paginate;
if (process.client) {
  Paginate = require("vuejs-paginate");
}

export default {
  name: "blog",
  head: {
    title: "Отчеты о выполненых работах по установке ограждений",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Здесь можно ознакомиться с работами по установке ограждений (еврозаборов, заборов из профнастила и сетки-рабицы), а также ворот и калиток. "
      }
    ]
  },
  components: {
    "app-section": sectionVue,
    "blog-card": BlogCardVue,
    "app-pagination": Paginate
  },
  data() {
    return {
      section_heading: "Отчеты о выполненных работах",
      posts: this.$store.state.posts.posts
    };
  },
  computed: {
    page: {
      get() {
        return Number(this.posts.current_page) || this.default_page;
      },
      set(page) {
        if (this.page === page) return;
        this.getPosts(page);
        scrolledContent.scrollTo(0, 0);
      }
    }
  },
  methods: {
    getPosts(page) {
      getPostsByPage(page)
        .then(res => {
          console.log({ res });
          this.posts = res.data.data;
        })
        .catch(() => alert("Невозножно загрузить данные"));
    }
  }
};
</script>

<style lang="scss" scoped>
  h1 {
    position: absolute;
    left: -500px;
  }
  .section {
    background-color: #fff;
  }
  .grid {
    display: grid;
    grid-gap: 24px;
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .article {
    background-color: #f2f1ef;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
    padding: 0;
    @media (min-width: 768px) {
      padding: 20px 16px;
    }
  }
</style>