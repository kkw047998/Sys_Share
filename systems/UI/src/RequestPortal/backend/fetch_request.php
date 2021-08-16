<?php
include('../../../session.php');
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
$record_id = $_POST['record_id'];
$tmp_id = explode('#',$record_id);
$record_id = $tmp_id[1];
$sql = "SELECT * FROM request_portal WHERE item_id = '$record_id'";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
}
echo json_encode($response);
?>