<template>
    <div>
        <Xheader :name='name' :link="link"></Xheader>	
		<ul>
			<li v-for="(goods,idx) in itemData" class="list-main" :key="idx" @click="goDetails(goods._id)">
				<img class="list-img" :src="goods.imgurl"/>
				<div class="list-conten">
					<p class="conten-name">{{goods.title}}</p>
					<span class="conten-price">￥{{goods.nprice}}</span>
					<del class="conten-del">￥{{goods.oprice}}</del>
					<span class="conten-but">抢购</span>
				</div>
			</li>		
		</ul>
    </div>
</template>

<script>
import	Xheader from '../components/Xheader.vue';
export default {
	components:{
	   	Xheader
	},
    data(){
        return {
            itemData:[],
			name:"为你甄选",
			link: '/index',
			tabPosition: 'left',
        }
    },
    methods:{
        async getItemData(){
			let data = await this.$axios.get('http://39.97.101.232:3000/item/getData');
			this.itemData = this.itemData.concat(data.data);
		},
		goDetails(id){
			this.$router.push(`/details/${id}`);
		}
    },
    created(){
        this.getItemData();
    }
}
</script>

<style scoped>
.reg-top{
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #000;
	}
	.reg-top-l{
		display: inline-block;
		color: #ccc;
		margin-left: 15px;
	}
		.reg-top-r{
		display: inline-block;
		color: #fff;
		margin-left: 120px;
	}
	.list-main{
		height: 80px;
		margin-left: 10px;
		margin-top: 20px;
		margin-bottom: 30px;
	}
	.list-img{
		float: left;
		width: 90px;
		height: 90px;
	}
	.list-conten{
		float: left;
		height: 80px;
		
	}
	.conten-name{
		font-size: 16px;
		margin-left: 5px;
		margin-top: 5px;
	}
	.conten-price{
		font-size: 16px;
		margin-left: 5px;
		font-weight: bold;
		color: red;
		display: inline-block;
		margin-top: 45px;
	}
	.conten-del{
		font-size: 16px;
		margin-left: 5px;
		
	}
	.conten-but{
		display: inline-block;
		width: 50px;
		height: 22px;
		font-size: 14px;
		margin-left: 110px;
		background: red;
		color: #fff;
		border-radius: 22px;
		text-align: center;
		font-weight: bold;
		line-height: 22px;
		
	}
</style>