<template>
  <nav>
    <dl v-for="(item,index) in phone_nav">
      <router-link :to="item.path" exact>
        <dt class="iconfont" :class="item.iconClass">
          <i v-if="item.hint.count"  :class="'_news-'+item.hint.type">{{item.hint | get_prompt}}</i>
        </dt>
        <dd v-text="item.text"></dd>
      </router-link>
    </dl>
  </nav>
</template>

<script>
  import {phone_nav} from 'getters'
  import {get_phone_nav} from 'actions'

  export default {
    vuex:{
      getters:{
        phone_nav
      },
      actions:{
        get_phone_nav
      }
    },
    filters:{
      get_prompt(hint){
        return hint.count;
      }
    },
    created(){
      this.get_phone_nav();
    }

  }
</script>

<style scoped>
  nav{
    display: flex;
    display: -webkit-box;
    width: 100%;
    overflow: hidden;
    padding: 0.15rem;
    background: #f9f9f9;

  }
  nav dl{
    user-select: none;
    -webkit-user-select: none;
    text-align: center;
    line-height: 1;
    width: 25%;
  }
  nav dl > .router-link-active dd,
  nav dl > .router-link-active dt{
    color: #796ffd;
  }
  nav dt{
    position: relative;
    width: 100%;
    margin: 0 auto;
    height: 1.04rem;
    font-size: 0.85rem;
    color: #797979;
    margin-bottom: 2px;
  }
  nav dd{
    color: #929292;
    margin: 0 auto;
  }
  nav ._news-dot{
    right: -2px;
    top:-3px;
    width: 11px;
    height: 11px;
  }

</style>
