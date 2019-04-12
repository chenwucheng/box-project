<template>
    <div class="footer">
        <router-link :to="item.to" v-for="(item,idx) in footData" class="link" :key="idx">
            <img :src="item.imgurl">
            <span v-text="item.title"></span>
        </router-link>     
    </div>
</template>

<script>
export default {
    data(){
        return{
            footData:[
                {
                    imgurl: require(`../assets/home.png`),
                    title: `首页`,
                    to: `/index`
                },
                {
                    imgurl: require(`../assets/category.png`),
                    title: `分类`,
                    to: `/category`
                },
                {
                    imgurl: require(`../assets/order.png`),
                    title: `订单`,
                    to: `/order`
                },
                {
                    imgurl: require(`../assets/mine.png`),
                    title: `我的`,
                    to: `/mine`
                }
            ],
            curIdx: 0
        }
    },
    methods:{
        // change(idx){
        //     this.curIdx = idx;
        // }
    }
}
</script>

<style scoped>
    .footer{
        width: 100%;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #ECD9BA;
    }
    .link{
        display: block;
        width: 25%;
        padding-top: 5px;
        text-align: center;
        color: #6E6D6C;
        height: 45px;
    }
    .link img{
        margin-left: 38px; 
    }
    .link span{
        font-size: 12px;
    }
    .link .active{
        color: #C5A369;
    }
</style>
