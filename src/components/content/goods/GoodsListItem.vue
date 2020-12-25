<template>
    <div class="good">
        <img :src="goodsItem.show.img" alt="">
        <p>{{goodsItem.title}}</p>
        <div class="goodInfo">
            <span class="price">{{goodsItem.price}}</span>
            <span class="iconfont icon-shoucang"></span>
            <span>{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
        props:{
            goodsItem:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .good{
        width: 48%;
    }
    .good img{
        width: 100%;
    }
    p{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        padding: 0 5%;
    }
    .goodInfo{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .goodInfo .price{
        color: var(--color-high-text);
    }
    .goodInfo span{
        margin-right: 5px;
    }
</style>