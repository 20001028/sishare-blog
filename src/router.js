export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/articles',
            component:() => import('./components/common/index.vue'),
            children:[
                {
                    path:'articles',
                    component:() => import('./components/main/article-list.vue')
                },
                {
                    path:'articles/:id',
                    component:()=>import('./components/main/article.vue'),
                    props:true
                },
                {
                    path:'guide',
                    component:()=>import('./components/guide/index.vue')
                }
            ]
        },
        {
            path:'/write',
            name:'write',
            component:()=>import('./components/write/new.vue')
        }
    ]
})