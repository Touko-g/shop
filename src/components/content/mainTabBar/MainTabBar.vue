<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <template #item-icon><div class="iconfont icon-shouye"></div></template>
      <template #item-text class="itemInfo">首页</template>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="red">
      <template #item-icon><div class="iconfont icon-leimupinleifenleileibie"></div></template>
      <template #item-text class="itemInfo">分类</template>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="red">
      <template #item-icon><div class="iconfont icon-gouwuchekong"></div></template>
      <template #item-text class="itemInfo">购物车</template>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="red">
      <template #item-icon><div class="iconfont icon-wode"></div></template>
      <template #item-text class="itemInfo">我的</template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    import TabBarItem from "../../common/tabbar/TabBarItem";
    import TabBar from "../../common/tabbar/TabBar";

    export default {
        name: "MainTabBar",
        components:{
          TabBarItem,
          TabBar
        }
    }
</script>

<style scoped>
  @import "../../../assets/css/base.css";
  @import "../../../assets/css/iconStyle.css";
  .iconfont{
    font-size: 25px;
  }
  .itemInfo{
    font-size: 15px;
  }
</style>
