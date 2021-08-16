<?php
include('../../session.php');
if(!defined('DB_SERVER')){
    include('../../config.php');
}
$system = $_POST['sys_type'];
$sql_fetch_recent = "SELECT * FROM recent_access WHERE username = '$id' AND system_type = '$system'";
$result_fetch_recent = $db->query($sql_fetch_recent);
if(mysqli_num_rows($result_fetch_recent)>0){
    $row_fetch_recent = mysqli_fetch_array($result_fetch_recent);
    $data = $row_fetch_recent['access_string'];
    echo $data;
} else {
    echo 'empty';
}
?>