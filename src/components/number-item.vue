<template>
  <div class="number-item" @click="touch_num">
    <div class="number-item-main">
      <slot name="main"></slot>
    </div>
    <div class="number-item-bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>

  export default{
    methods:{
      touch_num(){
        this.$emit('listen-msg', this.$slots.main[0].children[0].text)
      }
    }
  }
</script>
<style scoped>
  .number-item{
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid #10aeff;
    border-radius: 50%;
    text-align: center;
    display: inline-block;
  }
  .number-item-main{
    font-size: 0.63rem;
  }
  .number-item-bottom{
    font-size: 0.27rem;
  }
</style>