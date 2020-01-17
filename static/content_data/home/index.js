import zabor from "~/assets/img/fence/but/but_1.jpg";
import rabitsa from "~/assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import vorota from "~/assets/img/fence/fagot/fagot_1.jpg";
import stolbiki from "~/assets/img/fence/but_loza/but_loza_3.jpg";

//-----------
import measure from "~/assets/icons/measure.svg";
import cargo from "~/assets/icons/cargo.svg";
import brush from "~/assets/icons/brush.svg";
import fence from "~/assets/icons/fence.svg";

export default {
  hero: {
    section_heading: "Основная продукция",
    slider_items: [
      {
        img_src: zabor,
        img_alt: "Бетонные заборы",
        heading: "Бетонные заборы",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, expedita.",
        path: "/fence-koncrete"
      },
      {
        img_src: rabitsa,
        img_alt: "Забор из сетки",
        heading: "Забор из сетки",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet.",
        path: "/fence-rabitz"
      },
      {
        img_src: rabitsa,
        img_alt: "Забор из профнастила",
        heading: "Забор из профнастила",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, veritatis.",
        path: "/fence-steel"
      },

      {
        img_src: vorota,
        img_alt: "Ворота и калитки",
        heading: "Ворота и калитки",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem ipsum dolor sit amet consectetur adipisicing.",
        path: "/gates"
      },
      {
        img_src: stolbiki,
        img_alt: "Бетонные столбики",
        heading: "Бетонные столбики",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit? Lorem, ipsum dolor.",
        path: "/pillar"
      },
      {
        img_src: rabitsa,
        img_alt: "Садовые дорожки",
        heading: "Садовые дорожки",
        text:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquid minus aspernatur.",
        path: "/lane"
      }
    ]
  },
  services: {
    section_heading: "Услуги",
    section_subheading:
      "Дополнительно мы предоставляем услуги, связанные с установкой ограждений, бетонных заборов, ворот, калиток",
    card_list: [
      {
        icon: cargo,
        heading: "Доставка продукции и стройматериалов",
        // intro_txt:
        //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
        link: "/services"
      },
      {
        icon: fence,
        heading: "Установка заборов, ворот",
        // intro_txt:
        //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
        link: "/services"
      },
      {
        icon: brush,
        heading: "Покраска заборов",
        // intro_txt:
        //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
        link: "/services"
      },
      {
        icon: measure,
        heading: "Выезд замерщика",
        // intro_txt:
        //   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos consequuntur cumque aperiam dolore mollitia. Accusamus ipsa sed blanditiis incidunt tempora?",
        link: "/services"
      }
    ]
  }
};
