<template>
  <v-app>
    <!--侧边栏-->
    <v-navigation-drawer :mini-variant.sync="miniVariant" :clipped="clipped" v-model="drawer" fixed app>
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in leftMenuList" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--顶部工具条-->
    <v-toolbar fixed app :clipped-left="clipped">
      <!--左侧侧边栏开关-->
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <!--页面标题-->
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <!--间距-->
      <v-spacer></v-spacer>
      <!--右侧侧边栏开关-->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <!--页面内容-->
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <!--右侧侧边栏-->
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in rightMenuList" exact>
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--页脚-->
    <v-footer :fixed="fixed" app>
      <span>fintercher&copy;2018</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class extends Vue {
  private leftMenuList = [
    { icon: "apps", title: "菜单一", to: "/" },
    { icon: "bubble_chart", title: "菜单二", to: "/inspire" }
  ];

  private rightMenuList = [
    { icon: "apps", title: "菜单一", to: "/" },
    { icon: "bubble_chart", title: "菜单二", to: "/inspire" }
  ];

  private clipped = false;
  private drawer = true;
  private fixed = false;
  private miniVariant = false;
  private right = true;
  private rightDrawer = false;
  private title = "Vuetify.js";
}
</script>