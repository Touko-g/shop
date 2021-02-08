<template>
    <div class="cart_bar">
        <div class="check_all">
            <check-button :is-checked="isSelectAll" @click.native="checkClick"/>
            <span>全选</span>
        </div>
        <div class="total_money">
            合计:{{totalPrice}}
        </div>
        <div class="total_sum">
            去结账:{{checkLength}}
        </div>
    </div>
</template>

<script>
    import CheckButton from "../../../components/content/checkButton/CheckButton";
    import {mapGetters} from 'vuex'
    export default {
        name: "CartBottomBar",
        components:{
            CheckButton
        },
        computed:{
            ...mapGetters(['cartList']),
            totalPrice(){
                return '￥'+this.$store.state.cartList.filter(item=>{
                    return item.checked
                }).reduce((previousValue, currentValue) => {
                    return previousValue+currentValue.price * currentValue.count
                },0)
            },
            checkLength(){
                return this.cartList.filter(item=>item.checked).length
            },
            isSelectAll(){
                // return !(this.cartList.filter(item=>!item.checked).length)
                if(this.cartList.length===0)
                    return false
                return !this.cartList.some(item=>!item.checked)
            }
        },
        methods:{
            checkClick(){
                if (this.isSelectAll){
                    this.cartList.forEach(item=>item.checked=false)
                }else {
                    this.cartList.forEach(item=>item.checked=true)
                }
            }
        }
    }
</script>

<style scoped>
    .cart_bar{
        width: 100%;
        height: 40px;
        background: yellow;
        position: fixed;
        bottom: 46px;
        display: flex;
    }
    .cart_bar div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .check_all{
        flex: 1;
        color: white;
        background: black;
    }
    .total_money{
        flex: 1;
        background: #0984e3;
        color: white;
        font-weight: bold;
    }
    .total_sum{
        flex: 1;
        background: #c40000;
        color: #fff;
        font-weight: bold;
    }
</style>