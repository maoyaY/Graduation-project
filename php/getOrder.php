<?php
header('Content-type:application/json;charset=UTF-8');

$u_name=$_REQUEST['u_name'];

$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
$sql="SELECT * FROM yummy_order WHERE u_name='$u_name'";
$result=mysqli_query($conn,$sql);
$output=[];
$a=[];
while($row=mysqli_fetch_assoc($result)){
    $a[]=$row;
}
$sql="SELECT p_title FROM yummy_products WHERE p_id IN(SELECT p_id FROM yummy_order WHERE u_name = '$u_name')";
$result=mysqli_query($conn,$sql);
$b=[];
while($row=mysqli_fetch_assoc($result)){
    $b[]=$row;
}
for($i=0,$len=count($a);$i<$len;$i++){
  $output[$i]=$a[$i]+$b[$i];
}

echo json_encode($output);
?>