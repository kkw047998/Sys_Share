<?php
//header("refresh: 2700;");
include("../../../session.php");
if(!defined('DB_SERVER')){
include('../../../config.php');

}
date_default_timezone_set('Asia/Hong_Kong');
$tdy = date("d/m/Y");
$now = date("H:i:s");
if(isset($_POST['modid'])){//id
//id
//$cat = $_POST['Category'];  //e.g. service, main, spc.
//$Remarks = $_POST['Remarks'];
//$Handler = $_POST['Handler'];
$modid = $_POST['modid'];
$rf = $_POST['Request_for'];
$St = $_POST['Status'];
$Reqer = $_POST['Requester'];
$Hd = $_POST['Handler'];
$Dp = $_POST['Description'];
$Loc = $_POST['Location'];
$Dd = $_POST['Due_date'];
$Dt = $_POST['Due_time'];
$R = $_POST['remarks'];
$Cat = $_POST['Category'];
$Complete_d = date('Y/m/d');
$Complete_t = date('H:i:s');


$query_checkname = "SELECT DISTINCT name,username,Mail FROM userlist where name LIKE '%$Reqer%' or username LIKE '%$Reqer%'";
$resultc = mysqli_query($db,$query_checkname);
$hd_array =explode(",",$Hd);
$count = 0;
$Handler_name="";
$checkh=true;
while (isset($hd_array[$count])){
	$query_checkhandler = "SELECT DISTINCT name,username,Mail FROM userlist where name LIKE '%$hd_array[$count]%' or username LIKE '%$hd_array[$count]%'";
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
$recName = $rowcname['name'];
$recMail = $rowcname['Mail'];

$sql_update = "
UPDATE request_portal 
SET Req_Name='$recName',Request_for='$rf',Description='$Dp',Category = '$Cat',Due_date='$Dd',Due_time='$Dt',Location='$Loc',Remarks='$R',Status='$St',Handler='$Handler_name'
WHERE item_id='$modid';
";	
mysqli_query($db,$sql_update);
echo "success";

$action = "Update Request Record id:".$modid." to Status : ".$St;
$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$id','$tdy','$now')";
$db->query($sql_log);

if ($St=='Completed'){
	require("../../../../PHPMailer-master/src/PHPMailer.php");
	require("../../../../PHPMailer-master/src/SMTP.php");
	$sql_get_info = "
	SELECT username,name,Mail From userlist WHERE username='$Reqer'
	";
	$result_get_info = $db->query($sql_get_info);
	while($row_get_info = mysqli_fetch_array($result_get_info)){
		$recName = $row_get_info['name'];
		$recMail = $row_get_info['Mail'];
	}
	   $currentdt = date("d/m/Y");
	   $mail = new PHPMailer\PHPMailer\PHPMailer();
	   $mail->IsSMTP(); // enable SMTP
  
	  //$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
	  $mail->SMTPAuth = true; // authentication enabled
	  //$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
	  $mail->Host = "smtp.munsang.edu.hk";
	  $mail->Port = 25; // or 587
	  $mail->IsHTML(true);
	  $mail->Username = "smtp@munsang.edu.hk";
	  $mail->Password = "smtp0116";
	  $mail->SetFrom("request_system@munsang.edu.hk","Request System");
	  $mail->Subject = "Request Completed (ID : ".$modid.") ";
	  //$mail->Subject = "Hi";
	  if($R!=''){
		  $body_r = "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>&nbsp;Remarks&nbsp;</td><td>&nbsp;".$R."&nbsp;</td></tr>";
	  } else $body_r = '';
		$mail->Body = "
		Dear&nbsp;".$recName."<br><br>
		<table style='border-collapse: collapse;border: 1px solid black;'>
		  <tr style='border: 1px solid black;'>
			  <td style='border: 1px solid black;'>&nbsp;Request ID&nbsp;</td>
			  <td style='border: 1px solid black;'>&nbsp;".$modid."&nbsp;</td>
		  </tr>
		  <tr style='border: 1px solid black;'>
			  <td style='border: 1px solid black;'>&nbsp;Description&nbsp;</td>
			  <td style='border: 1px solid black;'>&nbsp;".$Dp."&nbsp;</td>
		  </tr>
		  <tr style='border: 1px solid black;'>
			  <td style='border: 1px solid black;'>&nbsp;Completed By&nbsp;</td>
			  <td style='border: 1px solid black;'>&nbsp;".$Handler_name."&nbsp;</td>
		  </tr>
		  <tr style='border: 1px solid black;'>
			  <td style='border: 1px solid black;'>&nbsp;Date of Completion&nbsp;</td>
			  <td style='border: 1px solid black;'>&nbsp;".$currentdt."&nbsp;</td>
		  </tr>
			  ".$body_r."
		</table>
	  	<br><br>
		Yours sincerely,<br><br>IT Support Division<br><br>
		PS: <b>Please do not reply to this email as this is an auto email function featured by Request System</b>";
	  //$mail->Body ="HI";
	  $mail->AddAddress($recMail);
	  $mail->Send();
}

} else echo  "Invalid Name Detected !";
//$URL="#sc_new_req";

}

//echo '<META HTTP-EQUIV="refresh" content="0;URL=' . $URL . '">';
?>
