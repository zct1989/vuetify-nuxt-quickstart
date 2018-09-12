<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      页面内容写在这里1231
      <v-btn @click="ttt">123</v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Layout, Dependencies } from "~/core/decorator";
import { Component, Vue } from "nuxt-property-decorator";
import { LoginService } from "~/services/login.service";

@Layout("default", {
  padding: false
})
@Component
export default class extends Vue {
  @Dependencies(LoginService) private loginService: LoginService;
  ttt() {
    this.loginService.ttt().subscribe((data) => {
      console.log(data)
    });
  }
}
</script>