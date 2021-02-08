<template>
    <div class="cart_list">
        <scroll class="content" ref="scroll">
                <cart-list-item v-for="(item,index) in cartList" :product="item"/>
        </scroll>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import CartListItem from "./CartListItem";
    import Scroll from "../../../components/common/scroll/Scroll";
    export default {
        name: "CartList",
        components:{
            Scroll,
            CartListItem
        },
        computed:{
            ...mapGetters(['cartList'])
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    .cart_list{
        height: 100vh;
        position: relative;
    }
    .content{
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 86px;
    }
</style>