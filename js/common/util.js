define(['jquery', 'jquery_cookie', ''], function($, ud) {
    var util = {
        /**
         *  记录是否有登陆过（通过PHPSESSID判断）
         *  如有登录过则直接回到相应的页面
         *  如没有登录直接调回到登录页面
         */
        loginSess: function() {
            if (!$.cookie("PHPSESSID")) {
                location.href = '/html/home/login.html';
            }
        },
        /**
         * 
         */
        loading: function() {
            $(document).ajaxStart(function() {
                $('.overlay').show();
            }).ajaxStop(function() {
                $('.overlay').hide();
            })
        },
        getSearch: function(searchKey) {
            /**
             * [getSearch description]
             * 1.获取地址栏中的id值
             * 2.裁切slice获取到的id去掉？再切掉&，获取到一个数组
             * 3.遍历数组，获取到字符串，再切掉'=' 然后得到的数组的第一个为key，第二个为value，存到对象中
             * 4.判断有没有传参，若没有则使用对象中的数
             */
            var searchObj = {},
                temp;
            var searchArr = location.search.slice(1).split("&");
            for (var i = 0; i < searchArr.length; i++) {
                temp = searchArr[i].split("=");
                searchObj[temp[0]] = temp[1];
                return searchKey === null ? searchObj : searchObj[searchKey];
            };
        },
    };
    return util;
})