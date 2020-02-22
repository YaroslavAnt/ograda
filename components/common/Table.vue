<template>
  <table class="table base-font">
    <thead>
      <tr>
        <th
          class="table-head medium-font"
          colspan="2"
        >{{heading}}</th>
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
          class="table-cell"
          itemprop="name"
        >{{item.name}}</td>
        <td
          class="table-cell table-cell-price"
          itemprop="price"
        ><span
            itemprop="priceCurrency"
            content="UAH"
          >&#8372;</span> {{item.price}}</td>
        <!-- <td class="table-cell table-cell-image" v-if="item.img_src">
          <app-image :img_src="item.img_src" :img_alt="item.img_alt" :ratio="67" />
        </td>-->
      </tr>
    </tbody>
  </table>
</template>

<script>
import ImageBaseVue from "./ImageBase.vue";
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
    heading: {
      type: String,
      default: ""
    }
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
        background-color: #ccc;
      }
    }

    &-cell {
      vertical-align: middle;
      border: 1px solid #aaa;
      padding: 12px 24px;

      &-price {
        width: 30%;
      }

      &-image {
        width: 50%;
      }
    }
  }
</style>