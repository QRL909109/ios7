<template>
  <div class="_full_inner">
    <header class="app-header">
      <div class="_effect" :class="{'_effect--50':decline}">
        <phone-header
                :cur-text="phoneModel.curText"
                :next-icon="phoneModel.nextIcon"
                @change-edit="changeEdit"
        ></phone-header>
      </div>
    </header>
    <div class="app-content">
      <div class="phone-list _effect" :class="{'_effect--50':decline}">
        <keep-alive>
          <phone-list
                  :personList="personalList"
                  :belong="listBelong"
                  :isEdit="is_edit"
          ></phone-list>
        </keep-alive>
      </div>
    </div>
    <!--personal  router-->
    <keep-alive>
      <router-view ></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import phoneHeader from 'components/phone-header.vue'
  import phoneList from 'components/phone-list.vue'

  import {personal_list} from 'getters'
  import {get_phone_list} from 'actions'

  export default {
    vuex:{
      getters:{
        personal_list
      },
      actions:{
        get_phone_list
      }
    },
    data(){
      return{
        phoneModel:{
          curText:'个人收藏',
          nextIcon:'icon-jia1'
        },
        listBelong:'personal',
        is_edit:false,
        decline:false
      }
    },
    components:{
      phoneHeader,
      phoneList
    },
    created(){
      this.get_phone_list();
    },
    computed:{
      personalList(){
        return this.personal_list;
      }
    },
    methods:{
      changeEdit(){
        this.is_edit = !this.is_edit;
      }
    }
  }
</script>

<style scoped>

</style>
