<?php
error_reporting(0);
if(!defined('DB_SERVER')){
    include('../../../session.php');
    include('../../../config.php');
    }
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
 $sql = "SELECT * FROM request_portal WHERE Requester='$id' ORDER BY item_id DESC";
 $result = $db->query($sql);
 $response = array();
 
 while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
 }

 echo json_encode($response);
?>