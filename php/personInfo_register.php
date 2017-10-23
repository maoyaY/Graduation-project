<?php

 header('Content-Type:application/json;charset=UTF-8');
 $u_name = $_REQUEST['u_name'];
 $u_pwd = $_REQUEST['u_pwd'];
 $u_birth = $_REQUEST['u_birth'];
 $u_location = $_REQUEST['location'];
 $u_trueName = $_REQUEST['u_trueName'];
 $u_sex = $_REQUEST['u_sex'];
 $u_tel = $_REQUEST['u_tel'];
 $u_location = $_REQUEST['u_location'];
 $u_email = $_REQUEST['u_email'];
 $u_qq = $_REQUEST['u_qq'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="UPDATE  yummy_userRegister SET  $u_birth'='$u_birth',$u_location='$u_location',$u_trueName='$u_trueName',$u_sex='$u_sex',$u_tel'$u_tel',$u_email'$u_email',$u_qq='$u_qq' WHERE $u_name = '$u_name'";
if(mysqli_query($conn,$sql))
  echo "成功";
else
  echo "失败";

 ?>