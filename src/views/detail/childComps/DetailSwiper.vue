<template>
    <swiper class="detail_swiper">
        <swiper-item v-for="item in topImages">
            <img :src="item" alt="">
        </swiper-item>
        </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from "@components/common/swiper";
    export default {
        name: "DetailSwiper",
        props:{
            topImages:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        components:{
            Swiper,SwiperItem
        }
    }
</script>

<style scoped>
    .detail_swiper{
        padding-top: 44px;
        height: 300px;
        overflow: hidden;
    }
    img{
        width: 100%;
    }
</style>