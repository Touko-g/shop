<template>
    <div class="detail_goods_info" v-if="Object.keys(detailInfo).length!==0">
        <div class="goods_info_nav">
            <div class="left_line"></div>
            <div>{{detailInfo.desc}}</div>
            <div class="right_line"></div>
        </div>
        <div style="clear: both"></div>
        <div class="image_show_title">{{detailInfo.detailImage[0].key}}</div>
        <div class="image_show_info">
            <img v-for="(item,index) in detailInfo.detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeatailGoodsInfo",
        props:{
            detailInfo:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        data(){
            return{
                counter:0,
                imagesLength:0
            }
        },
        methods:{
            imgLoad(){
                if(++this.counter===this.imagesLength){
                    this.$emit('imageLoad')
                }
            }
        },
        watch:{
            detailInfo(){
                this.imagesLength=this.detailInfo.detailImage[0].list.length
            }
        }
    }
</script>

<style scoped>
    .detail_goods_info{

    }
    .goods_info_nav div{
        margin: 10px;
    }
    .left_line{
        width: 30%;
        border-bottom: 1px solid #000;
    }
    .right_line{
        width: 30%;
        border-bottom: 1px solid #000;
        float: right;
    }
    .image_show_title{
        margin-top: 10px;
        margin-left: 10px;
    }
    .image_show_info{
        display: flex;
        flex-direction: column;
    }
    .image_show_info img{
        width: 100%;
    }
</style>