<template>
    <div>
        <div v-for="(item,index) in personList" class="personal_list">
            <div class="phone-li" :class="{'current':currentIndex == index}">
                <!--del-->
                <transition name="fade">
                    <div class="phone-del" v-show="isEdit">
                        <i class="iconfont icon-delete1 red" @click="del_phone(index)"></i>
                    </div>
                </transition>

                <!--left-->
                <div class="phone-left">
                    <i class="iconfont gray" :class="iconLeft" v-show="!item.iconSrc"></i> <!--默 认-->
                    <img :src="item.iconSrc" v-show="item.iconSrc" class="iconSrc">
                </div>

                <!--main-->
                <div class="phone-main" @click="tap_detail(index)">
                    <div class="phone-name" v-text="item.name" :class="{'red':!item.recent}"></div>

                    <div class="phone-sub gray" v-show="!phoneSub" v-text="item.contentDate">
                        星期五
                    </div>
                    <div class="phone-sub gray" v-show="phoneSub" v-text="item.from">
                        移动
                    </div>

                    <div class="phone-icon">
                        <i class="iconfont icon-alert default"></i>
                    </div>
                </div>


            </div>
            <slot name="detail"></slot>
            <div class="handle">
                <div class="handle-del red_bg" @click="del_personal(item.id)">
                    删除
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {del_personal_list,set_phone_detail} from 'actions'

    export default {
        vuex: {
            actions: {
                del_personal_list,
                set_phone_detail
            }
        },
        data(){
            return {
                phoneSub: true,
                phoneName: '',
                iconLeft: 'icon-peopleb',
                phoneType: '',
                currentIndex: -1,
                isSwipe: false //验证是否左滑
            }
        },
        props: ['personList', 'belong', 'isEdit'],
        created(){
            if (this.belong == 'personal') {
                this.phoneSub = true;
            } else if (this.belong == 'recent') {
                this.phoneSub = false;
            }
        },
       /* computed: {
            personLists(){ //根据 不同状态排序 并做预防personList为 空
                if (!this.personList) {
                    return [];
                }
                if (this.belong == 'recent' || this.belong == 'no_recent') {
                    return this.personList.slice().sort((a, b) => {
                                return parseFloat(b.contentDate) - parseFloat(a.contentDate)
                            }
                )
                } else if (this.belong == 'personal') {
                    return this.personList.slice();
                }
            }
        },*/
        methods: {
            del_phone(index){
                if (!this.isSwipe) {
                    this.isSwipe = true;
                    this.currentIndex = index;
                } else {
                    this.isSwipe = false;
                }
            },
            del_personal(id){
                var type = '';
                switch (this.belong) {
                    case 'personal' :
                        type = 'personal_list';
                        break;
                    case 'recent' :
                        type = 'recent_list';
                        break;
                    case 'no_recent' :
                        type = 'recent_no_list';
                        break;
                }
                this.del_personal_list(id, type, ()=> {
                    this.currentIndex = -1;
                });
                /* this.personLists.splice( this.personLists.findIndex( value => value.id == id), 1)
                 this.currentIndex = -1;*/
            },
            tap_detail(_index){
                var index = _index;
                if(index >= 0 && !this.isSwipe){

                    this.set_phone_detail(this.personList[index]);
                    var fullPath = this.$router.currentRoute.fullPath;
                    this.$router.push({
                        path: fullPath+'/detail'
                    })
                }
                this.isSwipe = false;
                this.currentIndex = -1;
            }
        }

    }
</script>

<style scoped>

</style>
