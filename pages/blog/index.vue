<template>
  <main>
    <h1>Отчеты о выполненых работах по установке ограждений</h1>
    <app-section
      :heading="section_heading"
      class="section"
    >
      <div class="grid">
        <blog-card
          :card="card"
          class="article section-padding"
          v-for="(card,idx) in news"
          :key="idx"
        />
      </div>
    </app-section>
  </main>
</template>

<script>
import sectionVue from "~/components/layout/section.vue";
import but_3 from "~/assets/img/fence/but/but_3.jpg";
import but_loza_3 from "~/assets/img/fence/but_loza/but_loza_3.jpg";
import but_rovnyi_1 from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
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
      section_heading: "Отчеты о выполненных работах",
      news: [
        {
          img_src: but_3,
          img_alt: "Установка еврозабора",
          name: "Новость №1",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere, deserunt fugiat magnam ipsam suscipit?",
          date: "29.12.2018",
          id: "123456"
        },
        {
          img_src: but_loza_3,
          img_alt: "Установка еврозабора",
          name: "Новость №2",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere, deserunt fugiat magnam ipsam suscipit?",
          date: "29.12.2018",
          id: "223456"
        },
        {
          img_src: but_rovnyi_1,
          img_alt: "Установка еврозабора",
          name: "Новость №3",
          text:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facere, deserunt fugiat magnam ipsam suscipit?",
          date: "29.12.2018",
          id: "323456"
        }
      ]
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  .article {
    background-color: #f2f1ef;
    border-radius: 4px;
    box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
  }
</style>