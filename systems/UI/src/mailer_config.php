<?php
    $root = realpath($_SERVER["DOCUMENT_ROOT"]);
    require("$root/systems/PHPMailer-master/src/Exception.php");
    $currentdt = date("d/m/Y");
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    //$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    //$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.office365.com";
    $mail->Port = 587; // 587 or 25 or 465
    $mail->SMTPSecure = 'tls';
    $mail->IsHTML(true);
    $mail->Username = "appmailer@bsc.edu.hk";
    $mail->Password = "20210618";
    $mail->SetFrom("appmailer@bsc.edu.hk");
?>