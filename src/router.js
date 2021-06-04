export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/blogs',
            component:() => import('./components/common/index.vue'),
            children:[
                {
                    path:'blogs',
                    component:() => import('./components/main/blog-list.vue')
                },
                {
                    path:'blogs/:id',
                    component:()=>import('./components/main/blog.vue'),
                    props:true
                },
                {
                    path:'guide',
                    component:()=>import('./components/guide/index.vue')
                }
            ]
        },
        {
            path:'/edit',
            name:'edit',
            component:()=>import('./components/edit/edit.vue')
        }
    ]
})