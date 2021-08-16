<?php
date_default_timezone_set('Asia/Hong_Kong');
include("../../../session.php");
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$tdy = date("d/m/Y");
$now = date("H:i:s");
$id_insert=$_POST['id'];
$user_fetch = "";
$title = $_POST['title'];

if($title=='IR Member'){
    $plv = 1;
} else if($title=='ITSD & Resources'){
    $plv = 2;
} else if($title=='Academic'){
    $plv = 3;
} else if($title=='Admin'){
    $plv = 100;
}


$sql_add = "UPDATE userlist SET Department='ir',portal_level='$plv' WHERE id='$id_insert'";
$db->query($sql_add);

$sql_get_user = "SELECT username FROM userlist WHERE id='$id_insert'";
$result_get_user = $db->query($sql_get_user);
while($row_get_user = mysqli_fetch_array($result_get_user)){
    $user_fetch = $row_get_user['username'];
}

$action = "Added User : ".$user_fetch." into IR with Access Level .".$plv;

$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$id','$tdy','$now')";
$db->query($sql_log);

$sql = "select  u.id,u.username,u.name,
(select count(*) from request_portal where Handler LIKE CONCAT('%',u.name,'%') ) as counter
from userlist u
where Department='ir'";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
};
echo json_encode($response);
?>