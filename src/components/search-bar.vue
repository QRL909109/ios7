<template>
    <div class="weui_search_bar" :class="isFocus?'weui_search_focusing' : ''">
        <form class="weui_search_outer">
            <div class="weui_search_inner">
                <i class="weui_icon_search"></i>
                <input type="search" class="weui_search_input" placeholder="搜索" v-model="searchVal" :id="searchId"
                       @input="s_input" @focus="s_focus" @blur="s_blur">
                <a href="javascript:" class="weui_icon_clear" @touchend="reset_val" v_show="hasVal"></a>
            </div>

            <label :for="searchId" class="weui_search_text" @touchend="s_focus">
                <i class="weui_icon_search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui_search_cancel" @touchend="s_blur">取消</a>
    </div>
</template>
<script>
    export default{
        props: {
            searchId: String
        },
        data(){
            return {
                isFocus: false,
                searchVal: '',
                hasVal: false
            }
        },
        methods: {
            s_input(){
                if (this.searchVal !== '') {
                    this.hasVal = true;
                } else {
                    this.hasVal = false;
                }
            },
            s_focus(){
                this.isFocus = true;
            },
            s_blur(){
                this.isFocus = false;
            },
            reset_val(){
                this.searchVal = ''
            }
        }
    }
</script>
<style scoped>

    .weui_search_text span,
    .weui_search_inner .weui_search_input,
    .weui_icon_clear:before,
    .weui_icon_search:before {
        font-size: .4rem;
    }
   /*    [data-dpr="2"]
    .weui_search_text span,
    .weui_search_inner .weui_search_input,
    .weui_icon_clear:before,
    .weui_icon_search:before{
        font-size: 30px;
    }
    [data-dpr="3"]
    .weui_search_text span,
    .weui_search_inner .weui_search_input,
    .weui_icon_clear:before,
    .weui_icon_search:before{
        font-size: 45px;
    }
*/
    .weui_search_cancel,.weui_search_inner .weui_icon_clear,.weui_search_inner .weui_icon_search {
        line-height: 0.7rem;
    }
    .weui_search_inner {
        padding-left: 0.8rem;
        padding-right: 0.5rem;
    }
</style>