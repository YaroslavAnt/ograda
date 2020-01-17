﻿import delivery from "~/assets/img/services/delivery.png";
import measure from "~/assets/img/services/measure.jpg";
import montage from "~/assets/img/services/montage.jpg";
import pokraska from "~/assets/img/services/but_paint.jpg";

export default {
  heading: "Дополнительные услуги",
  services: [
    {
      img_src: measure,
      img_alt: "Замер установки еврозабора",
      heading: "Замер установки еврозабора",
      paragraphs: [
        {
          text: `Стоимость замера по городу - 50грн, по области - по договоренности.`
        },
        {
          text: `После замера мы составляем точную смету и высылаем на почту или вайбер.`
        },
        {
          text: `Эту же распечатанную копию водитель Вам отдаст, когда привезет все материалы.`
        },
        { text: `Вызвать замерщика можно по телефону в контактах.` }
      ]
    },
    {
      img_src: delivery,
      img_alt: "Доставка еврозаборов по Запорожью и Запорожской области",
      heading: "Доставка еврозаборов",
      paragraphs: [
        {
          text: `Доставка плит и столбов на объект осуществляется бортовыми автомобилями с трехсторонней выгрузкой.`
        },
        {
          text: `Доставка является платной услугой. Для расчета стоимости доставки сообщите район установки и метраж забора.`
        },
        {
          text: `Транспортировка, перенос, отгрузка, складирование и установка плит производится строго вертикально.`
        }
      ]
    },
    {
      img_src: montage,
      img_alt: "Установка еврозаборов",
      heading: "Установка ограждений",
      paragraphs: [
        {
          text:
            "Стоимость установки одной секции еврозабора (плиты + столб) составляет 150-200 грн"
        },
        {
          text: "В стоимость установки входит:",
          list: [
            `- pазгрузка изделий на объекте заказчика;`,
            `- копание ям для бетонирования столбов;`,
            `- подготовка из сыпучих материалов бетона для столбов;`,
            `- выставление и бетонировка столбов в приготовленных ямах;`,
            `- монтаж плит по уровню;`,
            `- при необходимости - подрезка плит;`
          ]
        },
        {
          text: "В стоимость установки не входит:",
          list: [
            `- материалы для бетонировки столбов (щебень, песок и цемент);`,
            `- демонаж старого забора;`,
            `- замазка плит;`
          ]
        }
      ]
    },
    {
      img_src: pokraska,
      img_alt: "Покраска еврозабора в Запорожье",
      heading: "Покраска еврозабора",
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
  ]
};