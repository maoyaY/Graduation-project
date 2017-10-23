<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['uname'];
 $u_pwd=$_REQUEST['upwd'];

 $conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
 $sql="SET NAMES UTF8";
 mysqli_query($conn,$sql);
 $sql="SELECT * FROM yummy_userRegister WHERE u_name='$u_name' AND u_pwd='$u_pwd'";
 $result=mysqli_query($conn,$sql);

 $output=['code'=>0,'msg'=>null];
 if(($p=mysqli_fetch_assoc($result))!==null){
	 $output=[
        	'code'=>1001,
     	'msg'=>$u_name,
     	'pwd'=>$u_pwd
     	];
 }
 else{
    $output=[
        'code'=>1000,
        'msg'=>'error'];
 }
 echo json_encode($output);

