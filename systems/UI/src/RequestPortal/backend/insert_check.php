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
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$createdt = date("d/m/Y");
$time=date("H:i:s");
$Requester = $_POST['Requester'];
$subdept = $_POST['Sub_dept'];
$item_it = $_POST['Item_category_it'];
$item_r = $_POST['Item_category_r'];
$others = $_POST['others'];
$problem = $_POST['problem'];

if(isset($_FILES['img'])){
    $file = compress_image($_FILES['img']['tmp_name'],'output.jpg',60);
    $img = addslashes(file_get_contents($file));
    $img_hv = 'true';
    } else $img_hv = 'false';

$location = $_POST['location'];

$sql_get_user="SELECT * FROM userlist WHERE username='$Requester'";
$result = $db->query($sql_get_user);
while($row=mysqli_fetch_array($result)){
    $name = $row['name'];
    $mail = $row['Mail'];
}


if($subdept=='ITSD'){
    if($item_it=='Others'){
        $item_it=$others;
    };
        $sql="
        INSERT INTO check_list
        (requester,req_name,req_mail,sub_dept,item,description,img,img_hv,location,create_date)
        VALUES
        ('$Requester','$name','$mail','$subdept','$item_it','$problem','$img','$img_hv','$location','$createdt')
        "; 
        $item = $item_it;      
} else 
if($subdept=='Resources'){
    if($item_r=='Others'){
        $item_r=$others;
    };
        $sql="
        INSERT INTO check_list
        (requester,req_name,req_mail,sub_dept,item,description,img,img_hv,location,create_date)
        VALUES
        ('$Requester','$name','$mail','$subdept','$item_r','$problem','$img','$img_hv','$location','$createdt')
        ";
        $item = $item_r;
};
$db->query($sql);

require("../../../../PHPMailer-master/src/PHPMailer.php");
    require("../../../../PHPMailer-master/src/SMTP.php");

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
	  $mail->SetFrom("request_portal@munsang.edu.hk");
	  $mail->Subject = "New Regular Check record submitted";
	  //$mail->Subject = "Hi";
      $mail->Body = "
      <h3><u>Regular Check Reporting</u></h3><br/>
	  <table style='border-collapse: collapse;'>
	  	<tr style='background-color:rgb(238,28,37)'>
			<th style='color:#ffffff;border:1px solid rgb(212,212,212);padding:0.3em'>Category</th>
			<th style='color:#ffffff;border:1px solid rgb(212,212,212);padding:0.3em'>Description</th>
			<th style='color:#ffffff;border:1px solid rgb(212,212,212);padding:0.3em'>Location</th>
			<th style='color:#ffffff;border:1px solid rgb(212,212,212);padding:0.3em'>Submitted By</th>
			<th style='color:#ffffff;border:1px solid rgb(212,212,212);padding:0.3em'>Submission date</th>
		</tr>
		<tr style='background-color:rgb(250,239,210)'>
			<td style='text-align: center;border:1px solid rgb(212,212,212);padding:0.3em'>".$item."</td>
			<td style='text-align: center;border:1px solid rgb(212,212,212);padding:0.3em'>".$problem."</td>
			<td style='text-align: center;border:1px solid rgb(212,212,212);padding:0.3em'>".$location."</td>
			<td style='text-align: center;border:1px solid rgb(212,212,212);padding:0.3em'>".$name."</td>
			<td style='text-align: center;border:1px solid rgb(212,212,212);padding:0.3em'>".$createdt."</td>
		</tr>
      </table>
      <br>
      Please visit <a href='https://request.msc.edu.hk/#/RequestPortal/checklist'>https://request.msc.edu.hk/#/RequestPortal/checklist</a> for detail
	  <br><br>
      Yours sincerely,<br><br>
      IT Support Division<br><br>
      PS: <b>Please do not reply to this email as this is an auto email function featured by Request System</b>
      ";
      //$mail->Body ="HI";
      $mail->AddAddress('hslui@munsang.edu.hk');     
      $mail->AddAddress('sho@munsang.edu.hk');
      $mail->AddAddress('cckwok@munsang.edu.hk');
      $mail->AddAddress('ycho@munsang.edu.hk');
      $mail->AddAddress('hfchan@munsang.edu.hk');
      $mail->AddAddress('tycheung@munsang.edu.hk');
      $mail->AddAddress('nmlaw@munsang.edu.hk');
	  $mail->Send();
?>