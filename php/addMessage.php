<?php
header('Content-type:application/json;charset=UTF-8');
 $m_name=$_REQUEST['u_name'];
  $m_message=$_REQUEST['m_message'];
   $m_cdate=date("y-m-d",time());
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="INSERT INTO  yummy_message VALUES(null,'$m_name','$m_message',null,1,'$m_cdate',null) ";
$output=[];
if(mysqli_query($conn,$sql)){
        $output = ['code'=>'2000','msg'=>'成功'];
    }
    else
        $output = ['code'=>'1001','msg'=>'失败'];
echo json_encode($output);
?>

