<?php

 header('Content-Type:application/json;charset=UTF-8');
 
 $u_name=$_REQUEST['u_name'];
 $p_id = $_REQUEST['p_id'];
if(!$_REQUEST['p_number']){
    $p_num = 1;
}else{
   $p_num = $_REQUEST['p_number'];
}
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql = "SELECT p_number,p_id FROM yummy_carinfo WHERE p_id = '$p_id' AND u_name='$u_name'";
$result = mysqli_query($conn,$sql);

$output=['code'=>0,'msg'=>null];

if(($p=mysqli_fetch_assoc($result))!==null){
       foreach($p as $key=>$value){
          if($key == 'p_number'){
            $p_number = $value;
          }
       }
   $p_number =  $p_number+ $p_num;
  $sql = "UPDATE yummy_carinfo SET p_number = '$p_number' WHERE p_id = '$p_id'";
  mysqli_query($conn,$sql);
}
else{
    $p_number = 1;
    $sql="INSERT INTO yummy_carinfo VALUES(null,'$u_name','$p_id','$p_number')";
    if(mysqli_query($conn,$sql)){
        $output = ['code'=>'2000','msg'=>'成功'];
    }
    else
        $output = ['code'=>'1001','msg'=>'失败'];
}
echo json_encode($output);


 ?>