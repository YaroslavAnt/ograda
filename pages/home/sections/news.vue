<template>
  <app-secion :heading="section_heading" class="section">
    <div class="news-grid">
      <article class="card" v-for="(card,idx) in news" :key="idx">
        <!-- <div class="card-image" :style="{'background-image': `url(${card.img})`}"></div> -->
        <app-image :img_src="card.img_src" :img_alt="card.img_alt" :lazy="true" />
        <div class="card-text">
          <span class="card-label base-font">
            <icon-base>
              <icon-calendar />
            </icon-base>
            {{card.date}}
          </span>
          <p class="card-name base-font">{{card.name}}</p>
          <p class="card-price small-font">{{card.text}}</p>
        </div>
      </article>
    </div>
    <span
      class="section-link base-font"
      @click="$router.push('/news')"
    >Смотреть больше новостей &rarr;</span>
  </app-secion>
</template>

<script>
import sectionVue from "../../../components/layout/section.vue";
import but_3 from "../../../assets/img/but/but_3.jpg";
import but_loza_3 from "../../../assets/img/but_loza/but_loza_3.jpg";
import but_rovnyi_1 from "../../../assets/img/but_rovnyi/but_rovnyi_1.jpg";
import fagot_2 from "../../../assets/img/fagot/fagot_2.jpg";
import krym_1 from "../../../assets/img/krym/krym_1.jpg";
import IconBaseVue from "../../../components/common/IconBase.vue";
import IconCalendarVue from "../../../components/icons/IconCalendar.vue";
import ImageBaseVue from "../../../components/common/ImageBase.vue";

export default {
  name: "news.vue",
  components: {
    "app-secion": sectionVue,
    "icon-base": IconBaseVue,
    "icon-calendar": IconCalendarVue,
    "app-image": ImageBaseVue
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

    .card {
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.25);
      overflow: hidden;

      &-image {
        padding-top: 67%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: relative;
      }

      &-text {
        padding: 40px 16px 20px;
        background-color: #eee;
        position: relative;
      }

      &-label {
        display: flex;
        align-items: center;
        background-color: var(--red);
        color: #fff;
        position: absolute;
        left: 16px;
        top: 0;
        transform: translateY(-50%);
        padding: 10px;
        border-radius: 4px;
      }
    }

    &-link {
      cursor: pointer;
      color: var(--red);
    }
  }
</style>

