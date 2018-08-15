import Vue from 'vue'
import VueRouter from 'vue-router'
// 扩展vue接口
declare module 'vue/types/vue' {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $router: VueRouter
  }
}


declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    layout?: string;
  }
}