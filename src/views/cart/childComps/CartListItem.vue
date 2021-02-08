<template>
    <div class="cart_item">
        <div class="check">
            <check-button :is-checked="product.checked" @click.native="clickCheck"/>
        </div>
        <div class="item_img">
            <img :src="product.image" alt="">
        </div>
        <div class="item_info">
            <div class="item_title">{{product.title}}</div>
            <div class="item_desc">{{product.desc}}</div>
            <div class="item_pac">
                <span class="item_price">￥{{product.price}}</span>
                <span class="item_count">x{{product.count}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Scroll from "../../../components/common/scroll/Scroll";
    import CheckButton from "../../../components/content/checkButton/CheckButton";
    export default {
        name: "CartListItem",
        components:{
            Scroll,CheckButton
        },
        props:{
            product:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        methods:{
            clickCheck(){
                this.product.checked=!this.product.checked
            }
        }
    }
</script>

<style scoped>
    .cart_item{
        display: flex;
    }
    .check{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .item_img{
        flex: 2;
    }
    .item_img img{
        width: 70px;
        height: 100px;
    }
    .item_info{
        flex: 6;
        display: flex;
        flex-direction: column;
    }
    .item_info div{
        margin: 8px;
    }
    .item_title{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        font-weight: bold;
    }
    .item_desc{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .item_pac{
        display: flex;
        justify-content: space-between;
    }
    .item_pac .item_price{
        color: orangered;
    }
</style>