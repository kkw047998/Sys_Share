<?php
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$db->query("SET NAMES utf8");
$db->query("SET NAMES utf8");
$modid = $_POST['id'];
$sql = "SELECT item_id,Requester,Req_Name,Description,Category,Location,Remarks,pdf_path,Due_date,Due_time,Handler,Status,Request_for,imgstat,Creation_dt FROM request_portal WHERE item_id='$modid'";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
	$response[] = $row;
}

echo json_encode($response);
?>
