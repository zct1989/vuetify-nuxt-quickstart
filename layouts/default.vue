<template>
  <v-app class="app">
    <!--侧边栏-->
    <v-navigation-drawer :mini-variant.sync="miniVariant" v-model="leftDrawer" fixed app>
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
    <v-toolbar fixed app v-if="layoutConfig.toolbar" class="v-toolbar" flat dark>
      <!--左侧侧边栏开关-->
      <v-toolbar-side-icon @click="leftDrawer = !leftDrawer" v-if="layoutConfig.leftDrawer"></v-toolbar-side-icon>
      <!--返回上次菜单箭头-->
      <v-btn  flat icon v-if="layoutConfig.backDrawer" @click="$router.go(-1)" ><v-icon>arrow_back_ios</v-icon></v-btn>
      <!--页面标题-->
      <v-toolbar-title v-text="layoutConfig.title"></v-toolbar-title>
      <!--间距-->
      <v-spacer></v-spacer>
      <!--右侧侧边栏开关-->
      <v-btn icon @click.stop="rightDrawer = !rightDrawer" v-if="layoutConfig.rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
    <!--页面内容-->
    <v-content>
      <v-container :class="{'pa-0':!layoutConfig.padding}" :fill-height="layoutConfig.fill">
        <nuxt />
      </v-container>
    </v-content>
    <!--右侧侧边栏-->
    <v-navigation-drawer temporary :right="true" v-model="rightDrawer" fixed>
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
  </v-app>
</template>

<script lang="ts">
import { Middleware } from "~/core/decorator";
import { Component, Vue } from "nuxt-property-decorator";
import { namespace } from "vuex-class";
const LayoutModule = namespace('layout')

@Middleware("auth")
@Component
export default class extends Vue {
  @LayoutModule.State('default') layout;

  private readonly defaultConfig = {
    toolbar: true,
    padding: true,
    title: "test",
    leftDrawer: true,
    rightDrawer: false,
    fill: false
  };

  get layoutConfig() {
    return Object.assign({}, this.defaultConfig, this.layout);
  }

  private leftDrawer = false;
  private rightDrawer = false;

  private clipped = false;
  private fixed = false;
  private miniVariant = false;

  private leftMenuList = [
    { icon: "apps", title: "菜单一", to: "/" },
    { icon: "bubble_chart", title: "菜单二", to: "/inspire" }
  ];

  private rightMenuList = [
    { icon: "apps", title: "菜单一", to: "/" },
    { icon: "bubble_chart", title: "菜单二", to: "/inspire" }
  ];
}
</script>
<style lang="less">
  .app{
    .container{
      padding: 0!important;
    }
    .v-toolbar{
      background: rgb(100,161,235)!important;
    }
  }
</style>
