<template>
  <div class="component-tPoint">
    <div class="top_point" :style="contentPosition"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         @click="openModel">
    </div>   <!--小圆点-->

    <transition name="topModel">
      <div class="top_point_model" v-show="topModel">   <!--幕布-->
        <div class="point_model_item">
          <div class="item">
            <i class="iconfont icon-yuyin"></i>   <!--siri-->
            <p class="_align-center font_mar_top">Siri</p>
          </div>
        </div>

        <div class="point_model_item_two">
          <div class="item">
            <i class="iconfont icon-start"></i>  <!--个人收藏-->
            <p class="_align-center font_mar_top">个人收藏</p>
          </div>

          <div class="item">
            <i class="iconfont icon-shebei"></i> <!-- 设备-->
            <p class="_align-center font_mar_top">设备</p>
          </div>
        </div>

        <div class="point_model_item">
          <div class="item" @click="shake">
            <i class="iconfont icon-quanping"></i>  <!--主屏幕-->
            <p class="_align-center font_mar_top">主屏幕</p>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import {shake_active} from 'getters'
  import {set_shake_active} from 'actions'

  export default {
    vuex:{
      getters:{
        shake_active
      },
      actions:{
        set_shake_active
      }
    },
    data(){
      return {
        start:{
          x:0,
          y:0
        },
        current:{
          x:0,
          y:300
        },
        topModel:false
      }
    },
    computed:{
      contentPosition:function(){
        return{
          top :this.current.y + 'px',
          left:this.current.x + 'px'
        }
      }
    },
    methods:{
      touchStart(e){
        var tpoint = document.getElementsByClassName('top_point')[0]

        e = e.changedTouches ? e.changedTouches[0] : e;
        this.start.x = e.clientX - tpoint.offsetLeft;
        this.start.y = e.clientY - tpoint.offsetTop;
      },
      touchMove(e){
        var tpoint = document.getElementsByClassName('top_point')[0]
        e = e.changedTouches ? e.changedTouches[0] : e;
        this.current.x = e.clientX - this.start.x;
        this.current.y = e.clientY - this.start.y;

        if(this.current.x < 0){
          this.current.x = 0;
        }else if(this.current.x > document.documentElement.clientWidth - tpoint.offsetWidth){
          this.current.x = document.documentElement.clientWidth - tpoint.offsetWidth
        }

        if(this.current.y < 0){
          this.current.y = 0;
        }else if(this.current.y > document.documentElement.clientHeight - tpoint.offsetHeight){
          this.current.y = document.documentElement.clientHeight - tpoint.offsetHeight
        }
      },
       touchEnd(e){
         return false;
      },
      openModel(){
        this.topModel = !this.topModel;
        document.getElementsByClassName('top_point_model')[0].style.transformOrigin = this.current.x+'px '+this.current.y+'px';
      },
      shake(){   //判断震动  进行除震动
        if(this.shake_active){
          this.set_shake_active(false);
        }
        //剩余动作调到 首屏
        this.$router.push({path:'/main'})
        this.topModel = false;
      }
    }
  }
</script>

<style scoped lang="scss" type="text/scss">

  .top_point {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    background: url("../assets/images/ios7/top_point.png") no-repeat;
    background-size: 100%;
    width: 1.28rem;
    height: 1.28rem;
  }

  .top_point_model {
    position: absolute;
    z-index: 3;
    top: 25%;
    left: 5%;
    width: 90%;
    background-color: rgba(53,53,53,0.9);
    border-radius: 0.2rem;
    padding-bottom: 0.35rem;
  }

  .point_model_item {
    text-align: center;
    height: 28%;
      .item {
        color: #fff;
          .iconfont{
            font-size: 1.4rem;
          }
      }
  }
  .point_model_item_two{
    height: 25%;
      .item {
        width: 50%;
        display: inline-block;
        color: #fff;
        float: left;
        text-align: center;
          .iconfont {
            font-size: 1.4rem;
          }
      }
  }
  .font_mar_top{
      margin-top: -0.4rem;
  }
  .topModel-enter-active, .topModel-leave-active {
    transition: all .26s ease;
    -webkit-transition: all .26s ease;
  }
  .topModel-enter, .topModel-leave-active {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
</style>
