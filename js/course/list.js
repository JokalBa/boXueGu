define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template'], 
	function($, ud, util, ud, ud, nprogress, template) {
	//是否登陆过
    util.loginSess();
    util.loading();
    //获取课程列表并回显
    $.get('/v6/course',function(data){
    	$('.courses').html(template('course-list-temp',data))
    })
    // 加载完成后，结束进度条的样式
    nprogress.done();
})