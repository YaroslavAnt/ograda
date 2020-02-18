<template>
  <table class="table base-font">
    <tbody>
      <tr
        class="table-row"
        v-for="(item,idx) in items"
        :key="idx"
      >
        <td class="table-cell">{{item.name}}</td>
        <td class="table-cell table-cell-price">{{item.price}}</td>
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
    }
  }
};
</script>

<style lang="scss" scoped>
  .table {
    border-collapse: collapse;
    width: 100%;
    margin-top: -40px;
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