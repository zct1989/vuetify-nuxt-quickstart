<template>
  <v-layout column justify-center align-center>
    <div class="pa-3">
      登录过期，请返回首页重新登录
    </div>
    <v-btn @click="$router.replace('/login')">
      重新登录
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { Layout } from "~/core/decorator";
@Layout("empty", {
  fill: true
})
@Component
export default class extends Vue {}
</script>