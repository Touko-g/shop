<template>
    <div class="wrapper" ref="wrap">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
        props:{
          prototype:{
              type:Number,
              default:0
          },
          pullUpLoad:{
              type: Boolean,
              default: false
          }
        },
        data(){
            return{
                scroll:null
            }
        },
        mounted() {
            this.scroll=new BScroll(this.$refs.wrap,{
                probeType:this.probeType,
                pullUpLoad: this.pullUpLoad,
                mouseWheel:true,
                observeDOM:true,
                click:true,
                tap:true
            })
            this.scroll.on('scroll',position=>{
                this.$emit('scroll',position)
            })
            if(this.pullUpLoad){
                this.scroll.on('pullingUp',()=>{
                    this.$emit('pullingUp')
                })
            }
        },
        methods:{
            scrollTo(x,y,time=400){
                this.scroll && this.scroll.scrollTo(x,y,time)
            },
            finishPullUp(){
                this.scroll.finishPullUp()
            },
            refresh(){
                this.scroll && this.scroll.refresh()
                console.log('----refresh----')
            },
            getScrollY(){
                return this.scroll ? this.scroll.y :0
            }
        }
    }
</script>

<style scoped>
</style>