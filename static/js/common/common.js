//初始化
var header = $('#header');


//初始化页面头部底部
var isToggle=false;
//登录
function login() {
    $('.false').css('display','none');
    $('#main-tab li:first-child').addClass('current').siblings().removeClass('current');
    $($('#main-tab li:last-child a').attr('href')).css('display','none');
    $($('#main-tab li:first-child a').attr('href')).css('display','block');
    $('#login-username').val(window.localStorage.getItem('loginName'));
}
//注册
function regist() {
    $('#main-tab li:last-child').addClass('current').siblings().removeClass('current');
    $($('#main-tab li:first-child a').attr('href')).css('display','none');
    $($('#main-tab li:last-child a').attr('href')).css('display','block');
    isToggle=true;
}


//登录成功
function loginSuccess(uname) {
    $('#login-box').css("display","none");
    $('#login-btn1').html(uname).removeClass('hide').prev().addClass('hide');
    $('#login-btn1').next().addClass('hide').next('#enter').removeClass('hide');


    // 点击跳转到个人中心   待处理
    header.on('click','#login-btn1',function (e) {
        e.preventDefault();
        window.location.href = $(this).attr('href'); 
    });
}
//自动登录
function rememberPw(uname,upwd) {
    localStorage.setItem("loginName",uname);//缓存到本地
    localStorage.setItem("loginPwd",upwd);
    $('#login-username').val(uname);
    $('#login-password').val(upwd);
}
//表单验证

function validityForm(elemid,elemText){
    var elem=document.getElementById(elemid);
    var elemTip=document.getElementById(elemid+"Tip");
    var msg=document.getElementById(elemid+"Tip").innerHTML;
    elem.onfocus=function(){
        elemTip.className="col-md-5 show control-default";
        elemTip.innerHTML=msg;
        $('.false').css('display','none');
    }
    elem.onblur=function(){
        if(elem.validity.valid){
            elemTip.className="col-md-5 hide control-success";
        }
        if(elem.required){
            if(elem.validity.valueMissing){
                elemTip.className="col-md-5 show control-error";
                elemTip.innerHTML=elemText+"输入不能为空";
            }
        }
        if(elem.pattern){
            if(elem.validity.patternMismatch) {
                elemTip.className = "col-md-5 show control-error";
                elemTip.innerHTML = msg;
            }
        }
    }
}


