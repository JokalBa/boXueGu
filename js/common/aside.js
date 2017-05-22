define(['jquery', 'jquery_cookie'], function($, ud) {
    //判断用户是否登陆的用户名和头像
    //如果用户信息中存在头像，那么进行img的src替换。否则不用管，因为在布局时就有默认头像。
    // 当用户信息中存在用户名，则替换，否则使用布局时的默认值。
    var userInfo = JSON.parse($.cookie('userInfo') || "{}");
    userInfo.tc_avatar && $('.aside .avatar img').attr('src', userInfo.tc_avatar);
    userInfo.tc_name && $('.aside h4').text(userInfo.tc_name);

    //课程管理的下拉列表
    $('.slide-down').on('click', function() {
        $(this).next().slideToggle();
    });


    //主页面实现导航焦点定位
    //获取网页当前路径 通过href的路径是否和location.pathname相同判断焦点定位
    //
    
    // var pathName=location.pathname;
    // console.log(pathName);
    // $('.aside a').removeClass('active')
    // 	.filter('[href="'+ pathName + '"]').addClass('active');
    // 	
    var pathnameObj = {
        '/': '/index.html',
		'/html/home/settings.html': '/index.html',
		'/html/home/repass.html': '/index.html',
		'/html/user/profile.html': '/html/user/list.html',
		'/html/teacher/add.html': '/html/teacher/list.html',
		'/html/teacher/edit.html': '/html/teacher/list.html',
        '/html/course/course_add_step1.html': '/html/course/list.html',
        '/html/course/course_add_step2.html': '/html/course/list.html',
        '/html/course/course_add_step3.html': '/html/course/list.html',
    }
    var pathName=location.pathname;
    var href=pathnameObj[pathName]?pathnameObj[pathName]:pathName
    $('.aside a').removeClass('active')
    	.filter('[href="'+ href + '"]').addClass('active')
        .parentsUntil('.navs').slideDown();
})