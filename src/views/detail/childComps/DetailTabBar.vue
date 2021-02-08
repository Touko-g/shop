<template>
    <div class="detail_tab_bar">
        <div class="kf">
            <span class="iconfont icon-kefu"></span>
            <span>客服</span>
        </div>
        <div class="dp">
            <span class="iconfont icon-dianpu"></span>
            <span>店铺</span>
        </div>
        <div class="sc">
            <span class="iconfont icon-shoucang"></span>
            <span>收藏</span>
        </div>
        <div class="gwc" @click="addToCart">
            加入购物车
        </div>
        <div class="gm">
            <span>购买</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailTabBar",
        methods:{
            addToCart(){
                this.$emit('addToCart')
            }
        }
    }
</script>

<style scoped>
    .detail_tab_bar{
        height: 50px;
        background: white;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        right: 0;
        bottom: 0;
    }
    .detail_tab_bar div{
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    .detail_tab_bar div:nth-child(-n+3){
        flex: 2;
    }
    .gwc{
        flex: 3;
        background: yellow;
    }
    .gm{
        flex: 3;
        background-color: aqua;
    }
</style>