<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  html,body{width: 100%;height: 100%;}
  ul,ol{
    list-style:none;
    }
  img{
    display:block;
    border:0;
    }
  header,footer,section,main,nav{
    display:block;
    }
  a{text-decoration:none;color: #000}
  i{font-style:normal;}
</style>
