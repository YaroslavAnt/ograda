<template>
  <input :style="{background:color}" :value="text" :type="type || 'button'" />
</template>

<script>
export default {
  name: "Button.vue",
  props: ["width", "text", "color", "type"]
};
</script>
<style lang="scss" scoped>
  input {
    /* min-height: 54px; */
    /* width: 100%;
              max-width: 400px; */
    padding: 10px 20px;
    font-weight: 400;
    font-size: 24px;
    background: var(--red);
    border-radius: 4px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: "Montserrat", "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;

    &:hover {
      opacity: 0.9;
    }
  }
</style>
