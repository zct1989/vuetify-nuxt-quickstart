<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6 align-center justify-center align-content-center>
      <v-form ref="login-form" v-model="loginValid">
        <v-text-field label="Name" v-model="loginModel.name" :rules="loginRules.name" :counter="10" required></v-text-field>
        <v-text-field label="E-mail" v-model="loginModel.email" :rules="loginRules.email" required></v-text-field>
        <v-btn :disabled="!loginValid" @click="onLogin">
          登录
        </v-btn>
        <v-btn @click="onClear">重置</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Layout } from "~/core/decorator";
import { Dependencies } from "~/core/decorator";
import { Component, Vue } from "nuxt-property-decorator";
import { UserService } from "~/services/user.service";

@Layout("default")
@Component
export default class Login extends Vue {
  @Dependencies(UserService) 
  private userService: UserService;

  private loginModel = {
    name: "",
    password: ""
  };

  private loginValid = true;

  private loginRules = {
    name: [
      value => !!value || "Name is required",
      value =>
        (value && value.length <= 10) || "Name must be less than 10 characters"
    ],
    email: [
      value => !!value || "E-mail is required",
      value => /.+@.+/.test(value) || "E-mail must be valid"
    ]
  };

  private onLogin() {
    let loginForm = this.$refs["login-form"] as any;

    if (loginForm.validate()) {
       this.$router.push('/')
      // this.userService
      //   .login({
      //     username: "123",
      //     password: "asdsd"
      //   })
      //   .subscribe(user => {

      //   }, msg => {
      //     console.log(123123123)
         
      //   });
    }
  }

  private onClear() {
    let loginForm = this.$refs["login-form"] as any;
    loginForm.reset();
  }
}
</script>