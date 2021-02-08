<template>
  <div id="app">
    <main-tab-bar v-if="!/^\/detail/.test($route.path)"/>
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import MainTabBar from "@components/content/mainTabBar/MainTabBar";

export default {
  name: 'App',
  components: {
    MainTabBar,
  }
}
</script>

<style>

</style>
