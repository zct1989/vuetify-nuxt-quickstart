<template>
  <v-layout column justify-center align-center>
    <v-toolbar></v-toolbar>
    <v-flex xs12 sm8 md6>
      页面内容写在这里1231
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Layout } from "~/core/decorator";
import { Component, Vue } from "nuxt-property-decorator";


@Layout("default", {
  toolbar: true,
  padding: false
})
@Component
export default class extends Vue {}
</script>