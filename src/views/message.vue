<template>
  <div class="_full_inner _effect">
    <header class="app-header">
      <div class="_effect">
        <phone-header
                :cur-text="phoneModel.curText"
                :next-icon="phoneModel.nextIcon"
                @change-edit="changeEdit"
        >
        </phone-header>
      </div>
    </header>
    <section class="app-content">
      <div class="commit-searchBar">
        <search-bar></search-bar>
      </div>

      <!--通讯录-->
      <div class="commit-main">
        <message-list
                :messageList="message_list"
                :isEdit="is_edit"
        >
        </message-list>
      </div>

    </section>
  </div>

</template>

<script>

  import phoneHeader from 'components/phone-header.vue'
  import searchBar from 'components/search-bar.vue'
  import messageList from 'components/message-list.vue'
  
  import {message_list} from 'getters'
  import {get_message_list , del_message_item} from 'actions'
  require('assets/css/phone.css')
  export default {
    vuex:{
      getters:{
        message_list
      },
      actions:{
        get_message_list,
        del_message_item
      }
    },
    data(){
      return {
        phoneModel: {
          curText: '信息',
          nextIcon: ''
        },
        is_edit:false
      }
    },
    methods:{
      changeEdit(){
        this.is_edit = !this.is_edit;
      }
    },
    components: {
      phoneHeader,
      searchBar,
      messageList
    },
    created(){
      this.get_message_list()
    }
  }
</script>

<style scoped>
  .commit-searchBar{
    position: fixed;
    width: 100%;
    z-index: 3;
    height: 1rem;
  }
  .commit-main{
    margin-top: 0.89rem;
    height: 100%;
    overflow: scroll;
  }
</style>
