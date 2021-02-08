<template>
    <div class="detail_comment_info" v-if="Object.keys(commentInfo).length!==0">
        <div class="comment_title">
            <div>用户评价</div>
            <div>更多<span class="iconfont icon-gengduo"></span></div>
        </div>
        <div class="comment_info">
            <div class="comment_user">
                <div class="user_icon"><img :src="commentInfo.user.avatar" alt=""></div>
                <div class="user_name">{{commentInfo.user.uname}}</div>
            </div>
            <div class="comment">
                <div class="comment_mes">
                    {{commentInfo.content}}}
                </div>
                <div class="comment_time">
                    <p>{{commentInfo.created | showDate}}  {{commentInfo.style}}</p>
                </div>
                <div class="comment_img">
                    <img v-for="(item,index) in commentInfo.images" :src="item" alt="" :key="index">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {formatDate} from '../../../common/utils'
    export default {
        name: "DetailCommentInfo",
        props:{
            commentInfo:{
                type:Object,
                default(){
                    return{}
                }
            }
        },
        filters:{
            showDate(value){
                const date=new Date(value*1000)
                return formatDate(date,'yyyy-MM-dd hh:mm')
            }
        }
    }
</script>

<style scoped>
    .comment_title{
        display: flex;
        padding: 12px 5px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #eeeeee;
    }
    .comment_title span{
        font-size: 15px;
        color: #ff5777;
    }
    .comment_user{
        display: flex;
        align-items: center;
        padding: 5px;
    }
    .comment_user img{
        width: 45px;
    }
    .comment div{
        padding: 5px;
    }
    .comment_img img{
        width: 60px;
        height: 60px;
        margin-right: 5px;
    }
</style>