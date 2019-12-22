import but_1 from "../../assets/img/fence/but/but_1.jpg";
import but_2 from "../../assets/img/fence/but/but_2.jpg";
import but_3 from "../../assets/img/fence/but/but_3.jpg";

import but_loza_1 from "../../assets/img/fence/but_loza/but_loza_1.jpg";
import but_loza_2 from "../../assets/img/fence/but_loza/but_loza_2.jpg";
import but_loza_3 from "../../assets/img/fence/but_loza/but_loza_3.jpg";

import but_rovnyi_1 from "../../assets/img/fence/but_rovnyi/but_rovnyi_1.jpg";
import but_rovnyi_2 from "../../assets/img/fence/but_rovnyi/but_rovnyi_2.jpg";

import fagot_1 from "../../assets/img/fence/fagot/fagot_1.jpg";
import fagot_2 from "../../assets/img/fence/fagot/fagot_2.jpg";
import fagot_3 from "../../assets/img/fence/fagot/fagot_3.jpg";
import fagot_4 from "../../assets/img/fence/fagot/fagot_4.jpg";
import fagot_5 from "../../assets/img/fence/fagot/fagot_5.jpg";
import fagot_6 from "../../assets/img/fence/fagot/fagot_6.jpg";
import fagot_7 from "../../assets/img/fence/fagot/fagot_7.jpg";
import fagot_8 from "../../assets/img/fence/fagot/fagot_8.jpg";
import fagot_9 from "../../assets/img/fence/fagot/fagot_9.jpg";

import krym_1 from "../../assets/img/fence/krym/krym_1.jpg";
import krym_2 from "../../assets/img/fence/krym/krym_2.jpg";
import krym_3 from "../../assets/img/fence/krym/krym_3.jpg";
import krym_4 from "../../assets/img/fence/krym/krym_4.jpg";
import krym_5 from "../../assets/img/fence/krym/krym_5.jpg";
import krym_6 from "../../assets/img/fence/krym/krym_6.jpg";
import krym_7 from "../../assets/img/fence/krym/krym_7.jpg";

import loza_1 from "../../assets/img/fence/loza/loza_1.jpg";
import loza_2 from "../../assets/img/fence/loza/loza_2.jpg";

import zabor_iz_profnastila1 from "../../assets/img/fence/profnastil/zabor_iz_profnastila1.jpg";
import zabor_iz_profnastila2 from "../../assets/img/fence/profnastil/zabor_iz_profnastila2.jpg";
import zabor_iz_profnastila3 from "../../assets/img/fence/profnastil/zabor_iz_profnastila3.jpg";
import zabor_iz_profnastila4 from "../../assets/img/fence/profnastil/zabor_iz_profnastila4.jpg";
import zabor_iz_profnastila5 from "../../assets/img/fence/profnastil/zabor_iz_profnastila5.jpg";
import zabor_iz_profnastila6 from "../../assets/img/fence/profnastil/zabor_iz_profnastila6.jpg";
import zabor_iz_profnastila7 from "../../assets/img/fence/profnastil/zabor_iz_profnastila7.jpg";

export const fence_set = [
  {
    img_src: but_3,
    img_set: [but_1, but_2, but_3],
    img_alt: 'еврозабор "Бут"',
    name: 'Плита "Бут"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      // not required
      type: "sale",
      label: "Cкидка",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "123456",
    category: "забор",
    subcategory: "еврозабор",
    isPopular: true // not required
  },
  {
    img_src: but_loza_3,
    img_set: [but_loza_1, but_loza_2, but_loza_3],
    img_alt: 'еврозабор "Бут-Лоза"',
    name: 'Плита "Бут-Лоза"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",

    id: "223456",
    category: "забор",
    subcategory: "еврозабор"
  },
  {
    img_src: but_rovnyi_1,
    img_set: [but_rovnyi_1, but_rovnyi_2],
    img_alt: 'еврозабор "Бут ровный"',
    name: 'Плита "Бут ровный"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      type: "sale",
      label: "Cкидка -50%",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "323456",
    category: "забор",
    subcategory: "еврозабор"
  },
  {
    img_src: fagot_2,
    img_set: [
      fagot_1,
      fagot_2,
      fagot_3,
      fagot_4,
      fagot_5,
      fagot_6,
      fagot_7,
      fagot_8,
      fagot_9
    ],
    img_alt: 'еврозабор "Фагот"',
    name: 'Плита "Фагот"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      type: "sale",
      label: "Акция",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "423456",
    category: "забор",
    subcategory: "еврозабор",
    isPopular: true
  },
  {
    img_src: krym_1,
    img_set: [krym_1, krym_2, krym_3, krym_4, krym_5, krym_6, krym_7],
    img_alt: 'еврозабор "Крым"',
    name: 'Плита "Крым"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      type: "sale",
      label: "Новинка",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "523456",
    category: "забор",
    subcategory: "еврозабор"
  },
  {
    img_src: loza_1,
    img_set: [loza_1, loza_2],
    img_alt: 'еврозабор "Лоза"',
    name: 'Плита "Лоза"',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      type: "sale",
      label: "Новинка",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "623456",
    category: "забор",
    subcategory: "еврозабор"
  },
  {
    img_src: zabor_iz_profnastila1,
    img_set: [
      zabor_iz_profnastila1,
      zabor_iz_profnastila2,
      zabor_iz_profnastila3,
      zabor_iz_profnastila4,
      zabor_iz_profnastila5,
      zabor_iz_profnastila6,
      zabor_iz_profnastila7
    ],
    img_alt: "забор из профнастила",
    name: "Забор из профнастила",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quaerat.",
    price: "160грн",
    option: {
      type: "sale",
      label: "Новинка",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "723456",
    category: "забор",
    subcategory: "забор из профнастила",
    isPopular: true
  }
];
