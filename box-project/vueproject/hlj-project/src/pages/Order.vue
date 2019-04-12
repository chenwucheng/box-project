<template>
    <div class="orderBox">
	<Xheader :name="name" :link="link"></Xheader>	
        <div class="orderList">
            <div class="orderItem" v-for="(item,idx) in orderData" :key="idx">
                <div class="itemHeader">
                    <span>手艺人：</span>
                    <span v-text="item.person"></span>
                </div>
                <div class="itemMain">
                    <img :src="item.imgurl">
                    <div class="infoBox">
                        <div class="title" v-text="item.title"></div>
                        <span>无忧保障</span>
                    </div>
                    <div class="priceBox">
                        <div class="price">￥{{item.price}}</div>
                        <span v-text="item.num">x{{item.num}}</span>
                    </div>
                </div>
            </div>            
        </div>
        <Xfooter/>
    </div>
</template>

<script>
import Xfooter from '../components/Xfooter';
import Xheader from '../components/Xheader';

export default {
    components: {
        Xfooter,
        Xheader
    },
    data(){
    	return{
            name:'我的订单',
            link: '/index',
            orderData:[]
    	}
    },
    created(){
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
                        let result = await this.$axios({
                        method: "post",
                        url: "http://39.97.101.232:3000/item/getOrder",
                        data: this.$qs.stringify({
                            suser: res.data.curuser
                            })
                        })    
                        this.orderData = this.orderData.concat(result.data);               
                    },
                    false: () => {
                        alert('未登录，跳转到登录页');
                        this.$router.push('/login');
                    }
                };
                fn[res.data.status]();
            });
        }else{
            alert('未登录，跳转到登录页');
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>
    .orderList{
        padding-left: 15px;
        margin: 10px 0 45px 0;
        color: #1a1a1a;
        background: #fff;
        font-size: 14px;
    }
    .orderList .orderItem{
        margin-bottom: 15px;
    }
    .orderList .itemHeader{
        margin-bottom: 12px;
    }
    .orderList .itemMain{
        display: flex;
        padding-right: 20px;
    }
    .orderList .itemMain img{
        width: 60px;
        height: 60px;
    }
    .orderList .infoBox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        margin: 0 10px;
    }
    .orderList .infoBox span{
        width: 56px;
        color: #B769CC;
        background: rgba(183, 105, 204, 0.1);
    }
    .orderList .priceBox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .orderList .priceBox .price{
        font-size: 16px;
        color: #F23030;
    }
    .orderList .priceBox span{  
        text-align: right;
    }
</style>