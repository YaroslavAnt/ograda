<template>
  <main class="section-padding">

    <h1 class="with-skewed-bg">{{title}}</h1>
    <section
      v-for="(question, idx) in questions"
      :key="idx"
      itemscope
      itemprop="mainEntity"
      itemtype="https://schema.org/Question"
    >
      <h2
        itemprop="name"
        class="question medium-font"
      >{{idx+1}}. {{question.question}}</h2>
      <img
        v-if="question.img"
        :src="question.img"
        alt="image"
      >
      <p
        itemscope
        itemprop="acceptedAnswer"
        itemtype="https://schema.org/Answer"
        class="answer small-font"
        v-if="question.answer"
      > <span itemprop="text">{{question.answer}}</span></p>
    </section>
  </main>
</template>

<script>
import { getVarsByPage } from "../../api/variables";
import eye from "../../assets/img/services/eye.jpg";
import ogImage from "~/assets/img/services/zvetnoi_zabor2.jpg";
import { DOMAIN } from "../../config";

export default {
  name: "faq.vue",
  data() {
    return {
      // title:
      ogImage,
      DOMAIN,

      questions: [
        {
          question: "Нужно ли красить бетонные заборы?",
          answer: `Не обязательно. Но если вы хотите придать индивидуальности вашему ограждению, то этот вид работ предоставляет возможность сделать забор намного красивее а также продлить срок службы. 
            
            После покраски наносится специальный лак, который придает глянец поверхности.
            
            Есть большой выбор цветов. Работы выполняются за один день`
        },
        {
          question: "Возможна ли доставка заборов за пределы города?",
          answer:
            "Да, возможна. Выполняем доставку продукции и материалов по всей Запорожской области. Компания имеет транспорт, подходящий под любые объемы заказов. Услуги по доставке оплачиваются отдельно"
        },
        {
          question: "Для чего нужна замазка щелей между плитами?",
          img: eye
        },
        {
          question: "Заливать фундамент обязательно?",
          answer:
            "Только в случае просадки грунта или при большом уклоне участка."
        },
        {
          question: "Как рассчитать необходимое количество плит еврозаборов?",
          answer: `Необходимо длину периметра умножить на высоту забора в метрах. Например участок 10м х 15м, высота забора 1,5м: 
          - периметр равен 50м (10м + 15м + 10м + 15м) 
          - необходимое количество плит 75 (50м умножить на 1,5м)`
        },
        {
          question: "Как установить ограждение на поверхности с уклоном?",
          answer: ""
        }
      ],
      fetchedVars: {}
    };
  },
  computed: {
    title() {
      return "Часто задаваемые вопросы";
    },
    description() {
      return;

      ("Здесь собраны самые часто задаваемые вопросы касательно монтажа ограждений и ворот");
    },
    keywords() {
      return;

      ("faq, монтаж заборов, покраска еврозаборов, как оформить заказ на еврозабор, скидки, акции");
    }
  },

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
          content: `${this.keywords}`
        },

        //Open Graph
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
          name: "twitter:image",
          content: this.ogImage
        },
        {
          name: "twitter:description",
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
  main {
    background-color: #fff;
    flex: 1;
    padding-top: 100px;
    @media (min-width: 1024px) {
      padding-top: 0px;
    }
  }
  h1 {
    font-weight: bold;
    font-size: 22px;
    line-height: 1;
    display: block;
    text-align: center;
    color: #fff;
    padding: 12px 24px;
    position: relative;
    z-index: 5;
    text-transform: uppercase;

    &::before {
      background-color: var(--green);
    }

    @media (min-width: 600px) {
      font-size: 28px;
      line-height: 1;
      margin: 40px 16px 0;
    }
  }

  .question {
    color: var(--red);
    margin: 30px 0 20px;
  }
  .answer {
    white-space: pre-line;
  }
</style>