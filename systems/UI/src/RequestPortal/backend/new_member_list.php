<?php
date_default_timezone_set('Asia/Hong_Kong');
include('../../../session.php');
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
$tdy = date("d/m/Y");
$now = date("H:i:s");
$id_insert=$_POST['id'];
$sql_remove = "UPDATE userlist SET Department='unset',portal_level='0' WHERE id='$id_insert'";
$db->query($sql_remove);

$sql = "select  u.id,u.username,u.name,
(select count(*) from request_portal where Handler LIKE CONCAT('%',u.name,'%') ) as counter
from userlist u
where Department='ir'";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
};
$sql_get_user = "SELECT username FROM userlist WHERE id='$id_insert'";
$result_get_user = $db->query($sql_get_user);
while($row_get_user = mysqli_fetch_array($result_get_user)){
    $user_fetch = $row_get_user['username'];
}

$action = "Set User : ".$user_fetch." to normal user in Portal System";

$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$id','$tdy','$now')";
$db->query($sql_log);
echo json_encode($response);
?>