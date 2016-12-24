<template>
    <div class="_full_inner">
        <div class="main_screen">
            <!--时间-->
            <transition name="unlock">
                <section v-show="set_lock" class="time_model">
                    <div class="time_model_time">{{time_h_s | moment('h:mm')}}</div>
                    <div class="time_model_date">{{time_h_s | moment('MMM Do')}} {{time_h_s | moment('dddd')}}</div>
                </section>
            </transition>
            <!--滑动解锁-->
            <transition name="unlock">
                <section v-show="set_lock" class="swipe_b" v-touch:swiperight="unlockHandle">
                    <div class="swipe_unlock">
                        <i class="iconfont icon-youjiantou"></i> 滑动来解锁
                    </div>
                </section>
            </transition>

            <transition name="m_content">
                <section v-show="app_main_show">
                    <!--图标组件-->
                    <itemIcon class="main-section" :menu="app_content_icon" :belong="app_content_belong"></itemIcon>
                </section>
            </transition>

            <transition name="m_footer">
                <footer v-show="app_main_show">
                    <!--图标组件-->
                    <itemIcon class="main-footer" :menu="app_footer_icon" :belong="app_footer_belong"></itemIcon>
                </footer>
            </transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {
            set_lock,
            app_footer_icon,
            app_content_icon,
            app_footer_belong,
            app_content_belong
    } from 'getters'

    import {
            set_lock_active
    } from 'actions'

    import itemIcon from 'components/item-icon.vue'

    export default {
        vuex: {
            getters: {
                set_lock,     //是否锁屏
                app_footer_icon,//底部图标
                app_content_icon, //桌面图标
                app_footer_belong, //属于底部区域
                app_content_belong//属于顶部区域
            },
            actions: {
                set_lock_active
            }
        },
        data(){
            return {
                time_h_s: new Date(),
                app_main_show: false// 底边栏 四个 图标
            }
        },
        mounted(){
            this.getTime(); //在生命周期mounted中使用 计数器
            if (!this.set_lock) {
                this.app_main_show = true
            }
        },
        methods: {
            getTime: function () {
                setInterval(() => {
                    this.time_h_s = new Date()
            },1000)
            },
            unlockHandle(){
                this.set_lock_active();
                this.app_main_show = true
            }
        },
        components: {
            itemIcon
        }
    }
</script>

<style scoped>

</style>
