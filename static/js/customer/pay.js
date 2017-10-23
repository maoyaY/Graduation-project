$(function () {
//        删除
    var _uname = window.sessionStorage.getItem('loginName') || window.localStorage.getItem('loginName');
    var birthTip = ` <p>请选择生日牌类型</p>
                  <p><input type="radio" name="s_birthTip" value="中文生日快乐" checked>中文生日快乐</p>
                  <p><input type="radio" name="s_birthTip" value="英文生日快乐">英文生日快乐</p>
                  <p><input type="radio" name="s_birthTip" value="" class="inself">自定义
                  <input type="text" placeholder="最多10个字" class="text hide" maxlength="10"></p>
                  <p class="sub"><a href="#" type="button" class="confirm1">确定</a><a href="#" type="button" class="cancel">取消</a></p>`;

    //加载购物车订单
    $.ajax({
        type:'post',
        url:'../../php/car_bus.php',
        data:{'u_name':_uname},
        success:function (res) {
            var _html = "",p,a=[],_total =0;

            for(var i=0;i<res.length;i++){
                p = res[i];
                if(a.indexOf(p.p_id) == "-1"){
                    a.push(p.p_id);
                    _html +=` <tr>
                        <td><input type="hidden" name="p_id" value="${p.p_id}" id="p_id"><a href="#"><img src="../../${p.p_img}" style="width: 100px;height: 100px;"></a></td>
                        <td><a href="#">${p.p_title}</a></td>
                        <td>2.0磅 / 10份 标配餐具</td>
                        <td>￥<span class="pri">${p.p_rice}</span>.00 元</td>
                        <td><div class="rt-sum"><a href="#" class="cut">-</a><input type="text" value="${p.p_number}" name="p_number" class="num1" disabled><a href="#" class="add">+</a></div></td>
                        <td><p class="birthTip">无</p><br>
                            <input type="hidden" name="d_birthtip">
                            <a href="#" class="active birth">选择生日牌</a></td>
                        <td>￥<span class="price tol1 tol">${p.p_rice*p.p_number} </span>.00 元</td>
                        <td><a href="#" class="m_del">删除</a></td>
                    </tr>`
                    _total = parseFloat(_total);
                    _total += parseFloat(parseFloat(p.p_rice*p.p_number).toFixed(0));
                }
                else{
                    continue;
                }
                $('#total1').text(_total);
            }
            $('#order_table tbody').html(_html);
            var birth = $('.birth');
            showModal(birth,birthTip);
        }
    });


    // //加载默认配送地址
    // $.ajax({
    //     type:'post',
    //     url:'../../php/getLoc.php',
    //     data:{'u_name':_uname},
    //     success:function (res) {
    //         $('#s_location').text(res[0].s_location);
    //     }
    // });



    $('table tbody tr td:last-child a').click(function (e) {
        e.preventDefault();
        if(confirm("您确定要讲这样商品删除吗")){
            $(this).parent().parent().remove();
            //            当购物车中没有商品时
            if($('table tbody tr').length<3){
                window.location.href="../../../customer/account/pay_null.html";
            }
        }
    });

    function isNeed(inputName,tdName) {
        tdName.hide();
        inputName.change(function () {
            tdName.toggle();
        });
    }

    var candle = $('#candle'),
        isCandle = $("#isCandle"),
        addCook = $('#addCook'),
        isAddCook = $('#isAddCook');

    isNeed(candle,isCandle);//是否需要蜡烛
    isNeed(addCook,isAddCook);//是否需要餐具
    //是否需要留言
    $('#umsg').addClass('hide');
    $('#usermsg').change(function () {
        $('#umsg').toggleClass('hide');
    });
});


function showModal(clickBtn,html) {
    $(clickBtn).click(function (e) {
        e.preventDefault();
        $('#window-city').css('display','block');
        $('#window-city #city-box .bg').html(
            html);
    });
}



$('.bg').on('blur','.text',function () {
    // $('.inself').val($('.text').val());
});
$('.bg').on('click','.cancel',function (e) {
    e.preventDefault();
    $('#window-city').css('display','none');
});
$('.bg').on('click','.confirm1',function (e) {
    e.preventDefault();
    $('#window-city').css('display','none');
    $('.birthTip').text($('input[name="sr"]:checked').val());
});


var locationTip = `<p>请输入正确的收货地址(现仅限杭州市内）</p>
                <p class="sub">
                    <select name="" id="city" class="pl10">
                        <option value="" selected>杭州市</option>
                    </select>
                    <select name="" id="qu" class="pl10 ml20">
                        <option value="" selected>江干区</option>
                        <option value="">西湖区</option>
                        <option value="">上城区</option>
                        <option value="">下城区</option>
                        <option value="">拱墅区</option>
                    </select>
                <p class="sub"><label for="location">详细地址:</label>
                <input type="text" placeholder="街道、楼牌号等" class="text" maxlength="10" id="location" required="required"><span class="input-must hide">此项必填</span></p>
                <p class="sub"><a href="#" type="button" class="confirm" id="loc_confirm">确定</a><a href="#" type="button" class="cancel">取消</a></p>`
var payLocation = $('.pay-location');
showModal(payLocation,locationTip);


$('.bg').on('click','.confirm',function (e) {
    e.preventDefault();
        $('#window-city').css('display','none');
        $('#s_location').text($('select#city>option:selected').text()+$('select#qu>option:selected').text()+$('#location').val());

    $('input[name="s_location"]').val($('#s_location').text());
});
$('body').on('change','input',function () {
    $('.idcard').prop('checked')? $('#idshow').removeClass('hide'): $('#idshow').addClass('hide');
    // $('.inself').prop('checked')? $('.text').removeClass('hide'): $('.text').addClass('hide');
});



//选择日期
laydate({
    elem: '#J-xl',
    min: laydate.now(+1)
});





// 提交订单
$('body').on('click','#submit',function(e){
    e.preventDefault();
    var uname = window.localStorage.getItem('loginName') || window.sessionStorage.getItem('loginName');
    $.ajax({
        type:'post',
        url:'../../php/addOrder.php',
        data:{'u_name':uname,'p_id':$('#p_id').val(),'d_price':$('#total1').text(),'d_location':$('#s_location').text(),'d_tel':$('input[name=a_tel]').val(),'d_number':$('input[name=p_number]').val()},
        success:function (res) {

                alert('下单成功');
                window.location.href='../../personalCenter/centerOrder.html';


        }
    })
});
$('body').on('click','.m_del',function (e) {
    e.preventDefault();
    $.ajax({
        type:'post',
        url:'../../php/delete.php',
        data:{'p_id':$(this).data('id')},
        success:function (res) {
            alert('删除成功');
            window.location.reload();
        }
    })
})

//返回购物车
$('#back').click(function (e) {
    e.preventDefault();
    window.location.href = "payCart.html";
    // e.preventDefault();
    // var postData = $('form').serialize();
    // $.ajax({
    //     type:"POST",
    //     url:"",
    //     data:postData,
    //     success:function (response) {
    //         window.location.href = response.sucUrl;
    //     },
    //     error:function (response) {
    //         window.location.href = response.errUrl;
    //     }
    // });
});