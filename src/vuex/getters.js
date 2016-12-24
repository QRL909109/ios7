/**
 * Created by Administrator on 2016/11/19.
 */


export const set_lock = ({base}) => base.set_lock
export const app_footer_icon = ({base}) => base.app_footer_icon.menu
export const app_content_icon = ({base}) => base.app_content_icon.menu
export const app_footer_belong = ({base}) => base.app_footer_icon.belong
export const app_content_belong = ({base}) => base.app_content_icon.belong
export const shake_active = ({base}) => base.shake_active


/*phone*/
export const backPath = ({phone}) => phone.backPath
export const phone_nav = ({phone}) => phone.phone_nav

export const personal_list = ({phone}) => {
    console.log('getters 返回的数据', phone.personal_list)
    return phone.personal_list
}

export const commit = ({phone}) => phone.commit_list; //通讯录列表

export const recent_list = ({phone}) => phone.recent_list //获取所有通话
export const recent_no_list = ({phone}) => phone.recent_no_list//获取所有通话

export const phone_detail = ({base}) => base.phone_detail
export const message_list = ({message}) => message.message_list
