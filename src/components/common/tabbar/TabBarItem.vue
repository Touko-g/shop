<template>
    <div class="tab-bar-item" @click="itemClick">
      <div :style="activeStyle"><slot name="item-icon"></slot></div>
      <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
    export default {
      name: "TabBarItem",
      props:{
        path:String,
        activeColor:{
          type:String,
          default:'red'
        }
      },
      computed:{
        isActive(){
          return this.$route.path==this.path
        },
        activeStyle(){
          return this.isActive ? {color:this.activeColor} : {}
        }
      },
      methods:{
        itemClick(){
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>

</style>
