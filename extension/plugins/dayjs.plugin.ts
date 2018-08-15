import Vue from 'vue'
import dayjs from "dayjs";

export default {
  install() {
    Vue.prototype.$dayjs = dayjs
  }
}
