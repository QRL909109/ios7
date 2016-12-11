/**
 * Created by Administrator on 2016/11/21.
 */
import {
    GET_MESSAGE_LIST,
    DEL_MESSAGE_ITEM
} from '../mutation-type'

let store = {
    message_list: []                     //最近通话列表
};

const mutations = {

    [DEL_MESSAGE_ITEM](state,id){
        var index = state.message_list.findIndex(value => value.id == id);

        state.message_list.splice(index, 1);
    },
    [GET_MESSAGE_LIST](state, list){
        state.message_list = list;
    }
};
export default{
    store,
    mutations
}