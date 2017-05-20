define(['jquery', 'bootstrap','util', 'nprogress'], function($, ud, util, nprogress) {
    /**
     * @Author    Hybrid
     * @DateTime  2017-05-19
     * @copyright [copyright]
     * @license   [license]
     * @version   [version]
     * @param      
     * 点击退出按钮 发送ajax请求退出登录
     */
    $('#logout').on('click', function() {
        $.post('/v6/logout', function() {
            location.href = '/html/home/login.html'
        })
    });

    //遮盖层加载
    util.loading();

    // 加载完成后，结束进度条的样式
    nprogress.done();
})