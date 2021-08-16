<?php
include('../../../session.php');
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
$sql = "SELECT * FROM request_portal WHERE Requester = '$id'";
$result = $db->query($sql);
$response = mysqli_num_rows($result);
echo  '{"total":'.json_encode($response,JSON_FORCE_OBJECT).'}';
?>
