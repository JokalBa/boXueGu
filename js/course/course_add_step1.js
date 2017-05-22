define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template', 'jquery_form'], function($, ud, util, ud, ud, nprogress, template, ud) {
    //是否登陆过
    util.loginSess();
    util.loading();
    //获取课程列表并回显
    var cs_id = util.getSearch('cs_id');
    $.get('/v6/course/basic', {
        cs_id: cs_id
    }, function(data) {
        $('.steps').html(template('step1-template', data.result));
        saveSubmit();
    });
    //保存并修改课程信息
    function saveSubmit() {
        $('#btn-form').ajaxForm(function() {
            location.href = '/html/course/course_add_step2.html?cs_id=' + cs_id;
        });
    };
    //分类下拉菜单二级联动
    /**
     * 通过事件代理，监听父类select的onchange事件，
     * 获取子分类的数据
     * 遍历子分类的项
     * 置换页面中的子类option标签
     */
    $(document).on('change', '#top-cg-select', function() {
        var cg_id = $(this).val();
        $.get('/v6/category/child', {
            cg_id: cg_id
        }, function(data) {
            var options = '';
            for (var i = 0; i < data.result.length; i++) {
                options += '<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>'
            };
            $('#child-cg-select').html(options);
        })
    });
    // 加载完成后，结束进度条的样式
    nprogress.done();
})