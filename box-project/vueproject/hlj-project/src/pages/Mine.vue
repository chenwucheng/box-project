<template>
    <div>
		<div class="mytop">
			<div class="topimg">
				<img class="mytop-img" src="../assets/mytop.png" alt="" />
				<img class="mytop-img2" src="../assets/mytop2.png" alt="" />
				
			</div>
			<div class="mytop2">
				<router-link to="/login">
					<img class="mytop-img3" src="../assets/mytop3.png" alt="" />
				</router-link>
				<div class="mytop-r">
					<a href="##"><span class="btn-login" v-text="curuser"></span></a><br />
					<span class="mytop-tex">普通会员></span>
				</div>
				
			</div>
		</div>
		<div class="mymain">
			<div class="mydd">
				<a href="##">
					<span class="mydd-l">我的订单</span>
				</a>
				<span class="mydd-r">查看全部></span>
			</div>
			<ul class="myfk">
					<li v-for="(goods,idx) in fk" class="myfkli" :key="idx">
						<img class="myfkli-img" :src="goods.url" alt="" />
						<span class="mytex2">{{goods.name}}</span>
					</li>					
				</ul>
				<div class="mydd">
					<a href="##">
						<span class="mydd-l">我的拼团</span>
					</a>
					<span class="mydd-r">查看全部></span>
				</div>
				<ul class="myfk">
					<li v-for="(goods,idx) in pt" class="myfkli" :key="idx">
						<img class="myfkli-img" :src="goods.url" alt="" />
						<span class="mytex2">{{goods.name}}</span>
					</li>					
				</ul>		
		</div>
        <Xfooter/>
    </div>
</template>

<script>
import Xfooter from '../components/Xfooter';

export default {
    components: {
        Xfooter
    },
    data(){
 			return{
			curuser: '未登录',	
 			fk:[
 			{
 				url:require('../assets/mydd.png'),
 				name:'待付款'
 			},
 			{
 				url:require('../assets/mydd.png'),
 				name:'待付款'
 			},
 			{
 				url:require('../assets/mydd.png'),
 				name:'待付款'
 			},
 			{
 				url:require('../assets/mydd.png'),
 				name:'待付款'
 			},
 			{
 				url:require('../assets/mydd.png'),
 				name:'待付款'
 			}
 			],
 			pt:[
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			},
 			{
 				url:require('../assets/mypt.png'),
 				name:'平台VIP卡'
 			}
 			
 			]
 		}
	 },
	 created(){
		let token = localStorage.getItem('token');
		if(token !=null){
			this.$axios({
				method: "post",
				url: "http://39.97.101.232:3000/users/isLogin",
				data: this.$qs.stringify({
					isToken: token,
				})
			}).then(res => {
				let fn = {
					true: () => {
						this.curuser = res.data.curuser;
					},
					false: () => {
						this.curuser = '未登录';
					}
				};
				fn[res.data.status]();
			});
		}
	 }
}
</script>

<style scoped>
.mytop{
		height: 120px;
		background: #232120;
	}
	.topimg{
		height: 30px;
	}
	.mytop-img{
		width: 20px;
		height: 20px;
		float: left;
		margin-left: 290px;
		margin-top: 10px;
	}
	.mytop-img2{
		width: 26px;
		height: 22px;
		float: left;
		margin-left: 20px;
		margin-top: 10px;
		
	}
	.mytop-img3{
		width: 60px;
		height: 55px;
		float: left;
		margin-left: 20px;
		
		
	}
	.mytop2{
		height: 60px;
		margin-top: 10px;
		
	}
	.mytop2-r{
		height: 60px;
		float: left;
	}
	.btn-login{
		color: #fff;
		margin-left: 15px;
		
	}
	.mytop-tex{
		background: skyblue;
		border-radius: 10px;
		display: inline-block;
		margin-left: 10px;
		font-size: 14px;
	}
	.mymain{
		background: #F7F7F7;
		margin-top: 10px;
	}
	.mydd{
		
		height: 30px;
		background: #fff;
		margin-top: 10px;
		
	}
	.mydd-l{
		display: inline-block;
		color: #000;
		margin-top: 10px;
		margin-left: 20px;
		font-size: 14px;
	}
	.mydd-r{
		display: inline-block;
		margin-left: 210px;
		font-size: 14px;
		
		
	}
	.myfk{
		height: 100px;
		margin-top: 10px;
		margin-top: 10px;
		background: #fff;
		
	}
	.myfkli{
		width: 75px;
		height: 44px;
		text-align: center;
		float: left;
		margin-top: 10px;
	}
	.myfkli-img{
		width: 25px;
		height: 25px;
		margin-left: 24px;
	}
	.mytex2{
		font-size: 12px;
	}
</style>
