<template>
    <div class="detail_shop_info">
        <div class="shop_name">
            <img :src="shop.logo" alt=""><span>{{shop.name}}</span>
        </div>
        <div class="shop_sell">
            <div class="shop_sell_info">
                <div class="sells">
                    <p>{{shop.sells}}</p>
                    <p>总销量</p>
                </div>
                <div class="goods">
                    <p>{{shop.goodsCount}}</p>
                    <p>全部宝贝</p>
                </div>
            </div>
            <div class="shop_comment_info">
                <div class="comment_info">
                    <table>
                        <tr v-for="(item,index) in shop.score" :key="index">
                            <td>{{item.name}}</td>
                            <td class="sell_info" :class="{'sell_score':item.isBetter}">{{item.score}}</td>
                            <td class="sell_info" :class="{'sell_score':item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <div class="go_shop">
            <div class="join">进店逛逛</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailShopInfo",
        props:{
            shop:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .detail_shop_info{
        border-bottom: 4px solid #eeeeee;
    }
    .shop_name{
        display: flex;
        align-items: center;
    }
    .shop_name img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #eeeeee;
        margin: 10px 10px;
    }
    .shop_sell{
        display: flex;
    }
    .shop_sell_info{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-right: 1px solid #eeeeee;
    }
    .shop_sell_info div,p{
        padding: 5px;
    }
    .shop_comment_info{
        flex: 1;
    }
    .shop_comment_info td{
        padding-top: 10px;
        padding-left: 10px;
    }
    .shop_comment_info td:last-child{

    }
    .sell_info{
        color: green;
    }
    .sell_score{
        color: red;
    }
    .go_shop{
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .join{
        padding: 10px;
        background-color: #666666;
        color: #ffffff;
    }
</style>