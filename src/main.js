import Vue from "vue";
import App from "./App.vue";
import theme from "@/components/theme.vue";

Vue.config.productionTip = false;
Vue.component("theme", theme);
new Vue({
  render: h => h(App)
}).$mount("#app");
