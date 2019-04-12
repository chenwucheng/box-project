<template>
    <div>
        <div class="selectBox">
            <div class="selectItem">
                <h2>为你甄选</h2>
                <h3>只给挑剔的你</h3>
                <div class="itemBox">
                    <div class="item select" v-for="(item,idx) in select" :key="idx">
                        <img :src="item.imgurl">
                        <p><span class="newPrice" v-text="item.newPrice"></span></p>
                        <del class="marketPrice" v-text="item.marketPrice"></del>
                    </div>
                </div>
            </div>
            <div class="selectItem">
                <h2>医美攻略</h2>
                <h3>只给挑剔的你</h3>
                <div class="itemBox">
                    <div class="item recommend" v-for="(item,idx) in recommend" :key="idx">
                        <img :src="item">
                    </div>
                </div>
            </div>
        </div>
        <div class="buyBox">
            <div class="leftPart">
                <router-link to="/list">
                    <img src="../assets/buy1.jpg">
                </router-link>
            </div>
            <div class="rightPart">
                <router-link to="/list" v-for="(item,idx) in buyleft" :key="idx">
                    <img :src="item">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            select: [
                {
                    imgurl : require(`../assets/select1.jpg`),
                    newPrice : `￥188`,
                    marketPrice: `￥299`
                },
                {
                    imgurl : require(`../assets/select2.jpg`),
                    newPrice : `￥138`,
                    marketPrice: `￥299`
                },
                {
                    imgurl : require(`../assets/select3.jpg`),
                    newPrice : `￥288`,
                    marketPrice: `￥300`
                }
            ],
            recommend:[
                require(`../assets/recommend1.jpg`),
                require(`../assets/recommend2.jpg`)
            ],
            buyleft:[
                require(`../assets/buy2.jpg`),
                require(`../assets/buy3.jpg`),
                require(`../assets/buy4.jpg`),
            ]
        }
    },
}
</script>

<style scoped>
    .selectBox{
        display: flex;
        flex-wrap: wrap;
    }
    .selectBox .selectItem{
        width: 50%;
        padding: 8px 15px;
        background: #FCF8EC;
    }
    .selectBox .selectItem h2{
        font-size: 18px;
    }
    .selectBox .selectItem h3{
        font-size: 12px;
        color: #B8B6B3;
    }
    .selectBox .selectItem .itemBox{
        display: flex;
        justify-content: space-between;
        text-align: center;
    }
    .selectBox .selectItem .itemBox .select img{
        width: 49px;
    }
    .selectBox .selectItem .itemBox .select .newPrice{
        color: #F23030;
        font-size:12px;
    }
    .selectBox .selectItem .itemBox .select .marketPrice{
        color: #999999;
        font-size: 12px;
    }
    .selectBox .selectItem .itemBox .recommend img{
        width: 76px;
    }
    .buyBox{
        display: flex;
        margin-bottom: 45px; 
    }
    .buyBox .leftPart{
        flex: 1;
    }
    .buyBox .rightPart{
        flex: 1;
    }
    .buyBox img{
        width: 100%;
    }
</style>
