<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['u_name'];

 $conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
 $sql="SET NAMES UTF8";
 mysqli_query($conn,$sql);
 $sql="SELECT v_id FROM yummy_vipinfo WHERE u_name='$u_name'";
 $result=mysqli_query($conn,$sql);

 $output=['code'=>0,'msg'=>null];
 if(($p=mysqli_fetch_assoc($result))!==null){
	 $output=[
        'code'=>1001,
     	'msg'=>'是会员',
     	];
 }
 else{
    $output=[
        'code'=>1000,
        'msg'=>'error'];
 }
 echo json_encode($output);

