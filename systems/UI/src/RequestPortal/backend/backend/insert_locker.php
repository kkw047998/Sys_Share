<?php
date_default_timezone_set('Asia/Hong_Kong');
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}


$createdt = date("d/m/Y");
$time=date("H:i:s");
$Requester = $_POST['Requester']; //id
$Form = $_POST['Form'];
$Classroom = $_POST['Classroom'];
$LockerID = $_POST['LockerID']; //input*
$Problem = $_POST['Problem']; //input*


$sql_userinfo = "SELECT * FROM userlist WHERE username = '$Requester'";
$result_userinfo = $db->query($sql_userinfo);
while($row = mysqli_fetch_array($result_userinfo)){
	$user_name = $row['name'];
};

$sql="
INSERT INTO locker 
(form,class,lockerid,description,created_by,create_name)
VALUES
('$Form','$Classroom','$LockerID','$Problem','$Requester','$user_name')
";
$db->query($sql);

$action = "Submitted Locker Issue : ".$Problem;
		
		$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$Requester','$createdt','$time')";
		$db->query($sql_log);


?>