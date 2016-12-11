<template>
    <div class="_full_router">
        <div class="_full_inner">
            <header class="app-header">
                <div class="_effect" :class="{'_effect--50':decline}">
                    <phone-header

                            :cur-text="phoneModel.curText"
                            :next-icon="phoneModel.nextIcon"
                    >
                        <div class="_ellipsis iconfont icon-backleft" @click="backPathHandle" slot="left">
                            返回
                        </div>
                    </phone-header>
                </div>
            </header>
            <section class="app-content _effect">
                <div class="detail_component">
                    <div class="detail-media">
                        <div class="media-left">
                            <i class="iconfont icon-peopleb gray" v-show="!phone_detail.iconSrc"></i> <!--默 认-->
                            <img :src="phone_detail.iconSrc" v-show="phone_detail.iconSrc" class="iconSrc">
                        </div>
                        <div class="media-right">{{phone_detail.name}}</div>
                    </div>

                    <div class="detail-model">
                        <div class="model-item">
                            <div class="model-col">
                                <div>{{phone_detail.contentDate}}</div>
                                <div>呼出电话</div>
                                <div class="_align-center">2分钟</div>
                            </div>
                        </div>
                        <div class="model-item">
                            <div class="model-col" v-for="item in phone_detail.phone">
                                <div class="model-phone default">
                                    {{item}}
                                </div>
                                <div class="_align-center">
                                    <i class="iconfont icon-tel-bling default"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    </div>
</template>

<script>

    import phoneHeader from 'components/phone-header.vue'
    import {phone_detail} from 'getters'
    export default {
        vuex: {
            getters: {
                phone_detail
            }
        },
        data(){
            return {
                phoneModel: {
                    curText: '个人资料',
                    nextIcon: ''
                },
                backPath: {
                    path: ''
                }
            }
        },
        components: {
            phoneHeader
        },
        /*activated(){ //无法出发上一个页面
         this.$emit('route-pipe' , true)
         console.log('进来啦')
         },
         deactivated(){
         this.$emit('route-pipe' , false)
         console.log('离开啦')
         },*/
        methods: {
            backPathHandle(){
                this.$router.push({
                    path: this.backPath.path
                })
            }
        },
        beforeRouteEnter (to, from, next) { //本来尝试用vuex phone 里面的backpah  但是没有更新 后续进行修改
            next(vm => {
                vm.backPath.path = from.path
        })
        },
        activated(){
            console.log(this.phone_detail.name)
        }
    }
</script>

<style scoped>
    .detail_component {
        padding: 0.5rem 0 0 0.8rem;
    }
    .detail-media{
        display: flex;
        flex-direction: row;
        padding-bottom: 0.8rem;
        border-bottom: 1px solid #b2b2b2;
    }
    .media-left{
        flex: 1;
    }
    .media-right{
        flex: 80%;
        padding-left: 0.5rem;
        font-size: 40px;
        display: inline-flex;
        align-items: center;
    }
    .iconSrc{
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
    }
    .icon-peopleb{
        font-size: 65px;
    }
    .icon-tel-bling{
        font-size: 25px;
    }
    .model-item{
        border-bottom: 1px solid #d2d2d2;
        padding: 0.35rem 0;
    }
    .model-item .model-col{
        display: flex;
    }
    .model-item .model-col>div{
        flex: 1;
    }
</style>
