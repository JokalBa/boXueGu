define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template'], 
	function($, ud, util, ud, ud, nprogress, template) {
	//是否登陆过
    util.loginSess();
    util.loading();

    //获取课程列表并回显
    var cs_id = util.getSearch('cs_id');
    $.get('/v6/course/picture', {
        cs_id: cs_id
    }, function(data) {
        $('.steps').html(template('step2-template', data.result));
    });
    // 加载完成后，结束进度条的样式
    nprogress.done();
})