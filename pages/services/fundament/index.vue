<template>
  <main>
    <h1 class="heading with-skewed-bg">{{title}}</h1>
    <app-section class="section">
      <app-intro
        v-for="(item,idx) in serviceData"
        :key="idx"
        :img_set="item.img_src"
        :img_alt="item.img_alt"
        :paragraphs="item.paragraphs"
        :withBorder="true"
        :reversed='Boolean(idx%2)'
        :ratio='item.ratio'
      />
    </app-section>
  </main>
</template>

<script>
import IntroVue from "~/components/common/Intro.vue";
import sectionVue from "~/components/layout/section.vue";
import { getVarsByPage } from "~/api/variables";
import fundament1 from "~/assets/img/services/fundament1.jpg";
import fundament2 from "~/assets/img/services/fundament2.jpg";
import fundament3 from "~/assets/img/services/fundament3.jpg";
import { DOMAIN } from "../../../config";

export default {
  name: "index.vue",
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

        //Open Graph
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
        { property: "og:image", content: DOMAIN + this.serviceData[0].img_src },
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
          content: DOMAIN + this.serviceData[0].img_src
        },
        {
          name: "twitter:image:alt",
          content: this.serviceData[0].img_alt
        }
      ],
      link: [
        { rel: "canonical", href: DOMAIN + this.$route.fullPath } //<link rel="canonical" href="https://example.com/dresses/green-dresses" />
      ]
    };
  },
  components: {
    "app-intro": IntroVue,
    "app-section": sectionVue
  },

  mounted() {
    this.$store.commit("common/CLOSE_MENU");
  },
  data() {
    return {
      fetchedVars: {},
      DOMAIN,
      keywords: `фундамент для еврозаборов, Заливка фундамента, стоимость работ по заливке фундамента для заборов`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Услуги по заливке фундамента для всех видов заборов. Доставка стройматериалов.",
      title: "Заливка фундаментной ленты",
      serviceData: [
        {
          img_src: [fundament1, fundament2],
          id: "fundament1",
          img_alt: "Заливка фундамента под еврозабор",
          ratio: "120%",
          paragraphs: [
            {
              text: `Установка бетонного забора делиться на бетонирование столбов и набор плит. Недостаток точечного бетонирования это и есть точечная нагрузка. Поэтому если на периметре устанавливаемого забора есть какая либа просадка грунта, она обязательно приведёт к тому что столбы будут отклоняться от положенного уровня, при чем каждый столб, независимо от рядом стоящего. Это может привести к тому, что плита выпадает с паза столба. Чтобы этого избежать, нужно залить под бетонный забор фундаментную ленту, касаясь лентой основания нижней плиты. Когда вы выполните это работу, бетонный забор распределит свою нагрузку на перимитр всего фундамента, тем самым уберёт точечную нагрузку с столба. `
            },
            {
              text: `Дополнительно фундамент можно проармировать, тогда вы сможете связать фундамент между пролетами и это даст ему дополнительную прочность. Наша бригада выполняет заливку фундамента после установки самого забора, так как нужно выдержать точное расстояние между столбами и контроливоть заливку что бы залитый бетон касался основания плиты.`
            }
          ]
        },
        {
          img_src: [fundament3],
          id: "fundament2",
          img_alt: "Заливка фундамента под еврозабор",
          ratio: "67%",
          paragraphs: [
            {
              text: `Второе назначение фундамента это заливка его на неровных участках, что позволяет установить забор без ступеней или терас. Фундамент в данном случае заполняет неровности забора по отношению к земле, возникшие при установке забора, так как бетонный забор нужно устанавливать строго горизонтально.`
            },
            {
              text: `Бетонный забор имеет стандартную высоту плиты она составляет 0,5м. Поэтому его высота в наборе составляет 0,5м.,1,0м.,1,5м.,2м.,и 2,5м включельно. Бывают случаи при установке забора на ровном участке, когда заказчик требует нестандартной высоты забора, к примеру 1,7м. или 2,3м., так вот в таких случаях мы тоже используем фундамент. Мы поднимаем уровень забора на заданную высоту, а после проливаем появившийся зазор.`
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  .heading {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    text-align: center;
    color: #fff;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin: 20px 16px -20px;
    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
    }
    @media (min-width: 1024px) {
      margin: 20px 32px -20px;
    }
  }
</style>