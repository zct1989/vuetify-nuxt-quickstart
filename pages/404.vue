<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      我迷路了
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