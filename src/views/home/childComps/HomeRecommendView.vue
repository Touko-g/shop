<template>
    <div class="recommend">
        <div v-for="item in recommends.list" class="recommendItem">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRecommendView",
        props:{
            recommends:{
                type:Object,
                default(){
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        font-size: 15px;
        padding: 15px 0;
        border-bottom: 8px solid #eee;
    }
    .recommendItem{
        flex: 1;

    }
    .recommendItem img{
        width: 70px;
        height: 70px;
        margin-bottom: 5px;
    }
</style>