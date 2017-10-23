
var headerTop = $('#headerTop');







var name = "",pwd = "";
function init() {
    headerTop.load('../../php/admin/header.php',function () {


        //自动登录
        if(window.localStorage.getItem("loginName")&&window.localStorage.getItem("loginName")){
            loginSuccess(window.localStorage.getItem("loginName"));
        }
        $('.dropdown-toggle').dropdown();



        //点击退出
        // header.on('click','#enter',function (e) {
        //     e.preventDefault();
        //     if(confirm('确认要退出吗')){
        //         $(this).addClass('hide').prev().removeClass('hide');
        //         $('#header #login-btn').removeClass("hide").next().addClass('hide');
        //         $('form#form-regist input').val('');
        //         sessionStorage.removeItem('loginName');
        //     }
        // });



    });

}

init();








