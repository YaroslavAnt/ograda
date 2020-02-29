<template>
  <div class="box">
    <p class="huge-font msg">Страница не найдена</p>
    <nuxt-link
      to='/'
      class="base-font"
    >Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "404.vue"
};
</script>

<style lang="scss" scoped>
  .box {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    flex-direction: column;
    text-align: center;
  }
  .msg {
    color: var(--red);
    margin-bottom: 50px;
  }
</style>