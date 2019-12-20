<template>
  <app-section :heading="'Популярные товары'">
    <div class="section-grid">
      <article class="card" v-for="(card,idx) in cards" :key="idx">
        <app-image :img_src="card.img_src" :img_alt="card.img_alt" :lazy="true" />

        <p class="card-name base-font" @click="$router.push('/products')">{{card.name}}</p>
        <div class="card-text">
          <span v-if="card.label" class="card-label small-font">{{card.label}}</span>
          <p class="card-price small-font">Цена: {{card.price}}</p>
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
import ImageBaseVue from "../../../components/common/ImageBase.vue";

export default {
  name: "popular.vue",
  components: {
    "app-section": sectionVue,
    "app-image": ImageBaseVue
  },
  data() {
    return {
      cards: [
        {
          img_src: but_3,
          img_alt: 'еврозабор "Бут"',
          name: 'Плита "Бут"',
          price: "160грн",
          label: "Cкидка",
          id: "123456"
        },
        {
          img_src: but_loza_3,
          img_alt: 'еврозабор "Бут-Лоза"',
          name: 'Плита "Бут-Лоза"',
          price: "160грн",
          // label: "Cкидка",
          id: "223456"
        },
        {
          img_src: but_rovnyi_1,
          img_alt: 'еврозабор "Бут ровный"',
          name: 'Плита "Бут ровный"',
          price: "160грн",
          label: "Cкидка",
          id: "323456"
        },
        {
          img_src: fagot_2,
          img_alt: 'еврозабор "Фагот"',
          name: 'Плита "Фагот"',
          price: "160грн",
          label: "Акция",
          id: "423456"
        },
        {
          img_src: krym_1,
          img_alt: 'еврозабор "Крым"',
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
        grid-template-columns: repeat(2, 1fr);
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
        outline: 1px solid #aaa;
        outline-offset: -10px;
        position: relative;
      }

      &-text {
        padding: 10px 16px;
        background-color: var(--white);
      }
      &-label {
        display: block;
        background-color: var(--green);
        color: #fff;
        text-transform: uppercase;
        position: absolute;
        right: 0;
        top: 0;
        padding: 4px 8px;
        border-radius: 0px 0 0 4px;
      }
      &-name {
        // font-weight: 600;
        color: #fff;
        padding: 8px 16px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
        width: 65%;
        text-align: center;
        cursor: pointer;
        &:hover {
          &::after {
            opacity: 1;
          }
        }
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          background-color: var(--red);
          opacity: 0.7;
          z-index: -1;
          border-radius: 4px;
        }
      }
    }
  }
</style>