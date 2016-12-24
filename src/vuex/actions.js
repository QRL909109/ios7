/**
 * Created by Administrator on 2016/11/19.
 */
/*main*/
export const set_lock_active = ({dispatch}) => {
    dispatch('SET_LOCK')
}
export const set_shake_active = ({dispatch}, type) => {
    dispatch('SET_SHAKE', type)
}
export const del_icon = ({dispatch}, ...args) => {
    dispatch('DEL_ICON', ...args)
}

/*phone*/
export const get_phone_nav = ({dispatch}) => {
    let phone_nav = require('../mock/phone-nav')
    dispatch('SET_PHONE_MENU', phone_nav.phone_nav)
}

export const get_phone_list = ({dispatch}) => {
    let personal_list = require('../mock/phone-info');

    dispatch('GET_PERSONAL_LIST', personal_list.slice(0).filter((item) => {
        return item.personal === true
    }))
}
export const del_personal_list = ({dispatch}, id, type, fn) => {
    dispatch('DEL_PERSONAL_ITEM', id ,type);
    !!fn && fn();
}

export const get_commit_list = ({dispatch}) => {
    let commit_list = require('../mock/phone-commit')
    dispatch('GET_COMMIT_LIST', commit_list);
}

export const get_recent_list = ({dispatch}) => {
    let list = require('../mock/phone-info');

    dispatch('GET_RECENT_LIST', list)
}
export const set_phone_detail = ({dispatch} , model) =>{
    dispatch('SET_PHONE_DETAIL' , model)
}
export const get_message_list = ({dispatch}) => {
    let list = require('../mock/message-info')
    dispatch('GET_MESSAGE_LIST', list);
}
export const del_message_item = ({dispatch}, id, fn) => {
    dispatch('DEL_MESSAGE_ITEM', id);
    !!fn && fn();
}


