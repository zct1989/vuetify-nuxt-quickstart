<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      页面内容写在这里1231
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  layout: "empty"
})
export default class extends Vue {}
</script>