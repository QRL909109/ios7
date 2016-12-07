<template>
    <div class="_full_inner" id="phone">
        <div class="component_phone">
            <router-view></router-view>

            <footer class="app-footer _line-fine">
                <div class="_effect" :class="{'_effect--50':decline}">
                    <phone-nav></phone-nav>
                </div>
            </footer>

        </div>
    </div>
</template>

<script>

import phoneNav from './../components/phone-nav.vue'
require('assets/css/phone.css')

    export default {

        data(){
            return{

            }
        },
        components:{
            phoneNav
        }
    }
</script>

<style scoped>
    .component_phone{
        height: 100%;
        overflow: auto;
    }
    .component_phone::-webkit-scrollbar{
        width:0
    }
</style>
