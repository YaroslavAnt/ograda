<template>
  <main class="section-padding">
    <h1 class="heading with-skewed-bg">{{section_heading}}</h1>
    <p
      class="huge-font"
      v-if="posts.data.length === 0"
    >Еще нет новостей...</p>

    <section
      class="section"
      v-if="posts.data.length > 0"
    >
      <div class="grid">
        <blog-card
          :isWhole='true'
          class="article"
          v-for="(card) in posts.data"
          :key="card.id"
          :card="card"
        />
      </div>
    </section>

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
import { getPostsByPage, getAllPosts } from "../../api/posts";
import { mapGetters } from "vuex";
import { getVarsByPage } from "../../api/variables";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";
import { DOMAIN } from "../../config";

let Paginate;
if (process.client) {
  Paginate = require("vuejs-paginate");
}

export default {
  name: "blog",
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.keywords
        },
        // Open Graph
        {
          name: "og:title",
          content: this.title
        },
        {
          name: "og:description",
          content: this.description
        },
        { name: "og:type", content: "website" },
        { name: "og:url", content: DOMAIN + this.$route.path },
        {
          name: "og:image",
          content: this.ogImage
        },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        {
          name: "twitter:image",
          content: this.ogImage
        },
        {
          name: "twitter:image:alt",
          content: "установка еврозабора в Запорожье"
        }
      ]
    };
  },
  components: {
    "app-section": sectionVue,
    "blog-card": BlogCardVue,
    "app-pagination": Paginate
  },
  data() {
    return {
      section_heading: "Наши работы",
      title: "Отчеты о выполненых работах по установке ограждений",
      description:
        "Работы по установке ограждений (еврозаборов, заборов из профнастила и сетки-рабицы), а также ворот и калиток. ",
      keywords:
        "Отчеты по установке заборов, Отчеты по установке ворот, Отчеты по установке калиток",
      fetchedVars: "{}",
      ogImage,
      DOMAIN
    };
  },
  mounted() {
    this.$store.commit("common/CLOSE_MENU");
    this.$store.commit("common/RUN_SPINNER");

    getAllPosts()
      .then(({ data }) => {
        this.$store.commit("posts/SET_POSTS", data.data);
      })
      .catch(() => alert("Невозможно загрузить данные"))
      .finally(() => this.$store.commit("common/STOP_SPINNER"));
  },
  computed: {
    ...mapGetters({
      posts: "posts/getPosts"
    }),
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
      this.$store.commit("common/RUN_SPINNER");
      getPostsByPage(page)
        .then(({ data }) => {
          this.$store.commit("posts/SET_POSTS", data.data);
        })
        .catch(() => alert("Невозножно загрузить данные"))
        .finally(() => this.$store.commit("common/STOP_SPINNER"));
    }
  }
};
</script>

<style lang="scss" scoped>
  main {
    flex: 1;
    background-color: #fff;
    margin-top: 85px;
    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }
  .heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
      margin-bottom: 40px;
    }
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
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.5);
    padding: 0;
    // @media (min-width: 768px) {
    //   padding: 20px 16px;
    // }
  }
</style>