<template>
  <nav>
    <dl v-for="item in menu" :class="{shake : shake_active}" v-touch:press="shake" @click="linkHref(item.go)">
        <dt :class="item.type"></dt>
        <dd v-text="item.name"></dd>
      <span class="iconfont icon-delete1" @touchend="deleteIcon(item)"></span>
    </dl>
  </nav>
</template>

<script type="text/ecmascript-6">
  import {shake_active} from 'getters'
  import {set_shake_active , del_icon} from 'actions'

  export default{
    vuex:{
      getters:{
        shake_active
      },
      actions:{
        set_shake_active,
        del_icon
      }
    },
    data(){
      return{ }
    },
    props:['menu','belong'],
    methods:{
      shake(){
        this.set_shake_active(!this.shake_active);
      },
      deleteIcon(item){
        this.del_icon(item, this.belong);
        event.preventDefault();
      },
      linkHref(link){
        if(!this.shake_active){   //跳转前判断是否在震动
         this.$router.push({path:link})
        }
      }
    }
  }
</script>