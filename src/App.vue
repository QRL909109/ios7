<template>
    <div class="_full">
        <!-- app router -->
        <transition name="bounce">
            <router-view></router-view>
        </transition>

        <!--小圆点-->
        <topPoint></topPoint>
    </div>
</template>

<script>
    import store from 'store'
    import topPoint from 'components/tpoint.vue'

    require('assets/css/common.scss')

    export default {
        components:{
            topPoint
        }
    }
</script>

<style scoped>

</style>
