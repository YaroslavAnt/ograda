<template>
  <div class="logo">
    <!-- <img class="logo-img" src="../../assets/img/fence.png" alt="fence" /> -->
    <nuxt-link
      to='/'
      class="logo-text big-font"
      title="Вернуться на главную"
    >ograda.zp.ua</nuxt-link>
    <!-- <img class="logo-img" src="../../assets/img/fence.png" alt="fence" /> -->
    <span class="logo-about">
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
    padding: 10px 0;
    background-size: 73%;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../../assets/img/fence_logo.png");
    color: var(--dark);
    font-weight: 600;
    cursor: pointer;
  }
  &-about {
    display: none;
    @media (min-width: 1200px) {
      font-size: 14px;
      line-height: 1.2;
      display: block;
      margin-left: 12px;
    }
  }
}
</style>

<script>
export default {
  name: "Logo.vue"
};
</script>