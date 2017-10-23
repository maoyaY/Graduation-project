<?php
header('Content-type:application/json;charset=UTF-8');

$u_name=$_REQUEST['u_name'];
$conn=mysqli_connect('127.0.0.1','root','','yummy',3306);
$sql="SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql="SELECT * FROM yummy_userregister WHERE u_name='$u_name'";
$result=mysqli_query($conn,$sql);
$output=[];
while($row=mysqli_fetch_assoc($result)){
    $output[]=$row;
}
echo json_encode($output);
?>

