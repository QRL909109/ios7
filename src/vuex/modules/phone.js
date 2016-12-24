/**
 * Created by Administrator on 2016/11/21.
 */
import {
    SET_PHONE_MENU,
    BACK_PATH,
    GET_PERSONAL_LIST,
    DEL_PERSONAL_ITEM,
    GET_COMMIT_LIST,
    GET_RECENT_LIST,
    SET_PHONE_DETAIL
} from '../mutation-type'

let store = {
    backPath: {
        path:''
    },
    phone_nav: [{       //导航
        index: 0,
        path: {
            path: '/phone'
        },
        hint: {type: null, count: ''}, //count,dot
        iconClass: 'icon-start',
        text: '个人收藏'
    }],
    //menu_active: {text: '', index: 0},  //激活导航
    personal_list: [],                //个人收藏
    commit_list: [],                    //通讯录
    recent_list: [],                     //最近通话列表
    recent_no_list: []                     //最近通话列表

};

const mutations = {
    [SET_PHONE_MENU](state, phone_nav){
        state.phone_nav = phone_nav
    },
    [GET_PERSONAL_LIST](state, personal){
        state.personal_list = personal;
        console.log('mutations get 数据',state.personal_list)
    },
    [DEL_PERSONAL_ITEM](state,id,type){
        var index = state[type].slice().findIndex(value => value.id == id);
        state[type].splice(index, 1);
        console.log('mutations del 数据',state[type])
    },
    [GET_COMMIT_LIST](state, commit){
        state.commit_list = commit;
    },
    [GET_RECENT_LIST](state, list){

        state.recent_list = list.slice().sort((a, b) => {
            return parseFloat(b.contentDate) - parseFloat(a.contentDate)
        });

        state.recent_no_list= list.filter((item) => {
            return item.recent === false;
        });
    },
    [BACK_PATH](state , _path){
        //console.log('sdsdsdsds',_path) //更新不了 只初始化第一次
        state.backPath = {
            path: _path
        };
    }
};
export default{
    store,
    mutations
}