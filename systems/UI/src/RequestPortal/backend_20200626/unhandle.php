<?php
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$today_date = date("Y-m-d H:i");
$sql_all = "SELECT item_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status,Request_for FROM request_portal";
$result = mysqli_query($db,$sql_all);

while($row = mysqli_fetch_assoc($result))
{
    $checkdate = $row['Due_date'].' '.$row['Due_time'];
    if (($today_date > $checkdate)&&($row['Handler']=="")&&($row['Status']=="Not Started")){
        $response[] = $row;
    }
}
echo json_encode($response);
?>