<template>
    <div class="detail_param_info" v-if="Object.keys(paramInfo).length!==0">
        <table v-for="(table,index) in paramInfo.sizes" class="info_size" :key="index">
            <tr v-for="(tr,index) in table" :key="index">
                <td v-for="(td,index) in tr" :key="index">
                    {{td}}
                </td>
            </tr>
        </table>
        <table class="info_param">
            <tr v-for="(info,index) in paramInfo.infos">
                <td class="info_param_key">{{info.key}}</td>
                <td class="param_value">{{info.value}}</td>
            </tr>
        </table>
        <div class="info_img" v-if="paramInfo.image.length!==0">
            <img :src="paramInfo.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "DetailParamInfo",
        props:{
            paramInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped>
    .detail_param_info{
        padding: 20px 15px;
        font-size: 14px;
        border-bottom: 5px solid #f2f5f8;
    }
    .detail_param_info table{
        width: 100%;
        border-collapse: collapse;
    }
    .detail_param_info table tr{
        height: 42px;
    }
    .detail_param_info table tr td{
        border-bottom: 1px solid rgba(100,100,100,.1);
    }
    .info_param_key{
        width: 70px;
    }
    .param_value{
        color: #c40000;
    }
</style>