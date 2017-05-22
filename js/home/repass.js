define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'jquery_form'], function($, ud, util, ud, ud, nprogress, ud) {
    //是否登陆过
    util.loginSess();
    util.loading();
    $('.repass form').on('submit', function(e) {
        e.preventDefault();
        if ($('.pwd').val() === $('.pwdIsTrue').val()) {
            $(this).ajaxSubmit(function() {
                $('#logout').trigger('click')
            })
        } else {
            alert('两次输入的密码不一致')
        };
        return false;
    });
    // 加载完成后，结束进度条的样式
    nprogress.done();
})