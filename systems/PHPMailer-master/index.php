<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
  require("src/PHPMailer.php");
  require("src/SMTP.php");
 
 	$mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP

    $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    //$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.munsang.edu.hk";
    $mail->Port = 25; // or 587
    $mail->IsHTML(true);
    $mail->Username = "smtp@munsang.edu.hk";
    $mail->Password = "smtp0116";
    $mail->SetFrom("request_portal@munsang.edu.hk");
    $mail->Subject = "Test";
    $mail->Body = "hello";
    $mail->AddAddress("tycheung@munsang.edu.hk");

     if(!$mail->Send()) {
        echo "Mailer Error: " . $mail->ErrorInfo;
     } else {
        echo "Message has been sent";
     
}