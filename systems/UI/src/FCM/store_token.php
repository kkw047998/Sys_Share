<?php
include('../../session.php');
if(!isset($db)){
    include('../../config.php');
}
$token = $_POST['token'];
$sql_check = "SELECT * FROM usertokenfcmweb WHERE username = '$id'";
$result_check = $db->query($sql_check);
if(mysqli_num_rows($result_check)>0){
    $sql = "UPDATE usertokenfcmweb SET token = '$token' WHERE username = '$id'";
    $db->query($sql);
} else {
    $sql = "INSERT INTO usertokenfcmweb(username,name,mail,token) VALUES ('$id','$name','$mail','$token')";
    $db->query($sql);
}
?>