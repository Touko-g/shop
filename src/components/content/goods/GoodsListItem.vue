<template>
    <div class="good" @click="itemClick">
        <img v-lazy="showImage" alt="" @load="imageLoad">
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
        },
        methods:{
            imageLoad(){
                this.$bus.$emit('itemImageLoad')
                // if(this.$route.path.indexOf('/home')){
                //     this.$bus.$emit('homeItemImageLoad')
                // }else if(this.$route.path.indexOf('/detail')){
                //     this.$bus.$emit('detailItemImageLoad')
                // }
            },
            itemClick(){
                if(this.$route.path.indexOf('/detail')){
                    this.$router.push('/detail/'+this.goodsItem.iid)
                }
            }
        },
        computed:{
            showImage(){
                return this.goodsItem.image || this.goodsItem.show.img
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