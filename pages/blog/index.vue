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
          :card="card"
          class="article section-padding"
          v-for="(card,idx) in this.$store.state.posts.list"
          :key="idx"
        />
      </div>
    </app-section>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import BlogCardVue from "~/components/common/BlogCard.vue";

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
    "blog-card": BlogCardVue
  },
  data() {
    return {
      section_heading: "Отчеты о выполненных работах"
    };
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
  }
</style>