﻿<template>
  <div class="box">
    <p v-if="error.statusCode === 404" class="huge-font msg">
      Страница не найдена
    </p>
    <ul v-if="error.statusCode === 404" class="pages">
      <p class="big-font">Доступные страницы:</p>
      <li v-for="(link, pageIdx) in staticLinks" :key="pageIdx">
        <nuxt-link
          :to="link.path"
          class="page medium-font"
          v-if="!link.children"
          >{{ pageIdx + 1 }}. {{ link.name }}</nuxt-link
        >

        <p class="page medium-font" v-if="link.children">
          {{ pageIdx + 1 }}. {{ link.name }}
        </p>

        <ul class="subpages" v-if="link.children">
          <li
            v-for="(sublink, subpageIdx) in link.children"
            :key="subpageIdx + 'sub'"
          >
            <nuxt-link
              class="subpage base-font"
              :to="
                link.path + '/' + replaceWithDash(sublink.path || sublink.name)
              "
              >{{ pageIdx + 1 }}.{{ subpageIdx + 1 }}
              {{ sublink.name }}</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { replaceWithDash } from "../static/utils";

export default {
  props: ["error"],
  // layout: "error" // you can set a custom layout for the error page
  name: "error.vue",
  methods: {
    replaceWithDash
  },
  head() {
    return {
      title: "Ошибка!"
    };
  },
  data() {
    return {
      staticLinks: [
        { name: "Главная", path: "/" },
        { name: "Выставки", path: "/expo" },
        {
          name: "Услуги",
          path: "/services",
          children: [
            { name: "Вызов замерщика", path: "zamer" },
            { name: "Доставка", path: "dostavka" },
            { name: "Заливка фундамента", path: "fundament" },
            { name: "Установка забора", path: "montazh" },
            { name: "Покраска еврозабора", path: "pokraska" }
          ]
        },
        { name: "Наши работы", path: "/blog" },
        { name: "Вопрос-ответ", path: "/faq" },
        { name: "Цены", path: "/prices" },
        { name: "Контакты", path: "/contact" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// .page {
//   min-height: 100vh;
// }
.box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
}
.msg {
  color: var(--red);
  margin-bottom: 50px;
}
.pages {
  text-align: left;
}
.page {
  color: var(--red);
}
.subpages {
  padding-left: 10px;
}
</style>
