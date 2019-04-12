<template>
    <div class="mine">
        <FlSearch class="mine1"></FlSearch>
        <FlMain class="mine2"></FlMain>
        <Xfooter class="mine3"/>
    </div>
</template>

<script>
import Xfooter from '../components/Xfooter';
import FlSearch from '../components/FlSearch';
import FlMain from '../components/FlMain';

export default {
    components: {
        Xfooter,
        FlSearch,
        FlMain
    }
}
</script>

<style scoped>
.mine{
	display: flex;
	flex-direction: column;
}
.mine1{
	
	
}
.mine2{
	flex: 1;
	
}
.mine3{
	height: 7%;
	
}

</style>