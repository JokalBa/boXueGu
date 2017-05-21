require.config({
    baseUrl: '/',

    paths: {

        // 每个页面对应的模块
        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',
        tcAdd: 'js/teacher/add',
        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',
        usProfile: 'js/user/profile',
        usList: 'js/user/list',
        csAdd: 'js/course/add',
        csList: 'js/course/list',
        cgAdd: 'js/course/category_add',
        cgList: 'js/course/category_list',
        csAdd1: 'js/course/course_add_step1',
        csAdd2: 'js/course/course_add_step2',
        csAdd3: 'js/course/course_add_step3',


        // 公共的模块
        aside: 'js/common/aside',
        header: 'js/common/header',
        util: 'js/common/util',


        // 第三方模块
        jquery: 'lib/jquery/jquery.min',
        jquery_cookie: 'lib/jquery-cookie/jquery.cookie',
        jquery_form: 'lib/jquery-form/jquery.form',
        jquery_region: 'lib/jquery-region/jquery.region',


        // jquery插件
        bootstrap: 'lib/jquery-bootstrap/js/bootstrap.min',


        //不依赖jQuery的
        nprogress: 'lib/nprogress/nprogress',
        template:'lib/artTemplate/template',
    },


    // 配置普通模块的依赖或者输出
    shim: {

        // bootstrap是普通模块，但是依赖与jquery，所以这里配置
        bootstrap: {
            deps: ['jquery']
        },

        //普通AMD模块，向外暴露接口需要exports
    }
});

//等所有的模块都加在好了之后 添加进度条
require(['nprogress'],function(nprogress){
    nprogress.start();
})

//定义一个对象，储存主要加载的模块
var obj = {
    '/': 'index',
    '/index.html': 'index',
    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',
    '/html/teacher/add.html': 'tcAdd',
    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',
    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'csList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/category_list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course/course_add_step2.html': 'csAdd2',
    '/html/course/course_add_step3.html': 'csAdd3'
};
// 加载这个模块
require([obj[location.pathname]]);