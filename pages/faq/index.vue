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
      <p
        itemscope
        itemprop="acceptedAnswer"
        itemtype="https://schema.org/Answer"
        class="answer small-font"
      > <span itemprop="text">{{question.answer}}</span></p>
    </section>
  </main>
</template>

<script>
import { getVarsByPage } from "../../api/variables";
export default {
  name: "faq.vue",
  data() {
    return {
      title: "Часто задаваемые вопросы",
      description:
        "Здесь собраны самые часто задаваемые вопросы касательно монтажа ограждений и ворот",
      keywords:
        "faq, монтаж заборов, покраска еврозаборов, как оформить заказ на еврозабор, скидки, акции",
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
        }
      ],
      fetchedVars: {}
    };
  },
  mounted() {
    getVarsByPage(this.$route.name).then(({ data }) => {
      console.log({ data });
      this.fetchedVars = data.data.variable;
    });
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
        { name: "og:url", content: this.$route.path },

        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.title
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