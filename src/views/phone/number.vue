<template>
  <div class="component-number">
    <div class="input_number">
      <div class="input_text _ellipsis">{{input_number}}</div>
      <i class="iconfont icon-delete2" v-show="tel_del" @click="del_tel"></i>
    </div>
    <div class="touch_number">
      <div class="touch_number_item">
        <number-item @listen-msg="listenMsg">
          <span slot="main">1</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">2</span>
          <span slot="bottom">ABC</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">3</span>
          <span slot="bottom">DEF</span>
        </number-item>
      </div>
      <div class="touch_number_item">
        <number-item @listen-msg="listenMsg">
          <span slot="main">4</span>
          <span slot="bottom">GHI</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">5</span>
          <span slot="bottom">JKL</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">6</span>
          <span slot="bottom">MNO</span>
        </number-item>
      </div>
      <div class="touch_number_item">
        <number-item @listen-msg="listenMsg">
          <span slot="main">7</span>
          <span slot="bottom">PQRS</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">8</span>
          <span slot="bottom">TUV</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">9</span>
          <span slot="bottom">WXYZ</span>
        </number-item>
      </div>
      <div class="touch_number_item">
        <number-item @listen-msg="listenMsg">
          <span slot="main" style="font-size: 1rem;margin:0.2rem;">*</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main">0</span>
          <span slot="bottom">+</span>
        </number-item>
        <number-item @listen-msg="listenMsg">
          <span slot="main" style="font-size: 1rem;margin:0.2rem;">#</span>
        </number-item>
      </div>
      <div class="touch_number_item">
        <i class="iconfont icon-dianhua1" style="font-size: 1.5rem;color: #0bb20c"></i>
      </div>
    </div>
  </div>
</template>

<script>
import numberItem from 'components/number-item'
  export default {
    data(){
      return{
        tel_del:false,
        input_number:''
      }
    },
    components:{
      numberItem
    },
    watch:{
      input_number : function(val){
        if(val){
          this.tel_del = true;
        }else{
          this.tel_del = false;
        }
      }
    },
    methods:{
      listenMsg(num){
        this.input_number += num;
      },
      del_tel(){
        var num = Array.from(this.input_number)
        num.splice(-1,1)
        this.input_number = num.join('');
      }
    }
  }
</script>

<style scoped lang="scss">
  .component-number{
    width: 100%;
    height: calc(100% - 1.7rem);
    background-color: #f9f9f9;
  }
  .input_number{
    width: 80%;
    margin: 0 auto;

    .input_text{
      border: 1px;
      -webkit-appearance: none;
      background-color: transparent;
      padding: 0.4rem;
      width: 90%;
      height: 1.3rem;
      display: inline-block;
      text-align: center;
      font-size: 0.55rem;
    }

    .iconfont{
      width: 10%;
      height: 1.3rem;
      font-size: 0.4rem;
      display: inline-block;
      float: right;
      padding: 0.4rem;
      vertical-align: middle;
    }
  }

  .touch_number_item{
    display: flex;
    display: -webkit-box;
    justify-content: space-around;
    -webkit-box-pack: center;
    margin: 0.5rem;
    overflow: hidden;
  }
</style>
