<?php
header('Content-type:application/json;charset=UTF-8');

$p_sort=$_REQUEST['sort'];
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);
if($p_sort==0){
$sql="SELECT * FROM yummy_products";
}
else{
$sql="SELECT * FROM yummy_products WHERE p_sort='$p_sort'";
}
$result=mysqli_query($conn,$sql);
$output=[];
while($row=mysqli_fetch_assoc($result)){
    $output[]=$row;
}
echo json_encode($output);
?>