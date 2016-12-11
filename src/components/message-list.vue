<template>
    <div>
        <div v-for="(item,index) in messageList" class="personal_list">
            <div class="phone-li" :class="{'current':currentIndex == index}">
                <!--del-->
                <transition name="fade">
                    <div class="phone-del" v-show="isEdit">
                        <i class="iconfont icon-delete1 red" @click="del_message(index)"></i>
                    </div>
                </transition>

                <!--left-->
                <div class="message-left">
                    <i class="iconfont default" :class="iconLeft" v-show="!item.read"></i> <!--默 认-->
                </div>

                <!--main-->
                <div class="message-main" @click="tap_detail(index)">
                    <div class="message-name" v-text="item.source"></div>
                    <div class="phone-sub gray" v-text="item.date">
                        星期五
                    </div>

                    <div class="message-icon">
                        <i class="iconfont icon-youjiantou gray"></i>
                    </div>
                </div>
            </div>
            <div class="message-detail">{{item.info}}</div>
            <div class="handle">
                <div class="handle-del red_bg" @click="del_item(item.id)">
                    删除
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {del_message_item,set_phone_detail} from 'actions'

    export default {
        vuex: {
            actions: {
                del_message_item,
                set_phone_detail
            }
        },
        data(){
            return {
                phoneSub: true,
                phoneName: '',
                iconLeft: 'icon-dian',
                phoneType: '',
                currentIndex: -1,
                isSwipe: false //验证是否左滑
            }
        },
        props: ['messageList', 'isEdit'],

        methods: {
            del_message(index){
                if (!this.isSwipe) {
                    this.isSwipe = true;
                    this.currentIndex = index;
                } else {
                    this.isSwipe = false;
                }
            },
            del_item(id){

                this.del_message_item(id, () => {
                    this.currentIndex = -1;
            })
            },
            tap_detail(_index){
                var index = _index;
                if (index >= 0 && !this.isSwipe) {

                   /* this.set_phone_detail(this.messageList[index]);
                    var fullPath = this.$router.currentRoute.fullPath;
                    this.$router.push({
                        path: fullPath + '/detail'
                    })*/
                }
                this.isSwipe = false;
                this.currentIndex = -1;
            }
        }

    }
</script>

<style scoped>
    .message-detail {
        padding-left: 1rem;
    }

    .message-name {
        width: 75%;
        font-size: 0.5rem;
    }
    .message-left{

    }
    .message-main {
        width: 90%;
        padding-bottom: 0.2rem;
        display: flex;
        flex-direction: row;
    }
    .message-icon .iconfont{
        font-size: 20px;
    }
</style>
