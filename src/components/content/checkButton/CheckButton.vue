<template>
    <div class="check_button" :class="{check:isChecked}">
        <img src="../../../assets/images/cart/tick.svg">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
        props:{
            isChecked:{
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>
    .check_button{
        width: 18px;
        height: 18px;
        border-radius: 50%;
        border: 1px solid gray;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .check{
        background: red;
    }
</style>