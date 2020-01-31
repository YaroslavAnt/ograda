import lane_1 from "../../assets/img/lane/stone/lane_1.jpg";
import lane_2 from "../../assets/img/lane/stone/lane_2.jpg";
import lane_3 from "../../assets/img/lane/stone/lane_3.jpg";

import romb_1 from "../../assets/img/lane/romb/romb_1.jpg";
import romb_2 from "../../assets/img/lane/romb/romb_2.jpg";
import romb_3 from "../../assets/img/lane/romb/romb_3.jpg";

import srez_1 from "../../assets/img/lane/tree/srez_1.png";
import srez_2 from "../../assets/img/lane/tree/srez_2.jpg";
import srez_3 from "../../assets/img/lane/tree/srez_3.jpg";

export const lanes_set = [
  {
    img_set: [lane_1, lane_2, lane_3],
    img_alt: 'Плитка "Травница (булыжник)"',
    name: 'Плитка "Травница" (булыжник)',
    description: [
      'Плитка "травница" - разновидность садовой плитки с фигурными сквозными отверстиями размером 50х50см и толщиной 7,5см.'
    ],
    price: "70 грн/шт",
    option: {
      // not required
      type: "sale",
      label: "Cкидка",
      details: "На данный товар с 01.11.19 действует скидка в размере 50%"
    },
    id: "lane123456",
    category: "дорожки",
    subcategory: "Садовые дорожки",
    isPopular: true // not required
  },
  {
    img_set: [romb_1, romb_2, romb_3],
    img_alt: 'Плитка "Травница (ромб)"',
    name: 'Плитка "Травница" (ромб)',
    description: [
      `Плитка типа "Ромб" представляет собой бетонную армированную решетку размерами 40x60см и толщиной 7,5см.`,
      `Оригинальная форма позволяет применять ее в виде тропинок на дачном участке или в саду, а также для организации площадки для парковки авто.`
    ],
    price: "70 грн/шт",
    id: "lane123457",
    category: "дорожки",
    subcategory: "Садовые дорожки"
  },
  {
    img_set: [srez_1, srez_2, srez_3],
    img_alt: 'Плитка "Срез дерева"',
    name: 'Плитка "Срез дерева"',
    description: [
      `Оригинальная бетонная тротуарная плитка, предельно натурально передающая цвет и фактуру торцевых спилов стволов крупных деревьев.`
    ],
    price: "65 грн (серая), 130грн (цветная)",
    id: "lane123458",
    category: "дорожки",
    subcategory: "Садовые дорожки"
  }
];
