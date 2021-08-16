<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
  require("src/PHPMailer.php");
  require("src/SMTP.php");
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
    $mail->SetFrom("request_portal@munsang.edu.hk");
    $mail->Subject = "Request ID : ".$modid." Completed";
	//$mail->Subject = "Hi";
    $mail->Body = "Dear&nbsp;".$recName."<br><br>Request ID :&nbsp;".$modid."<br><br> Description :&nbsp;".$Dp."<br><br>Created on :&nbsp;".$Creation_dt."<br><br>Has completed by ".$Handler_name."&nbsp;On :&nbsp;".$currentdt."<br><br>Yours sincerely,<br><br>IT Support Division<br><br>PS: <b>Please do not reply to this email as this is an auto email function featured by Request System</b>";
	//$mail->Body ="HI";
    $mail->AddAddress($recMail);
	//$mail->AddAddress('tycheung@munsang.edu.hk');
	
	
	   if(!$mail->Send()) {
       echo "ERROR";
     } else {
        echo "<h5>Email has been sent to : $recMail</h5><br/>";
     
}
?>