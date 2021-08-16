<?php
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}

$id_update = $_POST['id'];
$status = $_POST['status'];
$remarks = $_POST['remarks'];

$sql = "
UPDATE check_list
SET status='$status',remarks='$remarks'
WHERE id = '$id_update'
";
$db->query($sql);
?>