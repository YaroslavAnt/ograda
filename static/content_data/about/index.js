import goal from "~/assets/icons/goal.svg";
import flag from "~/assets/icons/flag.svg";
import coins from "~/assets/icons/coins.svg";
import shield from "~/assets/icons/shield.svg";

//-----------------------expo
import expo1 from "~/assets/img/expositions/zp/expo1.jpg";
import expo2 from "~/assets/img/expositions/zp/expo2.jpg";
import expo3 from "~/assets/img/expositions/zp/expo3.jpg";
import expo4 from "~/assets/img/expositions/zp/expo4.jpg";
import expo5 from "~/assets/img/expositions/zp/expo5.jpg";

import expo1_tokmak from "~/assets/img/expositions/tokmak/expo1.jpg";

import expo1_ch from "~/assets/img/expositions/chernigovka/expo1.jpg";
import expo2_ch from "~/assets/img/expositions/chernigovka/expo2.jpg";
import expo3_ch from "~/assets/img/expositions/chernigovka/expo3.jpg";
import expo4_ch from "~/assets/img/expositions/chernigovka/expo4.jpg";
import expo5_ch from "~/assets/img/expositions/chernigovka/expo5.jpg";

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
        heading: "10+ лет опыта производства ограждений"
      },
      {
        icon: flag,
        heading: "500+ обьектов выполненных работ"
      },
      {
        icon: coins,
        heading: "Умеренные цены"
      },
      {
        icon: shield,
        heading: "Высокое качество и гарантия работ"
      }
    ]
  },
  expo: {
    heading: "Выставки",
    expositions: [
      {
        img_set: [expo1, expo2, expo3, expo4, expo5],
        name: "Выставка еврозабора в Запорожье",
        place: `Приглашаем посетить нашу выставку еврозабора, которая находится на пересечении трассы Москва-Симферополь и ул.Мокрянской (район "Калантыровки").`
      },
      {
        img_set: [expo1_tokmak],
        name: "Выставка еврозабора в Токмаке",
        place: `Выставка еврозабора серого и цветного в Токмаке, которая расположена напротив Автовокзала.`
      },
      {
        img_set: [expo1_ch, expo2_ch, expo3_ch, expo4_ch, expo5_ch],
        name: "Выставка еврозабора в Черниговке",
        place: `Выставка еврозабора в Черниговке на пересечении улиц Советской и Гоголя.`
      }
    ]
  }
};
