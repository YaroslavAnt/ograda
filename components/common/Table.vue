<template>
  <table class="table base-font">
    <thead>
      <tr>
        <th
          class="table-head medium-font"
          colspan="2"
        >{{category.toUpperCase()}}</th>
      </tr>
    </thead>
    <tbody>
      <tr
        class="table-row"
        v-for="(item,idx) in items"
        :key="idx"
        itemscope
        itemtype="http://schema.org/Offer"
      >
        <td
          class="table-cell table-cell-name"
          itemprop="name"
        >

          <nuxt-link
            v-if="withLinks"
            :to='`products/${replaceWithDash(category)}/${replaceWithDash(item.name) }`'
          >{{item.name}}</nuxt-link>
          <span v-else>{{item.name}}</span>
        </td>
        <td
          class="table-cell table-cell-price"
          itemprop="price"
        ><span
            itemprop="priceCurrency"
            content="UAH"
          >&#8372;</span> {{item.price}}</td>

      </tr>
    </tbody>
  </table>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
import { replaceWithDash } from "../../static/utils";
export default {
  name: "Table.vue",
  components: {
    "app-image": ImageBaseVue
  },
  props: {
    items: {
      type: Array,
      default: () => [{}]
    },
    category: {
      type: String,
      default: ""
    },
    withLinks: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    replaceWithDash
  }
};
</script>

<style lang="scss" scoped>
  .table {
    border-collapse: collapse;
    width: 100%;

    &-head {
      color: var(--red);
      font-weight: bold;
    }
    &-row {
      &:nth-child(2n + 1) {
        background-color: var(--white);
      }
    }

    &-cell {
      vertical-align: middle;
      border: 1px solid #aaa;
      padding: 12px;
      &-name {
        &:hover {
          color: var(--red);
        }
      }

      &-price {
        width: 30%;
      }

      &-image {
        width: 50%;
      }
    }
  }
</style>