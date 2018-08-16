<template>
  <v-app>
    <v-content>
      <v-container :class="{'pa-0':!layoutConfig.padding}" :fill-height="layoutConfig.fill">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { State } from "vuex-class";

@Component
export default class extends Vue {
  @State layout;

  private readonly defaultConfig = {
    empty: {
      padding: false,
      fill: false
    }
  };

  get layoutConfig() {
    return Object.assign({}, this.defaultConfig, this.layout.empty);
  }
}
</script>