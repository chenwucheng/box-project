<template>
    <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,idx) in bannerImg" :key="idx">
            <img :src="item" />
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    name: 'Ibanner',
    data(){
        return {
            //轮播图片
            bannerImg: {
              imgurl1: require(`../assets/banner1.jpg`),
              imgurl2: require(`../assets/banner2.jpg`),
              imgurl3: require(`../assets/banner3.jpg`),
              imgurl4: require(`../assets/banner4.jpg`)
            }
        }
    }
}
</script>

<style scoped>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  img{
    width:100%;
  }
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
