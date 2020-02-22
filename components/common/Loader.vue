<template>
  <div
    class="page-loader"
    v-if="isSpinnerActive"
  >

    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "loader.vue",
  computed: {
    ...mapGetters({
      isSpinnerActive: "common/getLoaderState"
    })
  }
};
</script>

<style lang="scss" scoped>
  .page-loader {
    background: rgba(50, 64, 91, 0.2);
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 50000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .lds-dual-ring {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 100px;
    height: 100px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--red);
    border-color: var(--red) transparent var(--red) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>