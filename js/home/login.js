define(['jquery', 'bootstrap', 'jquery_cookie', 'jquery_form','util', 'nprogress'], 
	function($, ud, ud, ud, util, nprogress) {
    /**
     * 首先判断是否有登陆过，有就直接跳转到主页
     * 若没有登录，向服务器发送ajaxForm请求
     * 请求成功，跳转到主页面
     */
    if($.cookie('PHPSESSID')) {
        location.href = '/';
    };
    /**
     * @Author    Jokal
     * @DateTime  2017-05-19
     * @copyright [copyright]
     * @license   [license]
     * @version   [version]
     * @param     {ajaxForm表单事件}监听表单submit事件，并阻止默认的提交
     * @return    注意ajaxSubmit事件的区别 
     * ajaxForm是只请求发送一次，而ajaxSubmit则是输入一次请求一次
     */
    $('form').ajaxForm({
        url: '/v6/login',
        type: 'post',
        success: function(data) {
            location.href = "/";
        }
    });
    
    //调用遮盖层
    util.loading();

    // 加载完成后，结束进度条的样式
    nprogress.done();
})