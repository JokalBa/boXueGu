define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template'], function($, ud, util, ud, ud, nprogress, template) {
    //是否登陆过
    util.loginSess();
    util.loading();
    //显示教师列表
    /**
     * @Author    jokal
     * @DateTime  2017-05-19
     * @version   template.helper(name, callback);第一个参数表示名，第二个计算的函数
     * @param     {[type]}   valueY) { if(!valueY){return '';}; var birthdayY [description]
     * @return    {[差值]}   [年龄大小]
     */
    template.helper('age', function(valueY) {
        //如果没有传参数
        if (!valueY) {
            return '';
        };
        //获取出生的年份
        var birthdayY = valueY.slice(0, 4);
        // 获取现在的年份
        var currentY = new Date().getFullYear();
        // 差值就是年龄大小
        return currentY - birthdayY;
    });
    // 发送ajax请求，请求数据显示到页面
    $.get('/v6/teacher', function(data) {
        var temp = template('list-template', data);
        $('#list').html(temp);
        exminMessages();
        isUse();
    });

    function exminMessages() {
        //查看教师信息
        /**
         * @Author    Hybrid
         * 点击查看按钮，自定义添加data-tc-id,
         * 根据获取到的id 判断是查看哪个讲师的信息
         */
        $('a[data-toggle="modal"]').on('click', function() {
            var tc_id = $(this).attr('data-tc-id');
            $.get('/v6/teacher/view', {
                tc_id: tc_id
            }, function(data) {
                $('#teacherModal').html(template('messages-temp', data.result))
            });
        });
    };

    function isUse() {
        /**
         * 获取注销教师id及其状态status
         * 成功后替换页面中的信息
         */
        $('.btn-isUse').on('click', function() {
            var tc_id = $(this).attr('data-tc-id');
            var tc_status = $(this).attr('data-tc-status');
            var that = $(this);
            $.post('/v6/teacher/handle', {
                tc_id: tc_id,
                tc_status: tc_status
            }, function(data) {
                that.attr('data-tc-status', data.result.tc_status).
                	text(data.result.tc_status == 0 ? "注销" : '启用')
            })
        })
    }
    // 加载完成后，结束进度条的样式
    nprogress.done();
})