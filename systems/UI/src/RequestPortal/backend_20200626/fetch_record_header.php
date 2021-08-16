<?php
include("../../../session.php");
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$db->query("SET NAMES utf8");
$db->query("SET NAMES utf8");
$rid = $_POST['record_id'];
$type = $_POST['rep_type'];
$sql = "SELECT item_id,Requester,Req_Name,Req_Mail,Description,Due_date,Due_time,Location,Handler,imgstat,Status FROM request_portal WHERE item_id = '$rid'";
$result = $db->query($sql);
$i=0;
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_array($result)){
        $location = $db->real_escape_string($row['Location']);
    }
    if($type=='handler'){
        $sql_grp = "SELECT item_id,Requester,Req_Name,Req_Mail,Description,Due_date,Due_time,Location,Handler,imgstat,Status FROM request_portal WHERE Location = '$location' AND NOT(Status='Completed') AND NOT(Status='Cancelled') AND NOT(Status='Rejected') ORDER BY FIELD(item_id,'$rid') DESC";
    } else {
        $sql_grp = "SELECT item_id,Requester,Req_Name,Req_Mail,Description,Due_date,Due_time,Location,Handler,imgstat,Status FROM request_portal WHERE item_id = '$rid'";
    }
    $result_grp = $db->query($sql_grp);
    if(mysqli_num_rows($result_grp)>0){
        while($row_grp = mysqli_fetch_assoc($result_grp)){
            $response[] = $row_grp;
        }
        echo json_encode($response);
    } else {
        echo 'empty';
    }
} else {
    echo "empty";
}
?>