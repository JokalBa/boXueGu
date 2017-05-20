define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template', 'jquery_form'], 
	function($, ud, util, ud, ud, nprogress, template, ud) {
    //是否登陆过
    util.loginSess();
    util.loading();
    /**
     * [tc_id 获取需要修改的教师id]
     * 显示需要修改教师的信息内容
     */
    var tc_id = util.getSearch('tc_id');
    $.get('/v6/teacher/edit', {
        tc_id: tc_id
    }, function(data) {
        data.result.action = '/v6/teacher/update';
        $('.teacher-add').html(template('edit-template', data.result));
        toList();
    });
    //提交修改教师信息，成功之后跳转到教师列表
    function toList() {
        $('form').ajaxForm({
            data: {
                tc_id: tc_id,
                tc_type: $('.tc-type').prop('selected')?1:0,
                tc_gender:$('.tc-gender').prop('checked')?0:1
            },
            success: function() {
                location.href = "/html/teacher/list.html";
            },
        });
    };
    // 加载完成后，结束进度条的样式
    nprogress.done();
})