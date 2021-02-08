import BackTop from "@components/content/backTop/BackTop";
export const backTopMixin={
    data(){
        return{
            isShowBackTop:false,
        }
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0)
            this.isShowBackTop=false
        },
    },
    components:{
        BackTop
    }
}