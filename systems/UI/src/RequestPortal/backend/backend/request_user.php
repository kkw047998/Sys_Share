<?php
error_reporting(0);
if(!defined('DB_SERVER')){
    include('../../../session.php');
    include('../../../config.php');
    }


 $sql = "SELECT item_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status,Request_for FROM request_portal WHERE Requester='$id' ORDER BY item_id DESC";
 $result = $db->query($sql);
 $response = array();
 
 while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
 }

 echo json_encode($response);
?>