/**
 * Created by Administrator on 2016/11/21.
 */
import {
    SET_LOCK,
    SET_SHAKE,
    DEL_ICON,
    SET_PHONE_DETAIL

} from '../mutation-type'

let state = {

    shake_active:false, //震动
    set_lock: true,  //锁屏
    app_footer_icon:{
        belong:'footer',
        menu:[   //底部四个icon
            {
                id:1,
                type:'scon-tel',
                name:'电话',
                go:'/phone'
            },{
                id:2,
                type:'scon-mess',
                name:'信息',
                go:'/message'
            },{
                id:3,
                type:'scon-set',
                name:'设置',
                go:'/set'
            },{
                id:4,
                type:'scon-elem',
                name:'饿了么',
                go:'/elem'
            }
        ]
    },
    app_content_icon:{
        belong:'content',
        menu:[    //主屏幕icon
            {
                id:1,
                type:'scon-tel',
                name:'电话',
                go:'/phone'
            },{
                id:5,
                type:'scon-address',
                name:'地址',
                go:'/'
            },{
                id:3,
                type:'scon-set',
                name:'设置',
                go:'/set'
            },{
                id:2,
                type:'scon-mess',
                name:'信息',
                go:'/message'
            },{
                id:6,
                type:'scon-com',
                name:'摄影',
                go:'/'
            },{
                id:7,
                type:'scon-pic',
                name:'照片',
                go:'/'
            },{
                id:8,
                type:'scon-cem',
                name:'美颜',
                go:'/'
            },{
                id:'4',
                type:'scon-elem',
                name:'饿了么',
                go:'/elem'
            },
            {
                id:9,
                type:'scon-mess',
                name:'信息',
                go:'/message'
            },{
                id:10,
                type:'scon-com',
                name:'摄影',
                go:'/'
            }
        ]
    },
    phone_detail:{
        id: '',
        name: '',
        iconSrc: '',
        from: '',
        contentDate: '',
        phone: [],
        personal:false,
        recent:true
    }
}

const mutations = {

    [SET_LOCK](state){
        state.set_lock = false; //初始化为显示滑动，调用设置关闭
    },
    [SET_SHAKE](state , type){
        state.shake_active = type; //icon 按住是否震动 全局震动
    },
    [DEL_ICON](state, item, belong){
        let content = state.app_content_icon.menu,
            footer = state.app_footer_icon.menu,
            index = '';

        if(belong === 'content'){
            index = content.findIndex((n) => n.id == item.id);
            content.splice(index , 1)
        }else if(belong === 'footer'){
            index = footer.findIndex((n) => n.id == item.id);
            footer.splice(index , 1)
        }
    },
    [SET_PHONE_DETAIL](state ,
        { id,
            name,
            iconSrc,
            from,
            contentDate,
            phone,
            personal,
            recent
            })
    {
        state.phone_detail = Object.assign({},state.phone_detail,{
            id,
            name,
            iconSrc,
            from,
            contentDate,
            phone,
            personal,
            recent}
        );
    }
}

export default{
    state,
    mutations
}