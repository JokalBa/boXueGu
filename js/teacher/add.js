define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'jquery_form'], function($, ud, util, ud, ud, nprogress, ud) {
    //是否登陆过
    util.loginSess();
    util.loading();

    
    //添加教师或者管理员
    $('form').ajaxForm(function() {
        location.href = "/html/teacher/list.html";
    });
    // 加载完成后，结束进度条的样式
    nprogress.done();
})