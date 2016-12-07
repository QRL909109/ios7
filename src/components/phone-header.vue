<template>
    <div class="_cover-top">
        <!--left-->
        <div class="top-back">
            <slot name="left">
                <div class="_ellipsis iconfont" :class="packIcon" @click="backPathHandle">
                    {{backText? '完成' : '编辑'}}
                </div>
            </slot>
        </div>

        <!--right-->
        <div class="top-other">
            <slot name="right">
                <div class="_align-right" @click="nextPathHandle(nextPath)">
                    <span class="iconfont" :class="nextIcon"></span>
                </div>
            </slot>
        </div>

        <!--center-->
        <div class="top-title _effect" :class="{'_effect--50':decline}">
            <slot name="center">
                <p>
                    <span v-text="curText"></span>
                </p>
            </slot>
        </div>
    </div>
</template>

<script>
    import { backPath} from 'getters'
    export default {
        vuex:{
            getters:{
                backPath
            }
        },
        data(){
            return{
                backText: false
            }
        },
        props: {
            'decline':{
                default:false
            },
            'curText':{

            },
            'nextPAth':{

            },
            'nextIcon':{

            },
            'packIcon':{

            },
            'belong':{}
        },
        methods:{
            backPathHandle(){
                this.$emit('change-edit');
                this.backText = !this.backText;
            },
            nextPathHandle(next){

            }
        }
    }
</script>

<style scoped>
    .iconfont{
        color: #796ffd;
    }
</style>
