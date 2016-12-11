<template>
    <div class="_full">
        <!-- app router -->
        <transition name="bounce">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
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
        components: {
            topPoint
        }
    }
</script>

<style scoped>

    .bounce-enter-active {
        animation: bounce-in 0.5s;
        -webkit-animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-out 0.2s;
        -webkit-animation: bounce-out 0.2s;
    }

    @keyframes bounce-in {
        0% {
            transform: translate3d(100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }
    @-webkit-keyframes bounce-in {
        0% {
            -webkit-transform: translate3d(100%, 0, 0);
        }
        100% {
            -webkit-transform: translate3d(0, 0, 0);
        }
    }

    @keyframes bounce-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.8;
        }
    }
    @-webkit-keyframes bounce-out {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0.8;
        }
    }

</style>
