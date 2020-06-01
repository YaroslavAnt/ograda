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
      <blog-card
        :isWhole='false'
        v-for="(card) in posts.data"
        :key="card.id"
        :card="card"
      />
    </section>

    <div class="container-paginate">

      <ul class="pagination">
        <li class="disabled">
          <span
            tabindex="-1"
            class="prev-link pagination-btn"
            @click="changePage('<')"
          >&lt;</span>
        </li>

        <li
          v-for="page in (posts.last_page)"
          :key='page'
          :class="{active: +currentPage===+page}"
        >
          <nuxt-link
            tabindex="0"
            class="pagination-btn"
            title='листать'
            :to="`/blog?page=${(page)}`"
          >{{page}}</nuxt-link>
        </li>

        <li class="disabled">
          <span
            tabindex="0"
            class="next-link pagination-btn"
            @click="changePage('>')"
          >&gt;</span>
        </li>
      </ul>
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
          property: "og:title",
          content: this.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        {
          property: "og:image",
          content: DOMAIN + this.ogImage
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
          content: DOMAIN + this.ogImage
        },
        {
          name: "twitter:image:alt",
          content: "установка еврозабора в Запорожье"
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.path } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  },
  components: {
    "app-section": sectionVue,
    "blog-card": BlogCardVue,
    "app-pagination": Paginate
  },
  watch: {
    async $route(from, to) {
      try {
        const {
          data: { data: posts }
        } = await getPostsByPage(this.$route.query.page);
        this.posts = posts;
      } catch (error) {
        () => alert("Невозможно загрузить данные");
      }
    }
  },
  data() {
    return {
      section_heading: "Наши работы",
      title: "Отчеты о выполненых работах по установке ограждений",
      description:
        "Работы по установке ограждений (еврозаборов, заборов из профнастила и сетки-рабицы), а также ворот и калиток. ",
      keywords:
        "еврозабор фото, ворота фото, калитки фото, установка ограждений, монтаж забора из плит",
      ogImage,
      DOMAIN,
      posts: {
        last_page: "",
        current_page: "",
        data: []
      }
      // currentPage: this.$route.query.page || 1
    };
  },

  async asyncData() {
    try {
      const {
        data: { data: posts }
      } = await getAllPosts();
      return { posts };
    } catch (error) {
      () => alert("Невозможно загрузить данные");
    }
  },

  computed: {
    currentPage() {
      return this.$route.query.page || 1;
    }
  },

  methods: {
    changePage(direction) {
      const page = this.$route.query.page || 1;
      if (direction === ">" && page < this.posts.last_page) {
        this.$router.push(this.$route.path + "?page=" + (+page + 1));
      }
      if (direction === "<" && page > 1) {
        this.$router.push(this.$route.path + "?page=" + (page - 1));
      }
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
  display: grid;
  grid-gap: 24px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
.grid {
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