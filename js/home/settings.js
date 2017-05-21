define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template', 'jquery_form', 'jquery_region'], function($, ud, util, ud, ud, nprogress, template, ud, ud) {
    //是否登陆过
    util.loginSess();
    util.loading();
    //回显教师个人资料
    $.get('/v6/teacher/profile', function(data) {
        $('.teacher-profile').html(template('settings-temp', data.result));
        profileMessage();
        initRegion();
    });

    function profileMessage() {
        //更新个人资料  //注意用ajaxForm事件的时候tc_hometown拼接不来
        // $('form').ajaxForm({
        //     data: {
        //         tc_hometown: $('#p').find(':selected').text() + "|" + $('#c').find(':selected').text() + "|" + $('#d').find(':selected').text(),
        //         tc_province: $('#p').val(),
        //         tc_city: $('#c').val(),
        //         tc_district: $('#d').val(),
        //     },
        //     success:function(data){
        //         location.reload();
        //     }
        // });
        $('form').on('submit', function(e) {
            e.preventDefault(); //阻止表单提交
            $(this).ajaxSubmit({
                data: {
                    tc_hometown: $('#p').find(':selected').text() + "|" + $('#c').find(':selected').text() + "|" + $('#d').find(':selected').text(),
                    tc_province: $('#p').val(),
                    tc_city: $('#c').val(),
                    tc_district: $('#d').val(),
                },
                success: function(data) {
                    location.reload();
                }
            });
            return false;
        });
    };
    //添加地址插件
    function initRegion() {
        $('.region-container').region({
            url: '/lib/jquery-region/region.json', // json文件的地址
        });
    };
    // 加载完成后，结束进度条的样式
    nprogress.done();
})