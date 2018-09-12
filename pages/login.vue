<template>
  <v-layout px-4 column justify-center align-content-space-around fill-height style="background-color:#3c4454">
    <v-form ref="login-form" v-model="loginValid">
      <v-text-field dark solo label="用户名" v-model="loginModel.username" :rules="loginRules.username" :counter="20" required></v-text-field>
      <v-text-field dark solo label="密码" type="password" v-model="loginModel.password" :rules="loginRules.password" required></v-text-field>
    </v-form>
    <v-btn :disabled="!loginValid" @click="onLogin">
      登录
    </v-btn>
    <v-btn @click="onClear">重置</v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Layout } from "~/core/decorator";
import { Dependencies } from "~/core/decorator";
import { Component, Vue } from "nuxt-property-decorator";
import { LoginService } from "~/services/login.service";

@Layout("empty", {
  fill: true
})
@Component
export default class Login extends Vue {
  @Dependencies(LoginService) private loginService: LoginService;

  private loginModel = {
    username: "administrator",
    password: "888888"
  };

  private loginValid = true;

  private loginRules = {
    username: [
      value => !!value || "请输入用户名",
      value => (value && value.length <= 20) || "用户名在20个字符以内"
    ],
    password: [value => !!value || "请输入密码"]
  };

  private onLogin() {
    let loginForm = this.$refs["login-form"] as any;

    if (loginForm.validate()) {
      this.$router.replace("/");
      // this.loginService.login(this.loginModel).subscribe(
      //   async data => {
      //     await this.$store.dispatch("updateUserLoginData", data);
      //     this.$router.replace("/");
      //   },
      //   msg => {
      //     console.log(msg);
      //   }
      // );
    }
  }

  private onClear() {
    let loginForm = this.$refs["login-form"] as any;
    loginForm.reset();
  }
}
</script>