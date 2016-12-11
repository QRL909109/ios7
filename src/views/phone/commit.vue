<template>
    <div class="_full_inner _effect">
        <header class="app-header">
            <div class="_effect" :class="{'_effect--50':decline}">
                <phone-header
                        :cur-text="phoneModel.curText"
                        :next-icon="phoneModel.nextIcon"
                >
                    <span slot="left"></span>
                </phone-header>
            </div>
        </header>
        <section class="app-content">
            <div class="commit-searchBar">
                <search-bar></search-bar>
            </div>


            <!--通讯录-->
            <div class="commit-main">
                <commit-box></commit-box>
            </div>

        </section>
    </div>

</template>

<script>

    import phoneHeader from 'components/phone-header.vue'
    import searchBar from 'components/search-bar.vue'
    import commitBox from 'components/commit-box.vue'

    export default {
        data(){
            return {
                phoneModel: {
                    curText: '所有联系人',
                    nextIcon: 'icon-jia1',
                    decline: false
                }
            }
        },
        components: {
            phoneHeader,
            searchBar,
            commitBox
        },
        events: {
            'route-pipe'(_decline){
                this.decline = _decline;
                console.log('我被cu发了')
            }
        }
    }
</script>

<style scoped>
   .commit-searchBar {
        position: relative;
        width: 100%;
        z-index: 3;
    }
    .commit-main{
        height:90%
    }
</style>
