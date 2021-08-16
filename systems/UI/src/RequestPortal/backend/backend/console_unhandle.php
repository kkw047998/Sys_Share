<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$today_date = date("Y-m-d H:i");
$sql = "SELECT item_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status,Request_for FROM request_portal ORDER BY item_id DESC  LIMIT 15";
//$sql = "SELECT * FROM request_portal WHERE (Handler IS  NULL) AND (Status='Not Started')";
$result=$db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $checkdate = $row['Due_date'].' '.$row['Due_time'];
    if (($today_date > $checkdate)&&($row['Handler']=="")&&($row['Status']=="Not Started")){
        $response[] = $row;
    }
};
echo json_encode($response);
?>