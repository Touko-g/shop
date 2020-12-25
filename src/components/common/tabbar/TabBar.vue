<template>
  <div class="tab_bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style scoped>
  .tab_bar{
    display: flex;
    height: 49px;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f6f6f6;
    box-shadow: 0px -3px 1px rgba(100,100,100,0.1);
  }
  .tab_bar div{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items:center;
  }
</style>