var name = "",pwd = "";
function init() {

    header.load('../../php/header.php',function () {
        validityForm("login-username","登录名");
        validityForm("login-password","密码");
        validityForm("login-usernameA","登录名");
        validityForm("login-passwordA","密码");
        validityForm("username","用户名");
        validityForm("password","密码");
        validityForm("birth","生日");
        validityForm("home","地址");
        //自动登录
        if(window.localStorage.getItem("loginName")&&window.localStorage.getItem("loginName")){
            loginSuccess(window.localStorage.getItem("loginName"));
        }else if(sessionStorage.getItem("loginName")){
            loginSuccess(sessionStorage.getItem("loginName"));
        }
        //点击登录
        header.on("click",'#login-btn',function(e){
            e.preventDefault();
            $('#login-box').css('display','block');
            login();
        });
        //点击注册按钮
        header.on("click",'#regist-btn',function(e){
            e.preventDefault();
            $('#login-box').css('display','block');
            regist();
        });
        //点击关闭按钮
        $('#close').on("click",function(e){
            e.preventDefault();
            $('#login-box').css("display","none");
            // $('#login-box').css("display","none");
        });
        $('#closeA').on("click",function(e){
            e.preventDefault();
            $('#login-box1').css("display","none");
        });
        //登录和注册切换
        $('#main-tab li').on("click",function (e) {
            e.preventDefault();
            var target=e.target;
            if(target.nodeName=="A"){
                target=target.parentNode;
            }
            if($(target).hasClass('current')==false){
                if(isToggle){
                    login();
                    isToggle=false;
                }else{
                    regist();
                    isToggle=true;
                }
            }
        });
        //点击注册
        $('#regist a.btn-block').on("click",function(e){
            e.preventDefault();
            for(var i=0,control=[];i<document.querySelectorAll('#regist .form-control').length;i++){
                if(document.querySelectorAll('#regist .form-control')[i].validity.valid){
                    control.push(1);
                }
            }
            if(control.length==document.querySelectorAll('#regist .form-control').length){
                var data=$('#form-regist').serialize();
                $.ajax({
                    type:"POST",
                    url:"../../php/regist.php",
                    data:data,
                    success:function(obj){
                        if(obj.code==2000){
                            $('.modal').siblings().fadeOut();
                            $('.modal').css('display','block');
                            $('#login-box').on('click','#yes',function (e) {
                                e.preventDefault();
                                loginSuccess(obj.msg);
                                sessionStorage.setItem("loginName",obj.msg);//缓存到本地
                            });
                            $('#login-box').on('click','#wait',function (e) {
                                e.preventDefault();
                                $('#login-box').css("display","none");
                                $('.modal').siblings().fadeIn();
                                $('.modal').css('display','none');
                                name = obj.msg;
                                pwd = obj.pwd;
                                rememberPw(name,pwd);
                            });
                        }
                        else{
                            regist();
                            $('#usernameTip').html('用户名已经存在').css('display','block');
                        }
                    }
                });
            }
        });
        //点击登录
        $('#login a.btn-block').on("click",function(e){
            e.preventDefault();
            var contol =[];
            for(var i=0;i<document.querySelectorAll('#login .form-control').length;i++){
                if(document.querySelectorAll('#login .form-control')[i].validity.valid){
                    contol.push(1);
                }
            }
            if(contol.length==2){

                var data=$('#form-login').serialize();
                $.ajax({
                    type:"POST",
                    url:"../../php/login.php",
                    data:data,
                    success:function(obj){
                        if(obj.code==1000){
                            $('.false').css('display','block');
                            $('#login-box label.col-md-5')[0].className="col-md-5 hide control-default";
                            $('#login-box label.col-md-5')[1].className="col-md-5 hide control-default";

                        }
                        else if(obj.code==1001){
                            sessionStorage.setItem("loginName",obj.msg);//缓存到本地
                            loginSuccess(obj.msg);
                            name=obj.msg;
                            pwd = obj.pwd;
                            if($('#auto').prop('checked')){
                                rememberPw(name,pwd);
                            }
                            else{
                                $('#login-password').val("");
                            }
                        }
                    }
                });
            }
        });
        //点击退出
        header.on('click','#enter',function (e) {
            e.preventDefault();
            if(confirm('确认要退出吗')){
                $(this).addClass('hide').prev().removeClass('hide');
                $('#header #login-btn').removeClass("hide").next().addClass('hide');
                $('form#form-regist input').val('');
                sessionStorage.removeItem('loginName');
            }
        });
        //    点击管理员
        header.on('click','#J_Admin',function (e) {
            e.preventDefault();

            $('#login-box1').css('display','block');
            header.on('click','#login-btnA',function (e) {
                var data=$('#form-loginA').serialize();
                $.ajax({
                    type:"POST",
                    url:"../../php/login.php",
                    data:data,
                    success:function(obj){
                        window.location.href = $('#J_Admin').attr('href');
                    }
                });
                
            })
        });
        header.on('click','#login-btnA',function (e) {
            e.preventDefault();

            // $.ajax({
            //     type:"POST",
            //     url:"../../php/login.php",
            //     data:data,
            //     success:function(obj){
            //         if(obj.code==1000){
            //             $('.false').css('display','block');
            //             $('#login-box label.col-md-5')[0].className="col-md-5 hide control-default";
            //             $('#login-box label.col-md-5')[1].className="col-md-5 hide control-default";
            //             window.location.href = $('#J_Admin').attr('href');
            //         }
            //         else if(obj.code==1001){
            //             loginSuccess(obj.msg);
            //             name=obj.msg;
            //             pwd = obj.pwd;
            //             if($('#auto').prop('checked')){
            //                 rememberPw(name,pwd);
            //             }
            //             else{
            //                 $('#login-password').val("");
            //             }
            //         }
            //     }
            // });
        })
        // 点击我的订单



        var uname =  window.sessionStorage.getItem('loginName') || window.localStorage.getItem('loginName');


            $('body').on('click','#my_order',function(e){
                e.preventDefault();
                if(uname){
                    window.location.href = $(this).attr('href');
                }else{
                    $('#login-box').css('display','block');
                }

            })

        if(uname){
            $.ajax({
                type:'get',
                url:'../../php/getNumber.php',
                data:{'u_name':uname},
                success:function (res) {
                    // console.log(res.length);
                    $('#number').text(res.length);
                }
            });
        }

        //    点击购物车
        header.on('click','#none',function (e) {
            e.preventDefault();
            if(!window.sessionStorage.getItem('loginName') && !window.localStorage.getItem('loginName')){
                $('#login-box').css('display','block');
            }else{
                window.location.href = $(this).attr('href');
            }
        });

    });

   


    //回到顶部
    $('#footer').load('../../php/footer.php',function () {
        $("#footer").on('click','#back-to-top',function () {
            $('html body').animate({
                scrollTop:0
            },400);
        });
        $(window).on('scroll',function () {
            if($(window).scrollTop()>$(window).height()){
                $('#back-to-top').fadeIn();
            }
            else{
                $('#back-to-top').fadeOut();
            }
        });
        $(window).trigger('scroll');
    }); 

}

init();




