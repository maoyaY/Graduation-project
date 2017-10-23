<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['uname'];
 $u_pwd=$_REQUEST['upwd'];
 $u_birth=$_REQUEST['birthday'];
 $u_location=$_REQUEST['location'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_userregister WHERE u_name='$u_name'";
$result=mysqli_query($conn,$sql);
 $output=['code'=>0,'msg'=>null,'pwd'=>null];

  if(($p=mysqli_fetch_assoc($result))!==null){
         $output=[
             'code'=>2001,
             'msg'=>'error',
             'pwd'=>'error'
             ];
  }
  else{
  $sql="INSERT INTO yummy_deliveryaddress VALUES(null,'$u_name',null,'$u_location',null,null,1)";
      	 mysqli_query($conn,$sql);
      $sql="INSERT INTO yummy_userregister VALUES(null,'$u_name','$u_pwd','$u_birth','$u_location',null,null,null,null,null)";
    	 mysqli_query($conn,$sql);
    	 $output=[
    	    'code'=>2000,
    		'msg'=>$u_name,
            'pwd'=>$u_pwd
    		];
  }
echo json_encode($output);


 ?>