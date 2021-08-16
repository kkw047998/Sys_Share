<?php
include('../../../session.php');
if(!defined('DB_SERVER')){
include('../../../config.php');
}

$sql = "SELECT * FROM request_portal WHERE Status='Completed' AND Requester='$id'";
$result = $db->query($sql);
$response = mysqli_num_rows($result);
echo  '{"total":'.json_encode($response,JSON_FORCE_OBJECT).'}';
?>
