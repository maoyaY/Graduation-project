<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['u_name'];
 $v_name=$_REQUEST['v_name'];
 $v_birth=$_REQUEST['v_birth'];
 $v_location=$_REQUEST['v_location'];
 $v_sex=$_REQUEST['v_sex'];
 $v_tel=$_REQUEST['v_tel'];
 $v_email=$_REQUEST['v_email'];
 $v_qq=$_REQUEST['v_qq'];
 $v_clocation=$_REQUEST['v_clocation'];
 $v_cname=$_REQUEST['v_cname'];
 $v_ctel=$_REQUEST['v_ctel'];
 $v_post=$_REQUEST['v_post'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_userregister WHERE $u_name='$u_name'";
$result=mysqli_query($conn,$sql);
$output = ["code"=>0,"msg"=>null];

    $sql="INSERT INTO yummy_vipinfo VALUES( null,'$u_name','$v_name','v_birth','$v_location','$v_sex','$v_tel','$v_email','v_qq','$v_cname','$v_clocation','$v_ctel','$v_post')";
    if(mysqli_query($conn,$sql)){
       $output = ["code"=>"2000","msg"=>"成功"];
       echo json_encode($output);
    }
    else{
       $output = ["code"=>"2001","msg"=>"系统繁忙！请稍后再试"];
       echo json_encode($output);
    }





 ?>