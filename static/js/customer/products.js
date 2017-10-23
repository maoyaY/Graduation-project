
//动态生成
$(function () {
    var sort=0;
    getjson(sort);
    $('#nav dl dd a').click(function(e){
        e.preventDefault();
        var sort=$(this).attr('data-sort');
        $($(this)).addClass('active').parent().siblings().children('a').removeClass('active');
        getjson(sort);
    });
    function getjson(sort) {//封装函数动态生成页面
        $.getJSON('../../php/products.php',{'sort':sort},function(pager){
            var html='';

            $.each(pager,function(i,p){
                html+=`
           <div class="good-box" data-id="${p.p_id}">
                <div class="good-box-top" >
                    <a href="#" data-id="${p.p_id}"><img src="../../${p.p_img}" data-id="${p.p_id}" class="img"></a>
                    <div class="mask hide">
                        <div class="sugar-title">
                            甜度指数：
                        </div>
                        <div class="suger-index">★</div>
                        <div class="sugar-icon">
                            <a href="#" data-id="${p.p_id}" class="addCar" id="P_addCar"><img src="../../images/icon.png" id="icon-img" data-id="${p.pid}" ></a>
                        </div>
                    </div>
                </div>
                <div class="good-introduce">
                    <p><a href="deteil.html" data-id="${p.p_id}">【${p.p_title}】</a></p>
                    <p><a href="deteil.html" data-id="${p.p_id}">${p.p_name}</a></p>
                    <p><a href="deteil.html" data-id="${p.p_id}">¥${p.p_rice}RMB</a></p>
                </div>
            </div>
           `
            });
            $('#sort').html(html);
        });
    }
});
//鼠标经过图片时的效果
   $('#sort ').on("mouseenter",'.good-box-top img',function () {
        $($($(this).parent().parent().children('.mask'))[0]).addClass('show').removeClass('hide1').removeClass('hide');
    });
    $('#sort ').on("mouseleave",'.good-box-top',function () {
        $($($(this).children('.mask'))[0]).addClass('hide1').removeClass('show');
    });
$('body').on('click','#J_order',function (e) {//点击定制
    e.preventDefault();
    console.log(1);
    var _data = window.sessionStorage.getItem('loginName') || window.localStorage.getItem('loginName');
    $.ajax({
        type:'POST',
        url:'../../php/isVip.php',
        data:{"u_name":_data},
        success:function (res) {
            if(res.code == '1001'){
                window.location.href = '../../customer/vip/vip-home3.html';
            }
            else{
                window.location.href = '../../customer/vip/vip-home2.html';
            }
        },
        error:function (res) {
            alert("系统繁忙，请稍后再试");
        }
    })
});


//
$('#sort').on('click','.good-box-top>a,.good-introduce>p>a',function (e) {
    e.preventDefault();
    window.location.href="deteil.html?pid="+$(this).data('id');
//    加入购物车



});



