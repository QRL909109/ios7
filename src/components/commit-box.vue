<template>
    <div class="commit-box" ref="commitBox">
        <div class="commit-container" ref="commitContainerScroll">
            <ul>
                <!--A-Z-->
                <li class="commit commit-hook" v-for="(item,index) in commit">
                    <div class="bar"
                         :class="[{fiexd :currentIndex == index},{bottom: currentIndex-1 == index },{auto : currentIndex+1 == index}]">
                        {{item.belongAlpha}}
                    </div>
                    <div class="item-wrapper">
                        <div class="item" v-for="subitem in item.list">
                            {{subitem.name}}
                        </div>
                    </div>
                </li>
            </ul>

        </div>
        <div class="commit-nav commit-nav-hook">
            <ul>
                <li class="default nav-default-hook" v-for="(item,index) in commit" @touchstart="navMove(commit)"
                    @touchmove="navMove(commit)">
                    <div>{{item.belongAlpha}}</div>
                    <i class="iconfont icon-dian"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {commit} from 'getters'
    import {get_commit_list} from 'actions'
    import BScroll from 'better-scroll'

    export default{
        vuex: {
            getters: {
                commit
            },
            actions: {
                get_commit_list
            }
        },
        created(){
            this.get_commit_list();
            this.$nextTick(() => {
                this._initScroll();
                this._calculateHeight()
            })
        },
        data(){
            return {
                scrollY: 0,
                listHeight: []
            }
        },
        computed: {
            currentIndex(){
                for (let i = 0; i < this.listHeight.length; i++) {
                    let height1 = this.listHeight[i];
                    let height2 = this.listHeight[i + 1];
                    if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
                        return i;
                    }
                }
                return 0;
            }
        },
        methods: {
            _initScroll(){
                this.containerScroll = new BScroll(this.$refs.commitContainerScroll, {
                    probeType: 3
                });
                this.containerScroll.on('scroll', (pos)=> {
                    this.scrollY = Math.abs(Math.round(pos.y));

                    //在滚动时候  给固定 fiexd 添加滚动距离
                    if(document.getElementsByClassName('bottom')[0] ){
                        document.getElementsByClassName('bottom')[0].style.transform = 'translateY(0)';
                    }
                    document.getElementsByClassName('fiexd')[0].style.transform = 'translateY('+this.scrollY+'px)';
                    document.getElementsByClassName('auto')[0].style.transform = 'translateY(0)';
                })
            },
            _calculateHeight(){
                let commitList = this.$refs.commitBox.getElementsByClassName('commit-hook');
                let height = 0;
                this.listHeight.push(height)
                for (let i = 0; i < commitList.length; i++) {
                    let item = commitList[i]
                    height += item.clientHeight;
                    this.listHeight.push(height)
                }
            },

            navMove(commit){//检测点击与滑动
                var t = event.touches[0];
                this.currentY = t.clientY - this.$refs.commitBox.getElementsByClassName('commit-nav-hook')[0].offsetTop;
                let navHeight = this.$refs.commitBox.getElementsByClassName('nav-default-hook')[0].clientHeight;
                var index = Math.ceil(this.currentY / navHeight) - 1; //每一个间隔

                if (index > commit.length - 1) {
                    index = commit.length - 1;
                } else if (index <= 0) {
                    index = 0;
                }
                let commitList = this.$refs.commitBox.getElementsByClassName('commit-hook');
                let el = commitList[index];
                this.containerScroll.scrollToElement(el, 300);
            }
        }
    }
</script>
<style scoped>
    .commit-box {
        height: 100%;
    }

    .commit-container {
        width: 95%;
        line-height: 0.9rem;
        margin-bottom: 2rem;
        height: 100%;
    }
    .commit {
        border-bottom: 1px solid #b2b2b2;
        text-align: left;
        position: relative;
    }

    .item {
        border-bottom: 1px solid #b2b2b2;
        margin-left: 0.3rem;
    }

    .item:last-child {
        border-bottom: 0;
    }

    .bar {
        background-color: rgb(242, 242, 242);
        padding-left: 0.3rem;
        font-size: 0.5rem;
        width: 100%;
        height: 0.8rem;
        position: absolute;
        top:0;
    }
    .bar.fiexd{
        position: fixed;
        top: 0;
        bottom:auto;
    }
    .bar.bottom{
        position: absolute;
        top:auto;
        bottom: 0;
    }
    .item-wrapper{
        padding-top: 0.8rem;
    }
    .commit-nav {
        position: fixed;
        right: 0;
        top: 25%;
        width: 5%;
        z-index: 101;
        text-align: center;
    }

    .commit-nav li {
        line-height: 0.35rem;
    }

</style>