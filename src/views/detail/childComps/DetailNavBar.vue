<template>
    <div>
        <nav-bar class="nav">
            <template #left>
                <span class="iconfont icon-zuojiantou back" @click="backClick"></span>
            </template>
            <template #center>
                <div class="titleCenter">
                    <span v-for="(item,index) in titles" :class="{active:index===currentIndex}" @click="titleClick(index)">{{item}}</span>
                </div>
            </template>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "@components/common/navbar/NavBar";
    export default {
        name: "DetailNavBar",
        components:{
            NavBar
        },
        data(){
            return{
                titles:['商品','参数','评论','推荐'],
                currentIndex:0
            }
        },
        methods:{
            titleClick(index){
                this.currentIndex=index
                this.$emit('titleClick',index)
            },
            backClick(){
                this.$router.go(-1)
            }

        }
    }
</script>

<style scoped>
    .nav{
        background: #fff;
    }
    .back{
        color: var(--color-high-text);
    }
    .titleCenter{
        display: flex;
    }
    .titleCenter span{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
</style>