<?php

 header('Content-Type:application/json;charset=UTF-8');

 $a_name=$_REQUEST['a_name'];
 $a_pwd=$_REQUEST['a_pwd'];
 $a_code=$_REQUEST['a_code'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_admin WHERE a_name='$a_name'";
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
      $sql="INSERT INTO yummy_admin VALUES(null,'$a_name','$a_pwd','$a_code',null)";
    	 mysqli_query($conn,$sql);
    	 $output=[
    	    'code'=>2000,
    		'msg'=>$a_name,
            'pwd'=>$a_pwd
    		];
  }
echo json_encode($output);


 ?>