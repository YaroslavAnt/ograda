import lazySizes from "lazysizes";
import Vue from "vue";

if (process.client) {
  Vue.use(lazySizes);
}
