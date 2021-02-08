<template>
    <div class="detail_base_info" v-if="Object.keys(goods).length!==0">
        <div class="detail_title">
            {{goods.title}}
        </div>
        <div class="detail_price">
            <span>{{goods.newPrice}}</span>
            <span>{{goods.oldPrice}}</span>
            <span  v-if="goods.discount">{{goods.discount}}</span>
        </div>
        <div class="detail_sell_info">
            <span>
                {{goods.columns[0]}}
            </span>
            <span>
                {{goods.columns[1]}}
            </span>
            <span>
                {{goods.services[2].name}}
            </span>
        </div>
        <div class="detail_express">
            <span><img :src="goods.services[0].icon" alt="">{{goods.services[0].name}}</span>
            <span><img :src="goods.services[1].icon" alt="">{{goods.services[1].name}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
        props:{
            goods:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .detail_title{
        color: salmon;
        padding: 5px;
    }
    .detail_price span{
        padding: 5px;
    }
    .detail_price span:nth-child(1){
        color: var(--color-high-text);
        font-size: 26px;
    }
    .detail_price span:nth-child(2){
        text-decoration: line-through;
    }
    .detail_price span:nth-child(3){
        background: salmon;
        color: #ffffff;
        border-radius: 10%;
        font-size:13px;
    }
    .detail_sell_info{
        display: flex;
        padding: 15px 3px;
        border-bottom: 1px solid #eeeeee;
    }
    .detail_sell_info span{
        flex: 1;
        font-size: 13px;
        text-align: center;
    }
    .detail_express{
        display: flex;
        padding: 15px 3px;
        border-bottom: 4px solid #eeeeee;
    }
    .detail_express span{
        flex: 1;
        font-size: 15px;
    }
    .detail_express span:nth-child(2){
        text-align: right;
    }
    .detail_express span img{
        width: 14px;
        /*vertical-align: middle;*/
    }
</style>