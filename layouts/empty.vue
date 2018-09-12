<template>
  <v-app class="app">
    <v-content>
      <v-container :class="{'pa-0':!layoutConfig.padding}" :fill-height="layoutConfig.fill">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { namespace } from "vuex-class";
const LayoutModule = namespace('layout')

@Component
export default class extends Vue {
  @LayoutModule.State('empty') layout;

  private readonly defaultConfig = {
    empty: {
      padding: false,
      fill: false
    }
  };

  get layoutConfig() {
    return Object.assign({}, this.defaultConfig, this.layout);
  }
}
</script>
