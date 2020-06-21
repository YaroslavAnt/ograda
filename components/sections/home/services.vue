<template>
  <app-section
    :heading="'Услуги'"
    class="section"
  >
    <p class="base-font">Установка еврозаборов это довольно трудоемкий процесс, состоящий из отдельных этапов:</p>
    <ul>
      <li
        v-for="service in services"
        :key="service.name"
        class="color-orange base-font bold"
        title="Подробнее об услуге"
      >
        <nuxt-link :to='service.to'>→ {{service.name}}</nuxt-link>
      </li>
    </ul>
    <p class="base-font">Мы предоставляем услуги по каждому из перечисленных пунктов.
      По желанию заказчика любой из этапов установки еврозабора он может выполнить самостоятельно,
      что даст возможность оградить участок по более низкой цене
    </p>
    <p class="base-font">Более подробно ознакомиться с предоставляемыми услугами Вы можете перейдя по ссылке:</p>
    <div class="card-grid">
      <article
        class="card-item"
        v-for="(card, idx) in card_list"
        :key="idx"
      >
        <nuxt-link
          :title="card.heading"
          :to="{ path: card.link }"
        >
          <icon-card
            :icon_id="card.id"
            :heading="card.heading"
            :text="card.intro_txt"
          ></icon-card>
        </nuxt-link>
      </article>
    </div>
    <!-- <router-link
      class="section-link base-font"
      to="/services"
    >&rarr; Услуги по установке заборов </router-link> -->
  </app-section>
</template>

<script>
import IconCardVue from "~/components/common/IconCard.vue";
import sectionVue from "~/components/layout/section.vue";

// import measure from "~/assets/icons/measure.svg";
// import cargo from "~/assets/icons/cargo.svg";
// import brush from "~/assets/icons/brush.svg";
// import fence from "~/assets/icons/fence.svg";

export default {
  name: "services.vue",
  components: {
    "icon-card": IconCardVue,
    "app-section": sectionVue
  },

  data() {
    return {
      card_list: [
        {
          // icon: measure,
          id: "measure-svg",
          heading: "Выезд замерщика",
          link: "/services/zamer"
        },
        {
          // icon: cargo,
          id: "cargo-svg",
          heading: "Доставка продукции и строй-материалов",
          link: "/services/dostavka"
        },
        {
          // icon: fence,
          id: "fence-svg",
          heading: "Установка заборов, ворот",
          link: "/services/montazh"
        },
        {
          // icon: brush,
          id: "brush-svg",
          heading: "Покраска заборов",
          link: "/services/pokraska"
        }
      ],
      services: [
        { name: "Замер участка под установку", to: "/services/zamer" },
        { name: "Демонтаж старого ограждения", to: "/" }, //TODO page
        {
          name: "Доставка материалов и комплектов бетонных плит",
          to: "/services/dostavka"
        },
        {
          name: "Установка бетонных столбиков и секций еврозабора",
          to: "/services/montazh"
        },
        { name: "Заливка фундаментной ленты", to: "/services/fundament" },
        {
          name: "Изготовление и монтаж калитки и ворот",
          to: "/products/ворота-и-калитки"
        }, //TODO page
        { name: "Покраска еврозабора", to: "/services/pokraska" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
section {
  background-color: var(--dark);
  color: var(--white);

  p,
  ul {
    margin: 20px 0;
  }

  ul {
    line-height: 1.3;
  }

  li {
    padding: 10px 0;
    min-height: 48px;
  }

  .card-grid {
    display: grid;
    margin: 0 auto 40px;
    grid-gap: 12px;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .card-item {
    background: var(--white);
    color: var(--dark);
    padding: 3%;
    border-radius: 4px;
  }
}
.section-link {
  color: var(--orange);
  cursor: pointer;
}
</style>
