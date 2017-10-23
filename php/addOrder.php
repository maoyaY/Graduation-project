<?php

 header('Content-Type:application/json;charset=UTF-8');
 $u_name = $_REQUEST['u_name'];
 $p_id = $_REQUEST['p_id'];
 $p_number = $_REQUEST['d_number'];
 $d_price = $_REQUEST['d_price'];
  $d_tel = $_REQUEST['d_tel'];
 $d_location = $_REQUEST['d_location'];


$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="INSERT INTO yummy_order VALUES(null,'$u_name','$p_id','$p_number','英文生日快乐','$d_tel','$d_location','$d_price','未支付','2017-05-24')";
if(mysqli_query($conn,$sql))
  echo "成功";
else
  echo "失败";

 ?>