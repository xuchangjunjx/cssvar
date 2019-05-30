<template>
  <div v-html="styles"></div>
</template>
<script>
import defaultTheme from "@/theme/default";
export default {
  name: "sm-style",
  data() {
    return {
      currentTheme: "default",
      themes: {
        default: defaultTheme
      }
    };
  },
  methods: {
    addTheme(name, config) {
      this.themes[name] = config;
      return this;
    },
    use(name) {
      this.currentTheme = name;
      return this;
    },
    getTheme() {
      return this.themes[this.currentTheme];
    }
  },

  computed: {
    styles() {
      let s = [];
      let theme_ = this.getTheme();
      console.log(theme_);
      for (let key in theme_) {
        s.push(`--${key}:${theme_[key]};`);
      }
      return `<style>:root{${s.join("\n")}}</style>`;
    }
  }
};
</script>

