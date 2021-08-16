<?php
//header("refresh: 2700;");
include('../../../session.php');
if(!defined('DB_SERVER')){
include('../../../config.php');

}
date_default_timezone_set('Asia/Hong_Kong');
$db->query("SET NAMES utf8");
$db->query("SET NAMES utf8");
$tdy = date("d/m/Y");
$now = date("H:i:s");
if(isset($_POST['Request_for'])){//id
//id
//$cat = $_POST['Category'];  //e.g. service, main, spc.
//$Remarks = $_POST['Remarks'];
//$Handler = $_POST['Handler'];
$rf = $_POST['Request_for'];
$St = $_POST['Status'];
$Reqer = $_POST['Requester'];
$Hd = $db->real_escape_string($_POST['Handler']);
$Dp = $db->real_escape_string($_POST['Description']);
$Loc = $db->real_escape_string($_POST['Location']);
$Dd = $_POST['Due_date'];
$Dt = $_POST['Due_time'];
$R = $_POST['remarks'];
$Cat = $_POST['Category'];
$Creation_dt = date('Y/m/d H:i:s');
$creation_date = date('d/m/Y');


$query_checkname = "SELECT DISTINCT name,username,Mail FROM userlist where name LIKE '%$Reqer%' or username = '$Reqer'";
$resultc = mysqli_query($db,$query_checkname);
$hd_array =explode(",",$Hd);
$count = 0;
$Handler_name="";
$checkh=true;
while (isset($hd_array[$count])){
	$query_checkhandler = "SELECT DISTINCT name,username,Mail FROM userlist where name LIKE '%$hd_array[$count]%' or username = '$hd_array[$count]'";
	$result_tmp = mysqli_query($db,$query_checkhandler);
		if((mysqli_num_rows($result_tmp) >0)) {
			$row_handler = mysqli_fetch_array($result_tmp);
			$row_handle_name = $row_handler['name'];
				if(isset($hd_array[$count+1])){
				$Handler_name = $Handler_name.$row_handle_name.',';
				} else $Handler_name = $Handler_name.$row_handle_name;
	$count = $count+1;

		} else if((mysqli_num_rows($result_tmp) ==0)){  
		$checkh=false;
		$count = $count+1;
		}
		
}


if((mysqli_num_rows($resultc) > 0)&&($checkh!=false)){
$rowcname = mysqli_fetch_array($resultc);
$recid = $rowcname['username'];
$recName = $rowcname['name'];
$recMail = $rowcname['Mail'];

$sql_insert = "
INSERT request_portal(Requester,Req_Name,Req_Mail,Request_for,Description,Category,Due_date,Due_time,Location,Remarks,Status,Handler,Creation_dt)
VALUES ('$recid','$recName','$recMail','$rf','$Dp','$Cat','$Dd','$Dt','$Loc','$R','$St','$Handler_name','$creation_date') 
;
";	
mysqli_query($db,$sql_insert);
echo "success";

$action = "Created request via Full Control Form :".$Dp;
$sql_log = "
INSERT INTO actionlog(system_l,action_l,userid,date,time) 
VALUES ('Request_System','$action','$id','$tdy','$now')
";
$db->query($sql_log);
} else echo  "Invalid Name Detected !";
//$URL="#sc_new_req";

}

//echo '<META HTTP-EQUIV="refresh" content="0;URL=' . $URL . '">';
?>
