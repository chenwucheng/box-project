<template>

  <el-tabs class="FlMain" :tab-position="tabPosition" >
    <el-tab-pane label="美甲">
    	<div>
    		<div>
    			<img class="FlMain-top" src="../assets/flmain-top.webp"/>
    		</div>
    		<div>
    			<span class="FlMain-top2">全部美甲></span>
    		</div>
    		<div>
    			<span class="FlMain-top3">TOP款式</span>
    		</div>
    		<ul>
    			<li v-for="(goods,idx) in imgurl" class="FlMain-img" :key="idx">
						<router-link to="/list">
							<img :src="goods.url"/>
						</router-link> 
    				<span>{{goods.name}}</span>
    			</li>
    			
    		</ul>
    	</div>
    </el-tab-pane>
    <el-tab-pane label="美容">美容</el-tab-pane>
    <el-tab-pane label="微整形">微整形</el-tab-pane>
    <el-tab-pane label="美体">美体</el-tab-pane>
    <el-tab-pane label="美睫">美睫</el-tab-pane>
    <el-tab-pane label="美发">美发</el-tab-pane>
    <el-tab-pane label="健身">健身</el-tab-pane>
    <el-tab-pane label="化妆">化妆</el-tab-pane>
    <el-tab-pane label="半永久">半永久</el-tab-pane>
    <el-tab-pane label="瘦身">瘦身</el-tab-pane>
    <el-tab-pane label="体雕塑型">体雕塑型</el-tab-pane>
    
    
  </el-tabs>
  
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'left',
        imgurl:[
        		{
        			url:require('../assets/flmain-img1.webp'),
        			name:'镶嵌'
        		},
        		{
        			url:require('../assets/flmain-img1.webp'),
        			name:'法式'
        		},{
        			url:require('../assets/flmain-img1.webp'),
        			name:'晕染'
        		},{
        			url:require('../assets/flmain-img2.webp'),
        			name:'渐变'
        		},{
        			url:require('../assets/flmain-img2.webp'),
        			name:'彩绘'
        		},{
        			url:require('../assets/flmain-img2.webp'),
        			name:'雕花'
        		}
        ]
        
      };
    }
  };
</script>
<style scoped>
	.FlMain{
		
		height: 580px;
		background: #F7F7F7;
		padding-top: 10px;
		
	}
	.FlMain-top{
		height:95px;
	}
	.FlMain-top2{
		display: inline-block;
		margin-left: 185px;
		margin-top: 20px;
		color: #C0A168;
		font-size: 14px;
		
	}
	.FlMain-top3{
		display: inline-block;
		font-size: 14px;
		margin-top: 20px;
		
	}
		.FlMain-img {
		width: 80px;
		height: 110px;
		text-align: center;
		margin-top: 10px;
		margin-right: 10px;
		float: left;
	}
	.FlMain-img img{
		width: 80px;
		height: 88px;
	}
</style>