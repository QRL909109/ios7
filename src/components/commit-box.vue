<template>
    <div class="commit-box">
        <div class="commit-container" @touchstart="containerStart" @touchmove="containerMove">
            <!--A-Z-->
            <div class="commit" v-for="(item,index) in commit" :data-alpha="item.belongAlpha">
                <div class="bar">
                    {{item.belongAlpha}}
                </div>
                <div class="paddingT"></div>
                <div class="item" v-for="subitem in item.list">
                    {{subitem.name}}
                </div>
            </div>
        </div>
        <div class="commit-nav">
            <ul>
                <li class="default" v-for="(item,index) in commit" @touchstart="navMove(commit)" @touchmove="navMove(commit)">
                    <div>{{item.belongAlpha}}</div>
                    <i class="iconfont icon-dian"></i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {commit} from 'getters'
    import {get_commit_list} from 'actions'
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
        },
        data(){
            return {
                moveData: '',
                isMoving: false,
                startNavY: 0,
                startContainerY: 0,
                current: {
                    y: ''
                },
                reactAlpha: '',
                scrollEle:null,
                index: 0,
                baseHeight: 0,
                offsetTop: 0,
                eles: [],
                currentEle: null
            }
        },
        mounted(){ //确保DOM结构渲染好了
            this.startNavY = document.getElementsByClassName('commit-nav')[0].offsetTop;
            this.scrollEle = document.getElementsByClassName('commit-main')[0];
            var allEles = document.getElementsByClassName('commit');
            var arr = Array.prototype.slice.call(allEles);
            var _this = this;
            arr.map(function (item) {
                var title = item.getElementsByClassName('bar')[0]

                _this.eles.push({
                    height: item.offsetHeight,
                    titleHeight: title.offsetHeight,
                    title: title,
                    ele: item
                })
            })
            this.offsetTop = allEles[0].offsetTop;
        },
        methods: {
            containerStart(){
                this.startContainerY = document.getElementsByClassName('bar')[0].offsetTop;
            },
            hasClass(obj, cls) {
                return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
            },

            addClass(obj, cls) {
                if (!this.hasClass(obj, cls)) obj.className += " " + cls;
            },

            removeClass(obj, cls) {
                if (this.hasClass(obj, cls)) {
                    var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
                    obj.className = obj.className.replace(reg, ' ');
                }
            },
            containerMove(){
                var that = this.scrollEle;

                if (!this.currentEle) {
                    this.currentEle = this.eles[this.index];
                }
                var currentTitle = this.currentEle.title;

                var _scrollTop = that.scrollTop;

                if (_scrollTop > this.baseHeight) {
                    if (this.hasClass(currentTitle,"bottom")) {
                        this.removeClass(currentTitle,"bottom");
                    }
                    if (!this.hasClass(currentTitle,"fiexd")) {
                        this.addClass(currentTitle,"fiexd");
                    }
                }
                if (_scrollTop > this.baseHeight + this.currentEle.height - this.currentEle.titleHeight) {
                    this.removeClass(currentTitle,"fiexd");
                    this.addClass(currentTitle,"bottom");
                }
                if (_scrollTop > this.baseHeight + this.currentEle.height - 1) {
                    this.baseHeight += this.currentEle.height;
                    if (this.eles.length > this.index + 1) {
                        this.currentEle = this.eles[++this.index];
                    }
                }


                if (_scrollTop < this.baseHeight) {
                    this.removeClass(currentTitle,"fiexd");
                }
                if (this.index > 0 && _scrollTop < this.baseHeight - this.currentEle.titleHeight) {
                    this.currentEle = this.eles[--this.index];
                    this.baseHeight -= this.currentEle.height;
                }
            },
            navMove(commit){  // 根据 （滑动位置 - 距离顶部的高度）/50 取余  得到数组的下标
                var t = event.touches[0];
                this.current = {
                    y: t.clientY - this.startNavY
                }
                this.isMoving = true;
                var index = Math.ceil(this.current.y / 50) - 1; //每一个间隔50px
                if (index > commit.length - 1) {
                    index = commit.length - 1;
                } else if (index <= 0) {
                    index = 0;
                }
                //this.currentIndex = index;
                //console.log(commit[index].belongAlpha);
                this.reactAlpha = commit[index].belongAlpha
            }
        },
        watch: {
            reactAlpha(value){
                document.querySelector('[data-alpha="' + value + '"]').scrollIntoView(false)
            }
        }
    }
</script>
<style scoped>

    .commit-container {
        width: 95%;
        line-height: 0.9rem;
        margin-bottom: 2rem;
    }

    .commit {
        border-bottom: 1px solid #b2b2b2;
        text-align: left;
        position: relative;
    }

    .paddingT {
        padding-top: 0.8rem;
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
        position: absolute;
        top: 0;
        width: 100%;
        height: 0.8rem;
    }

    .fiexd{
        position: fixed;
        top: 2.1rem;
        bottom:auto;
        width: 95%;
    }
    .bottom{
        position: absolute;
        top:auto;
        bottom: 0;
    }
    .auto{
        position: absolute;
        top:0;
        bottom: auto;
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
        line-height: 25px;
    }

</style>