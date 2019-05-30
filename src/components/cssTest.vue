<template>
  <div>
    <button class="blue">hellow</button>
    <button class="red">hellow</button>
  </div>
</template>

<script>
export default {
  name: "sm-css-test",
  props: {
    msg: String
  },
  methods: {}
};
</script>
<style lang="less" scoped>
button {
  border: none;
  outline: none;
  padding: 6px 12px;
  font-weight: 400px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  &.blue {
    background-color: var(--blue);
  }
  &.red {
    background-color: var(--red);
  }
}
</style>
