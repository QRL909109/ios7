/**
 * Created by Administrator on 2016/11/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'

//基本
import base from './modules/base'
//电话
import phone from './modules/phone'
//信息
import message from './modules/message'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        base,
        phone,
        message
    }
})