<template>
    <div class="tab_control">
        <div v-for="(item,index) in titles" class="tab_control_item" :class="{active:index===currentIndex}" @click="tabClick(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
           tabClick(index){
               this.currentIndex=index
               this.$emit('tabClick',index)
           }
        }
    }
</script>

<style scoped>
    .tab_control{
        display: flex;
        text-align: center;
        font-size: 15px;
        height: 40px;
        line-height: 40px;
        background: #fff;
    }
    .tab_control_item{
        flex: 1;
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        padding: 5px;
        border-bottom: 2px solid currentColor;
    }
</style>