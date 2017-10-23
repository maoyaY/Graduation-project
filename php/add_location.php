<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['u_name'];
 $s_name=$_REQUEST['s_name'];
 $s_location=$_REQUEST['s_location'];
 $s_tel=$_REQUEST['s_tel'];
  $s_post=$_REQUEST['s_post'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="INSERT INTO yummy_deliveryaddress VALUES(null,'$u_name','$s_name','$s_location','$s_tel','$s_post',0)";

 $output=['code'=>0,'msg'=>null];
 if(mysqli_query($conn,$sql)){
     $output = ['code'=>'2000','msg'=>'成功'];
 }
 else{
    $output = ['code'=>'1001','msg'=>'失败'];
 }
echo json_encode($output);


 ?>