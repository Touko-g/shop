<template>
    <div class="detail">
        <detail-nav-bar class="detail_nav" @titleClick="titleClick" ref="nav"/>
        <scroll class="content" ref="scroll" :prototype="3" @scroll="contentScroll">
            <detail-swiper :top-images="topImages" class="detail_swiper"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <deatail-goods-info class="gInfo" :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info  ref="param" class="pInfo" :param-info="paramInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <goods-list ref="list" :goods="recommends"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
        <detail-tab-bar @addToCart="addToCart"/>
<!--        <toast :message="mes" :show="show"/>-->
    </div>
</template>

<script>
    import DetailNavBar from "./childComps/DetailNavBar";
    import DetailSwiper from "./childComps/DetailSwiper";
    import DetailBaseInfo from "./childComps/DetailBaseInfo";
    import DetailShopInfo from "./childComps/DetailShopInfo";
    import DeatailGoodsInfo from "./childComps/DeatailGoodsInfo";
    import DetailParamInfo from "./childComps/DetailParamInfo";
    import DetailCommentInfo from "./childComps/DetailCommentInfo";
    import DetailTabBar from "./childComps/DetailTabBar";
    import Scroll from "@components/common/scroll/Scroll";
    import GoodsList from "../../components/content/goods/GoodsList";
    // import Toast from "../../components/common/toast/Toast";
    import {backTopMixin} from '../../common/mixin'
    import {mapActions} from 'vuex'


    import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "@network/detail";

    import {debounce} from "../../common/utils";

    export default {
        name: "Detail",
        components:{
            Scroll,
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo,
            DeatailGoodsInfo,
            DetailParamInfo,
            DetailCommentInfo,
            DetailTabBar,
            GoodsList,
            // Toast
        },
        mixins:[backTopMixin],
        data(){
            return{
                iid:null,
                topImages:[],
                goods:{},
                shop:{},
                detailInfo:{},
                paramInfo:{},
                commentInfo:{},
                recommends:[],
                themeTopYs:[],
                currentIndex:0,
                // mes:'我爱你看',
                // show:false

            }
        },
        created() {
            this.iid=this.$route.params.iid

            getDetail(this.iid).then(res=>{
                console.log(res)
                const data=res.result
                this.topImages=data.itemInfo.topImages

                this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

                this.shop=new Shop(data.shopInfo)

                this.detailInfo=data.detailInfo

                this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

                if(data.rate.cRate!==0){
                    this.commentInfo=data.rate.list[0]
                }

                // this.$nextTick(()=>{
                //     this.themeTopYs=[]
                //     this.themeTopYs.push(44)
                //     this.themeTopYs.push(this.$refs.param.$el.offsetTop)
                //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                //     this.themeTopYs.push(this.$refs.list.$el.offsetTop)
                //
                //     console.log(this.themeTopYs)
                // })

            })

            getRecommend().then(res=>{
                console.log(res)
                this.recommends=res.data.list
            })

            this.getThemeTopY=debounce(()=>{
                this.themeTopYs=[]
                this.themeTopYs.push(44)
                this.themeTopYs.push(this.$refs.param.$el.offsetTop)
                this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(this.$refs.list.$el.offsetTop)
                this.themeTopYs.push(Number.MAX_VALUE)

                console.log(this.themeTopYs)
            },100)
        },
        methods:{
            ...mapActions(['addCart']),
            imageLoad(){
                this.$refs.scroll.refresh()

                this.getThemeTopY()
            },
            titleClick(index){
                this.$refs.scroll.scrollTo(0,-this.themeTopYs[index]+44,300)
            },
            contentScroll(position){
                const positionY=-position.y
                let length=this.themeTopYs.length;
                // if(positionY>=this.themeTopYs[0]&&positionY<this.themeTopYs[1]){
                //     this.currentIndex=0
                // }else if(positionY>=this.themeTopYs[1]&&positionY<this.themeTopYs[2]){
                //     this.currentIndex=1
                // }else if(positionY>=this.themeTopYs[2]&&positionY<this.themeTopYs[3]){
                //     this.currentIndex=2
                // }else if(positionY>=this.themeTopYs[3]){
                //     this.currentIndex=3
                // }
                for (let i=0;i<length-1;i++){
                    if(this.currentIndex!==i&&(positionY>=this.themeTopYs[i]&& positionY<this.themeTopYs[i+1])){
                        this.currentIndex=i
                        this.$refs.nav.currentIndex=this.currentIndex
                    }
                }

                this.isShowBackTop=(-position.y)>1000

            },
            addToCart(){
               const product={}
               product.image=this.topImages[0];
               product.title=this.goods.title;
               product.desc=this.goods.desc;
               product.price=this.goods.realPrice;
               product.iid=this.iid;
               // this.$store.cartList.push(product)
               //  this.$store.commit('addCart',product)
                this.addCart(product).then(res=>{
                    // this.show=true;
                    // this.message=res;
                    // setTimeout(()=>{
                    //     this.show=false
                    //     this.message=''
                    // },1200)
                    this.$toast.show('已加入购物',1500)
                })
                // this.$store.dispatch('addCart',product).then(res=>{
                //     console.log(res)
                // })
            }

        }
    }
</script>

<style scoped>
    .detail{
        height: 100vh;
        position: relative;
    }
    .content{
        position: absolute;
        bottom: 46px;
        top: 0;
        left: 0;
        right: 0;
    }
</style>