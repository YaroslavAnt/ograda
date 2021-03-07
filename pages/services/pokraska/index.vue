<template>
  <main>
    <h1 class="heading with-skewed-bg">{{ serviceObj.title }}</h1>
    <app-section class="section">
      <!-- <app-intro
        :img_set="serviceObj.img_src"
        :img_alt="serviceObj.img_alt"
        :paragraphs="serviceObj.paragraphs"
        :withBorder="true"
      /> -->
      <h2 class="h3">
        Покраска бетонного забора. Виды и технологии покраски.
      </h2>
      <p class="p">
        Если вы хотите придать индивидуальности вашему ограждению, то этот вид
        работ предоставляет возможность сделать забор намного красивее, а также
        продлить срок службы.
      </p>
      <section>
        <h3 class="h4">Кислотная покраска</h3>
        <p class="p">
          <img
            src="../../../assets/img/services/pokraska-zabora-iz-betonnyh-blokov.jpg"
            alt=""
            width="300px"
            class="right-floated"
          />
          <strong>Кислотные красители</strong> – чрезвычайно популярные средства
          для покраски бетонных конструкций. Их преимущество в глубоком
          проникновении пигмента, которое достигается за счет химической реакции
          кислот и двуокиси кальция.
        </p>
        <h4 class="h4">Основные цвета красителя</h4>
        <img
          src="../../../assets/img/services/kislotniy.jpg"
          alt="Покраска еврозабора"
          width="300px"
          class="left-floated"
        />
        <ul>
          <li>темно-коричневый</li>
          <li>черный</li>
          <li>красно-коричневый</li>
          <li>коричнево-рыжий</li>
          <li>желтый</li>
          <li>янтарно-коричневый</li>
        </ul>
        <h4 class="h4">Подготовка поверхности и дальнейшее ее окрашивание</h4>
        <img
          src="../../../assets/img/services/pokraska_1.jpg"
          alt="Покраска еврозабора"
          width="300px"
          class="right-floated"
        />
        <p class="p">
          Самое основное поверхность ни в коем случае не должна чем-либо
          вскрываться до этого (грунтовка, покраска либо мытье какими-либо
          моющими средствами), иначе реакция кислотного красителя не будет
          протекать как положено, и вы не достигнете желаемого результата.
        </p>
        <p class="p">
          И так ваша задача при подготовке убрать всю пыль с окрашиваемой
          поверхности. После чего кислота разводится в определенных пропорциях с
          водой, от пропорции зависит на сколько будет насыщенный желаемый цвет.
          После чего кислота наноситься на поверхность кисточкой или валиком.
          Реакция проходит несколько часов, после чего, чтобы остановить реакцию
          кислоты, ее смывают водой.
        </p>
        <p class="p">
          Для получения глянца, мы дополнительно покрываем окрашенное изделие
          лаком для бетона.
        </p>
      </section>
      <section>
        <h3 class="h4">Фасадный краситель</h3>
        <img
          src="../../../assets/img/services/palitra.jpg"
          alt="Покраска еврозабора"
          width="300px"
          class="left-floated"
        />
        <p class="p">
          <strong>Фасадная краска</strong> предназначена для окрашивания фасадов
          зданий, обладает повышенной стойкостью к атмосферным воздействиям,
          таких как высокие температурные воздействия, атмосферные осадки,
          солнечные лучи, ветер и т.д. Есть большой выбор цветов.
        </p>
        <p class="base-font">
          Подготовка к покраске фасадными красителями похожа на подготовку, как
          и кислотных. Для начала поверхность тщательно очищается от:
        </p>
        <ul>
          <li>пятен жира</li>
          <li>частиц металла</li>
          <li>грязи и пыли</li>
          <li>мусора</li>
          <li>остатков старого покрытия (если они присутствуют)</li>
        </ul>
        <br />
        <img
          src="../../../assets/img/services/dekorativnyj-betonnyj-zabor.jpg"
          alt="Покраска еврозабора"
          width="300px"
          class="right-floated"
        />
        <p class="p">
          Одним из отличий является предварительная покрытие поверхности
          грунтовкой глубокого проникновения, что в дальнейшем уменьшает расход
          фасадного красителя.
        </p>
        <p class="p">
          Фасадный краситель наноситься кисточкой, валиком, а самый экономный
          вариант это краскопультом. Фасадный краситель наноситься в несколько
          слоев.
        </p>
      </section>
    </app-section>
  </main>
</template>

<script>
import IntroVue from "~/components/common/Intro.vue";
import sectionVue from "~/components/layout/section.vue";
import pokraska from "~/assets/img/services/but_paint.jpg";
import zvetnoi_zabor2 from "../../../assets/img/services/zvetnoi_zabor2.jpg";
// import zvetnoi_zabor3 from "../../../assets/img/services/zvetnoi_zabor3.jpg";
// import zvetnoi_zabor4 from "../../../assets/img/services/zvetnoi_zabor4.jpg";
import { DOMAIN } from "../../../config";

export default {
  name: "index.vue",
  head() {
    return {
      title: this.serviceObj.title,
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
          content: this.serviceObj.title
        },
        {
          property: "og:description",
          content: this.description
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: DOMAIN + this.$route.path },
        { property: "og:image", content: DOMAIN + zvetnoi_zabor2 },
        // Twitter Card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content: this.serviceObj.title
        },
        {
          name: "twitter:description",
          content: this.description
        },
        { name: "twitter:image", content: DOMAIN + zvetnoi_zabor2 },
        {
          name: "twitter:image:alt",
          content: this.serviceObj.img_alt
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

  // mounted() {
  //   this.$store.commit("common/CLOSE_MENU");
  // },
  data() {
    return {
      fetchedVars: {},
      DOMAIN,
      keywords: `покраска еврозаборов, покраска бетонного забора, кислотная покраска, цветной еврозабор, покраска еврозабора цена, приемущества кислотной окраски`,
      // title: "Доставка еврозаборов и строительных материалов",
      description:
        "Услуги по покраске бетонных еврозаборов. Покраска за один день.",
      serviceObj: {
        // img_src: [zvetnoi_zabor2, zvetnoi_zabor3, zvetnoi_zabor4],
        id: "pokraska",
        img_alt: "Покраска еврозабора в Запорожье",
        title: "Покраска еврозабора",
        paragraphs: [
          { text: "Забор окрашивается после монтажа." },
          {
            text:
              "Возможная палитра цветов - от светло-бежевого до темно-коричневого."
          },
          {
            text:
              "Покраска выполняется нашим сотрудником непосредственно на объекте, используя специальный кислотный краситель."
          },
          {
            text: "Приемущества кислотной окраски:",
            list: [
              "- крашенные таким образом бетонные заборы имеют повышенную стойкость к выцветанию;",
              "- заборы приобретают очень красивый глянцевый цвет с переливами, которого не достичь с помощью обычной краски;"
            ]
          },
          {
            text:
              "Стоимость покраски еврозабора зависит от насыщенности и глубины оттенка."
          }
        ]
      }
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
  margin: 40px 16px -20px;
  &::before {
    background-color: var(--green);
  }

  @media (min-width: 600px) {
    font-size: 28px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
    margin: 40px 32px -20px;
  }
}
img {
  max-width: 50%;
}
ul {
  list-style: disc;
  padding-left: 40px;
}
.left-floated {
  float: left;
  padding-right: 15px;
  margin-right: 15px;
}
.right-floated {
  float: right;
  padding-left: 15px;
  margin-left: 15px;
}
h3,
h4 {
  clear: both;
}
</style>
