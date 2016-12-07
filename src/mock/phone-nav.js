/**
 * Created by Administrator on 2016/11/24.
 */
const phone_nav = [
    {
        index: 0,
        path: {
            path: '/phone'
        },
        hint: { type: null, count: '' }, //count,dot
        iconClass: 'icon-start',
        text: '个人收藏'
    }, {
        index: 1,
        path: {
            path: '/phone/recent'
        },
        hint: { type: 'count', count: 2 },
        iconClass: 'icon-time',
        text: '最近通话'
    },{
        index: 2,
        path: {
            path: '/phone/commit'
        },
        hint: { type: null , count: '' },
        iconClass: 'icon-peopleb',
        text: '通讯录'
    }, {
        index: 3,
        path: {
            path: '/phone/number'
        },
        hint: { type: null, count: '' },
        iconClass: 'icon-jiunine17',
        text: '拨号键盘'
    }
]
export {phone_nav};
//export default phone_nav;