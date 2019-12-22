<template>
  <div class="logo">
    <!-- <img class="logo-img" src="../../assets/img/fence.png" alt="fence" /> -->
    <p class="logo-text big-font">ograda.zp.ua</p>
    <!-- <img class="logo-img" src="../../assets/img/fence.png" alt="fence" /> -->
    <span class="logo-about small-font">
      Производство и установка
      <br />всех видов ограждений
    </span>
  </div>
</template>

<style lang="scss" scoped>
  .logo {
    display: flex;
    align-items: center;

    &-text {
      padding: 5px;
      background-size: 73%;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("../../assets/img/fence_logo.png");
      // font-family: "Pacifico", cursive;
      color: var(--dark);
      font-weight: 600;
    }
  }
</style>

<script>
export default {
  name: "Logo.vue"
};
</script>