// $("#header").on("mouseover",'.city1>a',function(){
//     $("div.city").removeClass('hide');
// });
// $("#header").on("mouseout",'.city1>a',function(){
//     $("div.city").addClass('hide');
// });
////数字加减

    $('body').on('click','.add',function (e) {
        e.preventDefault();

        var i = $(this).prev('input').val();
        i++;
        $(this).prev('input').val(i);
        var price = $(this).parent().parent().prev().children('.pri').text();
        $(this).parent().parent().next().next().children('.price').text(parseFloat(i*price).toFixed(0));
        if(!$(this).parent().parent().next().next().children('.price').hasClass('tol')){
            $(this).parent().parent().next().next().children('.price').addClass('tol');
        }
        Total();
    });
    $('body').on('click','.cut',function (e) {
        e.preventDefault();
        var i = $(this).next('input').val();
        if(i>1&&$(this).next('input').hasClass('num1')){
            i--;
        }
        else if(i>0&&!$(this).next('input').hasClass('num1')){
            i--;
        }
        else{
            return ;
        }
        $(this).next('input').val(i);
        var price = $(this).parent().parent().prev().children('.pri').text();
        $(this).parent().parent().next().next().children('.price').text(parseFloat(i*price).toFixed(0));
        if(!$(this).parent().parent().next().next().children('.price').hasClass('tol')){
            $(this).parent().parent().next().next().children('.price').addClass('tol');
        }
        Total();
    });
//合计

//初始化合计
    function initTotal() {
        var lan = $('.tol1');
        var total1 =0;
        for(var i = 0;i<lan.length;i++){
            total1 = parseFloat(total1) +parseFloat(lan[i].innerHTML);
        }
        $('#total1').html(total1.toFixed(0));
    }
    initTotal();
//变化合计
    function Total() {
        var len = $('.tol1');
        var total =0;
        for(var i = 0;i<len.length;i++){
            total =total+parseFloat(len[i].innerHTML);
        }

        $('#total1').html(total.toFixed(0));
    }



//    加入购物车

// 蛋糕分类页加入购物车
// $('#sort').on('click','#P_addCar',function (e) {
//     e.preventDefault();
//     //传输的数据
//     var data = "";
//     addCar(data);
// });
//        点击加入购物车
$('body').on('click','.addCar',function (e) {
    e.preventDefault();
    //传输的数据
    var _uname = window.sessionStorage.getItem('loginName') || window.localStorage.getItem('loginName');
    $('#u_name').val(_uname);

    var _data = $('#car_form').serialize();
    if(!window.sessionStorage.getItem('loginName') && !window.localStorage.getItem('loginName')){
        $('#login-box').css('display','block');
    }else{
        //加入购物车
        var offset = $("#none").offset();
        var u_name =window.sessionStorage.getItem('loginName') || window.localStorage.getItem('loginName');
        var i =parseInt( $("#none>#number").text());
        var addCar = $(this);
        var offsety = addCar.offset();
        var img = addCar.parent().parent().prev().children('img').attr('src');
        var flyer = $('<img class="u-flyer" src="'+img+'">');
        flyer.fly({
            start:{
                left:offsety.left,
                top:offsety.top-$(document).scrollTop()
            },
            end:{
                left: offset.left+10, //结束位置（必填）
                top: offset.top+10, //结束位置（必填）
                width: 0, //结束时宽度
                height: 0 //结束时高度
            },
            onEnd:function () {
                $("#msg").show().animate({width: '250px'}, 200).fadeOut(1000); //提示信息

                $("#none>#number").text(i+1);
                this.destory(); //移除dom
            }
        });

        $.ajax({
            type:"post",
            url:"../../php/add_car.php",
            data:$('#car_form').serialize(),
            success:function (response) {
                // console.log(response);
            },
            error:function (response) {

            }
        })
    }

});



//个人中心
$('.personal-lf li').click(function (e) {
    // e.preventDefault();
    $(this).children('a').addClass('active1');
    $(this).siblings('li').children('a').removeClass('active1');
    if($('.personal-lf li:nth-child(5)')){
        var _data=sessionStorage.getItem('loginName');
        $.ajax({
            type:'get',
            url:'../../php/isVip.php?u_name='+_data,
            success:function (res) {
                if(res.code == 1000){
                    // window.location.href ='../vip/vip-home2.html';
                }
                else{
                    // window.location.href ='../personalCenter/centerVip.html';
                }
            }
        })
    }
    else{
        window.location.href = $(this).children('a').attr('href');
    }
});


//低版本浏览器
if(self.location==top.location && !$.support.leadingWhitespace) {
    $("body").prepend('<div class="lowBrowser" style="width:100%;background-color: #6B3908;color: #ffffff;padding: 10px 0;overflow: hidden"><div style="margin: auto;width: 1024px;"><p class="lf" style="line-height: 24px;">Hi!您当前的浏览器版本过低，可能影响您的浏览效果，存在安全风险，建议升级浏览器： </p><a href="#" class="lf btn" style="width: 100px; padding: 4px 0 ;">谷歌Chrome</a><a href="#" class="lf btn" style="width: 100px;padding: 4px 0 ;">火狐Firefox</a> </div> </div>')
}