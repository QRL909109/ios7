<template>
  <div class="_full_inner _effect">
    <header class="app-header">
      <div class="_effect" :class="{'_effect--50':decline}">
        <phone-header
                :belong="listBelong"
                @change-edit="changeEdit">
          <div slot="center" class="phone-header-connect">
            <span @click="allConnect" :class="{'default':all_or_no}">所有通话</span>
            <span @click="notConnect" :class="{'default': !all_or_no}">未接来电</span>
          </div>
          <span slot="right"></span>
        </phone-header>
      </div>
    </header>
    <div class="app-content">
      <div class="phone-list">
        <transition name="phone-recent">
          <keep-alive>
            <phone-list
                    :personList="recent_list"
                    :belong="listBelong"
                    :isEdit="is_edit"
                    v-show="all_or_no"
            ></phone-list>
          </keep-alive>
        </transition>
        <transition name="phone-recent">
          <keep-alive>
            <phone-list
                    :personList="recent_no_list"
                    :belong="listBelong"
                    :isEdit="is_edit"
                    v-show="!all_or_no"
            ></phone-list>
          </keep-alive>
        </transition>
      </div>
    </div>
    <!--recent  router-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>

<script>
  import phoneHeader from 'components/phone-header.vue'
  import phoneList from 'components/phone-list.vue'

  import {recent_list ,recent_no_list} from 'getters'
  import {get_recent_list} from 'actions'

  export default {
    vuex:{
      getters:{
        recent_list,
        recent_no_list
      },
      actions:{
        get_recent_list
      }
    },
    data(){
      return{
        listBelong:'recent',
        all_or_no:true,
        is_edit:false,
        decline:false
      }
    },
    components:{
      phoneHeader,
      phoneList
    },
    created(){
      this.get_recent_list();
    },
    methods:{
      allConnect(){
        this.all_or_no = true;
        this.listBelong = 'recent'
      },
      notConnect(){
        this.all_or_no = false;
        this.listBelong = 'no_recent'
      },
      changeEdit(){
        this.is_edit = !this.is_edit;
      }
    },
    events:{
      'route-pipe'(_decline){
        this.decline = _decline;
        console.log('我被cu发了')
      }
    }
  }
</script>

<style scoped>

</style>
