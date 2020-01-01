<template>
  <main>
    <app-section v-for="(price, idx) in prices" :key="idx" class="section" :heading="price.heading">
      <app-table :items="price.items" />
    </app-section>
  </main>
</template>

<script>
import section from "../../components/layout/section";
import TableVue from "../../components/common/Table.vue";

import { fence_set } from "../../static/fence_data";
import { pillar_set } from "../../static/pillar_data";

export default {
  name: "index.vue",
  components: {
    "app-section": section,
    "app-table": TableVue
  },
  data() {
    return {
      prices: [
        {
          heading: "Цены на заборы в Запорожье",
          items: fence_set
        },
        {
          heading: "Цены на столбики для еврозабора, для винограда в Запорожье",
          items: pillar_set
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>