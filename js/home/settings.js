define(['jquery', 'jquery_cookie', 'util', 'aside', 'header', 'nprogress', 'template', 'jquery_form', 'jquery_region', 'jquery_datepicker', 'jquery_datepicker_zh_CN', 'jquery_uploadify', 'ckeditor'], 
    function($, ud, util, ud, ud, nprogress, template, ud, ud, ud, ud, ud, CKEDITOR) {
    //是否登陆过
    util.loginSess();
    util.loading();
    //回显教师个人资料
    $.get('/v6/teacher/profile', function(data) {
        $('.teacher-profile').html(template('settings-temp', data.result));
        profileMessage();
        initRegion();
        datepicker();
        uploadify();
        ckeditor();
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
    //添加bootstrap-datepicker时间插件
    function datepicker(){
        $('.birthday').datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: new Date('1990-01-01'),
            endDate: new Date()
        });
        $('.join-date').datepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            startDate: new Date('2008-01-01'), //设置时间的范围最小值
            endDate: new Date()   //设置时间的范围最大值
        });
    }
    // 添加上传插件
    function uploadify(){
        $('#uploadify').uploadify({
            swf: '/lib/jquery-uploadify/uploadify.swf',
            uploader: '/v6/uploader/avatar',
            fileTypeExts: '*.gif; *.jpg; *.png',  //设置上传文件的格式
            fileObjName: 'tc_avatar',  //必须添加
            buttonText:'',  //设置照片样式的文本
            height:$('.preview').height(),
            onUploadSuccess: function(file,data){
                $('#avatar').attr('src',JSON.parse(data).result.path);
            }
        });
    }
    //添加ckeditor
    function ckeditor(){
        edit = CKEDITOR.replace("ckeditor", {
            toolbarGroups : [
                { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                { name: 'links' },
                { name: 'insert' },
                { name: 'forms' },
                { name: 'tools' },
                { name: 'document',    groups: [ 'mode', 'document', 'doctools' ] },
                { name: 'others' },
                { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                { name: 'styles' },
                { name: 'colors' },
                { name: 'about' }
            ]
        });
    }
    // 加载完成后，结束进度条的样式
    nprogress.done();
})