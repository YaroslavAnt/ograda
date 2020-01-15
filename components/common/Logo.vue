<template>
  <div class="logo">
    <!-- <img class="logo-img" src="../../assets/img/fence.png" alt="fence" /> -->
    <nuxt-link
      to='/home'
      class="logo-text big-font"
    >ograda.zp.ua</nuxt-link>
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
      padding: 10px;
      background-size: 73%;
      background-repeat: no-repeat;
      background-position: center;
      background-image: url("../../assets/img/fence_logo.png");
      // font-family: "Pacifico", cursive;
      color: var(--dark);
      font-weight: 600;
      cursor: pointer;
    }
    &-about {
      display: none;
      @media (min-width: 1024px) {
        display: block;
      }
    }
  }
</style>

<script>
export default {
  name: "Logo.vue"
};
</script>