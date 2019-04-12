<template>
    <div>
        <Xheader name="商品详情" link="/list"/>
        <div class="imgBox">
            <img v-if="itemData[0]" :src="itemData[0].imgurl">
        </div>
        <div class="priceBox">
            <div class="priceItem">
                <span v-if="itemData[0]">￥{{itemData[0].nprice}}</span>
            </div>
            <div class="sellMsg">
                <span class="way">上门</span>
                <span class="like" v-if="itemData[0]">{{itemData[0].like}}人喜欢</span>
            </div>
        </div>
        <div class="detailsBox">
            <span v-if="itemData[0]" class="title" v-text="itemData[0].title"></span>
        </div>
        <div class="promiseBox">
            <img src="../assets/protect.jpg">
            <img src="../assets/promise1.jpg">
            <img src="../assets/promise2.jpg">
        </div>
        <div class="footerBox">
            <div class="linkBtn">
                <a href="javascript:;">
                    <img src="../assets/f_connect.png">
                    <span>联系TA</span>
                </a>
                <a href="javascript:;">
                    <img src="../assets/f_brand.png">
                    <span>品牌馆</span>
                </a>
                <a href="javascript:;">
                    <img src="../assets/f_collect.png">
                    <span>收藏</span>
                </a>
            </div>
            <span class="buyBtn" @click="addItem">立即购买</span>
        </div>
    </div>
</template>

<script>
import	Xheader from '../components/Xheader.vue';
export default {
    components:{
	   	Xheader
    },
    data(){
        return{
            itemData:[]
        }
    },
    methods:{
        addItem(){
            let token = localStorage.getItem('token');
            //登录状态判断
            if(token !=null){
                this.$axios({
                    method: "post",
                    url: "http://39.97.101.232:3000/users/isLogin",
                    data: this.$qs.stringify({
                        isToken: token,
                    })
                }).then(res => {
                    let fn = {
                        true: async () => {
                            await this.$axios({
                            method: "post",
                            url: "http://39.97.101.232:3000/item/addItem",
                            data: this.$qs.stringify({
                                sname: res.data.curuser,
                                simgurl: this.itemData[0].imgurl,
                                stitle: this.itemData[0].title,
                                sprice: this.itemData[0].nprice,
                                sperson: this.itemData[0].person,
                                snum: 1
                                })
                            })
                            alert('购买成功');
                        },
                        false: () => {
                            alert('请先登录');
                        }
                    };
                    fn[res.data.status]();
                });
            }
                
        }
    },
    async created(){
        let _id = location.href.split('#')[1].split('/')[2];
        //请求数据
        let result = await this.$axios({
            method: "post",
            url: "http://39.97.101.232:3000/item/getItem",
            data: this.$qs.stringify({
                id: _id,
            })
        })
        this.itemData = this.itemData.concat(result.data);
	 }
}
</script>

<style scoped>
    .imgBox img{
        width: 100%;
    }
    .priceBox{
        padding: 0 15px 12px 15px;
    }
    .priceBox .priceItem{
        line-height: 1;
        padding-top: 15px;
    }
    .priceBox .priceItem span{
        font-size: 24px;
        color: #F23030;
    }
    .priceBox .sellMsg .way{
        font-size: 12px;
        color: #C3902C;
        margin-right: 10px;
    }
    .priceBox .sellMsg .like{
        font-size: 12px;
        color: #999;
    }
    .detailsBox{
        margin-left: 15px;
    }
    .detailsBox span{
        font-weight: 800;
        line-height: 1;
        color: #1a1a1a;
    }
    .promiseBox{
        margin-bottom: 50px;
    }
    .promiseBox img{
        width: 100%;
    }
    .footerBox{
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        background: #fff;
    }
    .footerBox .linkBtn{
        width: 55%;
        display: flex;
        justify-content: space-between;
    }
    .footerBox .linkBtn a{
        flex: 1;
        display: block;
        color: #1a1a1a;
        text-align: center;
        margin-top: 8px;
    }
    .footerBox .linkBtn a img{
        margin-left: 25px;
    }
    .footerBox .linkBtn a span{
        font-size: 12px;
    }
    .footerBox .buyBtn{
        display: block;
        width: 160px;
        height: 50px;
        font-size: 12px;
        color: #fff;
        background: linear-gradient(135deg, #BE94E2, #A73170);
        line-height: 50px;
        text-align: center;
    }
</style>