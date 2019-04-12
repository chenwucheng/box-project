<template>
    <div>
        <ul>
            <li v-for="(item,idx) in nav" :key="idx">
                <router-link to="/list">
                    <img :src="item.imgurl">
                    <span v-text="item.category"></span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nav:[
                {
                    imgurl: require(`../assets/nav1.webp`),
                    category: `美甲`
                },
                {
                    imgurl: require(`../assets/nav2.webp`),
                    category: `做整形`
                },
                {
                    imgurl: require(`../assets/nav3.webp`),
                    category: `美容`
                },
                {
                    imgurl: require(`../assets/nav4.webp`),
                    category: `理疗`
                },
                {
                    imgurl: require(`../assets/nav5.webp`),
                    category: `实物商城`
                },
            ]
        }
    }
}
</script>

<style scoped>
    ul{
        display: flex;
    }
    ul li{
        width: 20%;
        text-align: center;
        background: #000;
    }
    ul li img{
        margin-left: 12px; 
        width: 50px;
    }
    ul li span{
        font-size: 12px;
        color: white;
    }
</style>
