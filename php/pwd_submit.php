<?php

 header('Content-Type:application/json;charset=UTF-8');
 $u_name = $_REQUEST['u_name'];


 $output=['msg'=>null];
 if( !$_REQUEST['old_pwd']){
     $output = ['msg'=> "请输入原始密码"];
     echo json_encode($output);
     return;
 }
else if( !$_REQUEST['new_pwd']){
    $output = ['msg'=> "请输入新密码"];
    echo json_encode($output);
    return;
}else if(!$_REQUEST['new_pwdq']){
    $output = ['msg'=> "请输入确认密码"];
    echo json_encode($output);
    return;
}else{
    $u_pwd = $_REQUEST['old_pwd'];
    $u_npwd = $_REQUEST['new_pwd'];
    $new_pwdq = $_REQUEST['new_pwdq'];
}
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT u_pwd FROM yummy_userregister WHERE u_name = '$u_name'";
$result = mysqli_query($conn,$sql);
$old_pwd = "";

if(!empty($result)){
   $p = mysqli_fetch_assoc($result);
  $old_pwd = $p['u_pwd'];
  if($old_pwd == $u_pwd && $new_pwdq == $u_npwd){
    $sql="UPDATE  yummy_userRegister SET  u_pwd='$u_npwd' WHERE u_name = '$u_name'";
    if(mysqli_query($conn,$sql) ){
        $output = ['msg'=> "成功"];
        echo json_encode($output);
    }
    else {
        $output = ['msg'=> "服务器正忙！请稍后再试"];
        echo json_encode($output);
    }
  }
  else if($new_pwdq != $u_npwd){
        $output = ['msg'=> "两次密码输入不正确"];
        echo json_encode($output);
    }
  else{
      $output = ['msg'=> "输入密码不正确"];
      echo json_encode($output);
  }
}else{
  $output = ['msg'=> "该用户名不存在"];
        echo json_encode($output);
}


 ?>