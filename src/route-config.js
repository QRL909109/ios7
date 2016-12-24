const phone_detail = {
    path: 'detail',
    meta: {},
    component: resolve => {
        require(['./views/phone/detail.vue'], resolve)
    }
}
const routes = [
    {
        path: '/main',
        name: 'main',
        meta: {
            title: '主页面',
            content: '这是主页面内容'
        },
        component: resolve => {
            require(['./views/main.vue'], resolve)
        }

    },
    {
        path: '/set',
        name: 'set',
        meta: {
            title: '设置',
            content: '这是设置'
        },
        component: resolve => {
            require(['./views/set.vue'], resolve)
        }
    },
    {
        path: '/phone',
        name: 'phone',
        meta: {
            title: '电话',
            content: '联系电话'
        },
        component: resolve => {
            require(['./views/phone.vue'], resolve)
        },
        children: [
            {
                path: '',
                name: 'personal',
                meta: {
                    title: '个人收藏'
                },
                component: resolve => {
                    require(['./views/phone/personal.vue'], resolve)
                },
                children:[
                    phone_detail
                ]
            }, {
                path: 'commit',
                name: 'commit',
                meta: {
                    title: '通讯录'
                },
                component: resolve => {
                    require(['./views/phone/commit.vue'], resolve)
                },
                children:[
                    phone_detail
                ]
            }, {
                path: 'number',
                name: 'number',
                meta: {
                    title: '拨号键盘'
                },
                component: resolve => {
                    require(['./views/phone/number.vue'], resolve)
                }
            }, {
                path: 'recent',
                name: 'recent',
                meta: {
                    title: '最近通话'
                },
                component: resolve => {
                    require(['./views/phone/recent.vue'], resolve)
                },
                children:[
                    phone_detail
                ]
            }]

    },
    {
        path: '/message',
        name: 'message',
        meta: {
            title: '信息',
            content: '这是信息'
        },
        component: resolve => {
            require(['./views/message.vue'], resolve)
        }

    },
    {
        path: '*',
        redirect: {
            name: 'main'
        }

    }

];
export default routes