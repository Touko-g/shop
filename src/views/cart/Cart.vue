<template>
    <div class="cart">
        <nav-bar class="nav_bar">
            <template #center>购物车({{cartLength}})</template>
        </nav-bar>
        <cart-list/>
        <cart-bottom-bar/>
    </div>
</template>

<script>
    import NavBar from "../../components/common/navbar/NavBar";
    import CartList from "./childComps/CartList";
    import Scroll from "../../components/common/scroll/Scroll";
    import CartBottomBar from "./childComps/CartBottomBar";
    import {mapGetters} from 'vuex'
    export default {
        name: "Cart",

        components: {
            CartBottomBar,
            NavBar,CartList,Scroll
        },
        computed:{
           ...mapGetters(['cartLength'])
        }
    }
</script>

<style scoped>
    .nav_bar{
        background: var(--color-high-text);
        color: #ffffff;
    }
    .cart{
        height: 100vh;
        position: relative;
    }
</style>
