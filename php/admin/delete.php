<?php
header('Content-type:application/json;charset=UTF-8');
$p_id= $_REQUEST['n_id'];
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="DELETE FROM yummy_products WHERE p_id = '$p_id' ";

$output=[];
mysqli_query($conn,$sql);


echo json_encode($output);
?>

