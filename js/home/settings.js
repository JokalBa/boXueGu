define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress'], 
	function($, ud, util, ud, ud, nprogress) {
	//是否登陆过
    util.loginSess();
    util.loading();

    // 加载完成后，结束进度条的样式
    nprogress.done();
})