<?php
date_default_timezone_set('Asia/Hong_Kong');
include('../../../session.php');
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$db->query("SET NAMES utf8");
$db->query("SET NAMES utf8");
$tdy = date("d/m/Y");
$now = date("H:i:s");
$id_insert = $_POST['id'];
$form = $_POST['form'];
$class = $_POST['class'];
$lockerid = $_POST['lockerid'];
$Description = $_POST['Description'];
$created_by = $_POST['created_by'];
$action = $_POST['action'];
$status = $_POST['status'];


$sql = "
UPDATE LOCKER 
SET
form='$form',class='$class',lockerid='$lockerid',description='$Description',action='$action',status='$status'
WHERE id='$id_insert'
";
$db->query($sql);

$action_log = "Updated Locker Record ID:".$id_insert;
$sql_log="
INSERT INTO actionlog(system_l,action_l,userid,date,time) 
VALUES ('Request_System','$action_log','$id','$tdy','$now')
";
$db->query($sql_log);

echo "success";
?>