<template>
    <div id="home">
        <nav-bar class="home_nav">
            <template #center>购物街</template>
        </nav-bar>
        <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" class="fixed" v-show="isTabFixed" ref="tabControl"/>
        <scroll class="wrapper" ref="scroll" :prototype="3" :pullUpLoad="true" @scroll="contentScroll" @pullingUp="loadMode">
            <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
            <home-recommend-view :recommends="recommends"/>
            <home-feature-view/>
            <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl1"/>
            <goods-list :goods="showGoods"/>
        </scroll>
        <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
</template>

<script>
    import NavBar from "@components/common/navbar/NavBar";
    import TabControl from "@components/content/tabControl/TabControl";
    import GoodsList from "@components/content/goods/GoodsList";
    import Scroll from "@components/common/scroll/Scroll";
    import BackTop from "@components/content/backTop/BackTop";

    import HomeSwiper from "./childComps/HomeSwiper";
    import HomeRecommendView from "./childComps/HomeRecommendView";
    import HomeFeatureView from "./childComps/HomeFeatureView";

    import {getHomeMultidata,getHomeGoods} from "@network/home";
    import {debounce} from "@common/utils";

    export default {
        name: "Home",
        data(){
            return{
                banners:{},
                recommends:{},
                goods:{
                    'pop':{
                        page:0,
                        list:[]
                    },
                    'new':{
                        page:0,
                        list:[]
                    },
                    'sell':{
                        page:0,
                        list:[]
                    }
                },
                currentType:'pop',
                isShowBackTop:false,
                tabOffsetTop:0,
                isTabFixed:false,
                saveY:0
            }
        },
        components:{
            NavBar,
            TabControl,
            GoodsList,
            Scroll,
            BackTop,

            HomeSwiper,
            HomeRecommendView,
            HomeFeatureView
        },
        created() {
            // 1.请求多个数据
          this.getHomeMultidata();

          this.getHomeGoods('pop');
          this.getHomeGoods('new');
          this.getHomeGoods('sell');

        },
        destroyed() {
            console.log('----destroyed----')
        },
        activated() {
            console.log('----activated----')
            this.$refs.scroll.scrollTo(0,this.saveY,0)
            this.$refs.scroll.refresh()

        },
        deactivated() {
            console.log('----deactivated----')
            this.saveY = this.$refs.scroll.getScrollY()
        },
        mounted() {
            const refresh=debounce(this.$refs.scroll.refresh,50)
            this.$bus.$on('itemImageLoad',()=>{
                // this.$refs.scroll && this.$refs.scroll.refresh()
                refresh()
            })
            // setTimeout(()=>{
            //     console.log(this.$refs.tabControl.$el.offsetTop)
            // },2000)
        },
        computed:{
            showGoods(){
                return this.goods[this.currentType].list
            }
        },
        methods:{
            getHomeMultidata(){
                getHomeMultidata().then(res=>{
                    console.log(res)
                    this.banners=res.data.banner
                    this.recommends=res.data.recommend
                })
            },
            getHomeGoods(type){
                const page=this.goods[type].page+1
                getHomeGoods(type,page).then(res=>{
                    console.log('------------')
                    console.log(res.data.list)
                    this.goods[type].list.push(...res.data.list)
                    this.goods[type].page += 1

                    this.$refs.scroll.finishPullUp()
                })
            },
            tabClick(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop'
                        break
                    case 1:
                        this.currentType=  'new'
                        break
                    case 2:
                        this.currentType = 'sell'
                        break
                }
                // this.currentType=Object.keys(this.goods)[index]
                this.$refs.tabControl.currentIndex=index;
                this.$refs.tabControl1.currentIndex=index;
            },
            backClick(){
                this.$refs.scroll.scrollTo(0,0)
                this.isShowBackTop=false
            },
            contentScroll(position){
                this.isShowBackTop=(-position.y)>1000

                this.isTabFixed=(-position.y)>this.tabOffsetTop
            },
            loadMode(){
                this.getHomeGoods(this.currentType)
            },
            swiperImageLoad(){
                this.tabOffsetTop=this.$refs.tabControl1.$el.offsetTop
            }
        },
    }
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
    .wrapper{
        position: absolute;
        top:44px;
        bottom: 46px;
        left: 0;
        right: 0;
        /*height: calc(100vh - 90px);*/
    }
    .home_nav{
        background: var(--color-tint);
        color: white;
    }
    .fixed{
        z-index: 99;
        position: relative;
        top: 44px;
    }
</style>
