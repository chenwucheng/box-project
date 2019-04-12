<template>
    <div>
        <Ibanner />
        <Inav />
        <Imain />
        <Xfooter />
    </div>
</template>

<script>
import Ibanner from '../components/Ibanner.vue';
import Inav from '../components/Inav.vue';
import Imain from '../components/Imain.vue'
import Xfooter from '../components/Xfooter';
export default {
    components: {
        Ibanner,
        Xfooter,
        Imain,
        Inav
    }
}
</script>

<style scoped>
    *{
        border: 1px red;
    }
</style>
