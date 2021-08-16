<?php
function compress_image($source_url, $destination_url, $quality) {

	$info = getimagesize($source_url);

		if ($info['mime'] == 'image/jpeg')
				$image = imagecreatefromjpeg($source_url);

		elseif ($info['mime'] == 'image/gif')
				$image = imagecreatefromgif($source_url);

	   elseif ($info['mime'] == 'image/png')
				$image = imagecreatefrompng($source_url);

		imagejpeg($image, $destination_url, $quality);
	return $destination_url;
}



date_default_timezone_set('Asia/Hong_Kong');
$tomorrow = date("Y-m-d", strtotime('tomorrow'));
$date_array = explode('-',$tomorrow);
$YY = $date_array[0];
$mm = $date_array[1];
$dd = $date_array[2];
$createdt = date("d/m/Y");
$time = date("H:i:s");
if(!defined('DB_SERVER')){
include('../../../config.php');
}
if(isset($_POST['Request_for']) && isset($_POST['Description'])&&isset($_POST['Due_date'])&&isset($_POST['Due_time'])){

		$Requester = $_POST['Requester']; //id
		$Req_name = $_POST['Req_name'];
		$Req_mail = $_POST['Req_Mail'];
		$for = $_POST['Request_for']; //input*
		$descript = $_POST['Description']; //input*
		
		if(isset($_FILES['img'])){
		$file = compress_image($_FILES['img']['tmp_name'],'output.jpg',60);
		$img = addslashes(file_get_contents($file));
		$img_hv = 'true';
		} else $img_hv = 'false';
		$dd = $_POST['Due_date']; //input*
		$dt = $_POST['Due_time']; //input*
		$location = $_POST['Location']; //input
		
		
		$sql_fetch_user="SELECT * FROM userlist WHERE username = '$Requester'";
		$result = $db->query($sql_fetch_user);
		while($row = mysqli_fetch_array($result)){
			$Req_name = $row['name'];
			$Req_mail = $row['Mail'];	
		}
		
		$sql = "INSERT INTO request_portal (Requester, Req_name, Req_Mail,Request_for,Description,Due_date,Due_time,Location,img,imgstat,Creation_dt)
VALUES ('$Requester', '$Req_name','$Req_mail','$for','$descript','$dd','$dt', '$location','$img','$img_hv','$createdt')";	
		mysqli_query($db,$sql);	
		
		$action = "Submitted General Request :".$descript;
		
		$sql_log = "INSERT INTO actionlog (system_l,action_l,userid,date,time) VALUES ('Request_System','$action','$Requester','$createdt','$time')";
		$db->query($sql_log);

	}



?>