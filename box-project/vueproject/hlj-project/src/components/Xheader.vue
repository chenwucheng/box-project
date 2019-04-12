<template>
	<div class="reg-top">
		<router-link :to="link">
			<span class="reg-top-l"><</span>
		</router-link>
			<span class="reg-top-r" v-text='name'></span>
		</div>
</template>

<script type="text/javascript">
	export default{
		props:['name','link']
	};
</script>

<style scoped type="text/css">
	.reg-top{
		position: relative;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #000;
		text-align: center;
	}
	.reg-top-l{
		display: inline-block;
		color: #ccc;
		margin-left: 15px;
		position: absolute;
		left: 0;
		top: 0;
	}
	.reg-top-r{
		display: inline-block;
		color: #fff;
	}
</style>