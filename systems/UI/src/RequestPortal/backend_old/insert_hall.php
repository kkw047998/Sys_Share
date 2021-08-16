<?php
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$createdt = date("d/m/Y");
$time=date("H:i:s");
$Requester = $_POST['Requester'];
$start_time = $_POST['start_time'];
$end_time = $_POST['end_time'];
$date = $_POST['date'];
$event = $_POST['event'];

$descript = "HALL Support - EVENT:".$event." From ".$start_time." to ".$end_time." on ".$date;
$sql_fetch_user="SELECT * FROM userlist WHERE username = '$Requester'";
		$result = $db->query($sql_fetch_user);
		while($row = mysqli_fetch_array($result)){
			$Req_name = $row['name'];
			$Req_mail = $row['Mail'];	
		}

if(isset($_FILES['pdf'])){
	$path='../pdf_files/';
	$newloc = $path."IR03_".time().rand(0,500).".pdf";
	move_uploaded_file($_FILES['pdf']['tmp_name'],$newloc);
	$sql = "INSERT INTO request_portal (Requester, Req_name, Req_Mail,Request_for,Description,Due_date,Due_time,Location,pdf_path,Creation_dt)
	VALUES ('$Requester', UPPER('$Req_name'),'$Req_mail','HALL Support','$descript','$date','$start_time', 'HALL','$newloc','$createdt')";	
} else {
$sql = "INSERT INTO request_portal (Requester, Req_name, Req_Mail,Request_for,Description,Due_date,Due_time,Location,Creation_dt)
VALUES ('$Requester', UPPER('$Req_name'),'$Req_mail','HALL Support','$descript','$date','$start_time', 'HALL','$createdt')";	
}

mysqli_query($db,$sql);

$action = "Submitted Hall IT Support Request  : ".$event;
		
		$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$Requester','$createdt','$time')";
		$db->query($sql_log);



?>