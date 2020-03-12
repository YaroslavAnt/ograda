import goal from "../../../assets/icons/case.svg";
import time from "../../../assets/icons/time.svg";
import coins from "../../../assets/icons/prices.svg";
import shield from "../../../assets/icons/garanty.svg";
import choise from "../../../assets/icons/choise.svg";
import recycle from "../../../assets/icons/recycle.svg";

export default {
  about: {
    heading: "Несколько слов о компании",
    paragraphs: [
      {
        text:
          "Мы являемся одним из первых и основных производителей еврозаборов в Запорожье. " +
          "Предприятие основано в 2010 году и специализируется на установке бетонных заборов 'под ключ'."
      },
      {
        text:
          "Полностью берем на себя вопросы по доставке, сборке и установке всех необходимых строительных материалов для еврозабора."
      }
    ]
  },
  advantages: {
    section_intro: "Наши приемущества",
    card_list: [
      {
        icon: goal,
        heading:
          "10+ лет опыта производства ограждений. \n500+ обьектов выполненных работ"
      },
      {
        icon: recycle,
        heading: "Полный перечень услуг по установке заборов и ворот"
      },
      {
        icon: time,
        heading: "Выполнение работ в сжатые сроки"
      },
      {
        icon: coins,
        heading: "Товар по цене произврдителя"
      },
      {
        icon: shield,
        heading: "Высокое качество и гарантия работ"
      },

      {
        icon: choise,
        heading: "Большой асортимент продукции"
      }
    ]
  }
};
