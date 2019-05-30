<template>
  <div id="app">
    <theme ref="theme"></theme>
    <cssTest/>
    <input type="color" v-model="theme.red" @change="change">
    <input type="color" v-model="theme.blue" @change="change">
    <button @click="addTheme">change</button>
    <button @click="reset">reset</button>
  </div>
</template>

<script>
import cssTest from "./components/cssTest.vue";
export default {
  name: "app",
  data() {
    return {
      primary: "",
      theme: {
        blue: "",
        red: ""
      }
    };
  },
  components: {
    cssTest
  },
  mounted() {},
  methods: {
    change() {
      this.$refs.theme.addTheme("template", this.theme).use("template");
    },
    reset() {
      this.$refs.theme.use("default");
    },
    addTheme() {
      this.$refs.theme
        .addTheme("test", {
          blue: "red",
          red: "blue"
        })
        .use("test");
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
