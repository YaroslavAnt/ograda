<template>
  <app-section :heading="'Популярные товары'">
    <div class="section-grid">
      <article class="card" v-for="(card,idx) in cards" :key="idx">
        <div class="card-image" :style="{'background-image': `url(${card.img})`}"></div>
        <div class="card-text">
          <span v-if="card.label" class="card-label base-font">{{card.label}}</span>
          <p class="card-name base-font">{{card.name}}</p>
          <p class="card-price small-font">{{card.price}}</p>
          <span class="card-link small-font" @click="$router.push('/products')">Подробнее &rarr;</span>
        </div>
      </article>
    </div>
  </app-section>
</template>

<script>
import sectionVue from "../../../components/layout/section.vue";
import but_3 from "../../../assets/img/but/but_3.jpg";
import but_loza_3 from "../../../assets/img/but_loza/but_loza_3.jpg";
import but_rovnyi_1 from "../../../assets/img/but_rovnyi/but_rovnyi_1.jpg";
import fagot_2 from "../../../assets/img/fagot/fagot_2.jpg";
import krym_1 from "../../../assets/img/krym/krym_1.jpg";

export default {
  name: "popular.vue",
  components: {
    "app-section": sectionVue
  },
  data() {
    return {
      cards: [
        {
          img: but_3,
          name: 'Плита "Бут"',
          price: "160грн",
          label: "Cкидка",
          id: "123456"
        },
        {
          img: but_loza_3,
          name: 'Плита "Бут-Лоза"',
          price: "160грн",
          // label: "Cкидка",
          id: "223456"
        },
        {
          img: but_rovnyi_1,
          name: 'Плита "Бут ровный"',
          price: "160грн",
          label: "Cкидка",
          id: "323456"
        },
        {
          img: fagot_2,
          name: 'Плита "Фагот"',
          price: "160грн",
          label: "Акция",
          id: "423456"
        },
        {
          img: krym_1,
          name: 'Плита "Крым"',
          price: "160грн",
          label: "Новинка",
          id: "523456"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .section {
    &-grid {
      display: grid;
      grid-gap: 24px;
      @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .card {
      position: relative;
      border-radius: 4px;
      box-shadow: 0px 10px 18px rgba(26, 41, 74, 0.2);
      overflow: hidden;

      &-image {
        padding-top: 67%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }

      &-text {
        padding: 10px 16px;
        background-color: var(--white);
      }
      &-label {
        display: block;
        background-color: var(--red);
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        right: 0;
        top: 10%;
        padding: 4px 8px;
        border-radius: 8px 0 0 8px;
      }
      &-name {
        font-weight: 600;
        border-bottom: 1px solid #aaa;
      }

      &-link {
        color: var(--red);
        cursor: pointer;
      }
    }
  }
</style>