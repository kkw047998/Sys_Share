<?php
//header("refresh: 2700;");
include('C:/XAMPP/htdocs/portal_vue/UI/session.php');
if(!defined('DB_SERVER')){
    include('C:/XAMPP/htdocs/portal_vue/UI/config.php');
}
$i=0;
require("C:/XAMPP/htdocs/portal_vue/PHPMailer-master/src/PHPMailer.php");
require("C:/XAMPP/htdocs/portal_vue/PHPMailer-master/src/SMTP.php");
$db->query("SET NAMES utf8");
$db->query("SET NAMES utf8");
date_default_timezone_set('Asia/Hong_Kong');
$tdy = date("Y-m-d");
$sql = "
SELECT item_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status 
FROM request_portal 
WHERE 
NOT(Status='Completed' OR Status='Cancelled' OR Status='Rejected') 
AND Due_date < '$tdy'
ORDER BY Due_date ASC ";
$result = $db->query($sql);
$bd='';
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_array($result)){
        $i++;
        $bd.="
        <tr>
            <td style='border:1px solid black;'>".$row['item_id']."</td>
            <td style='border:1px solid black;'>".$row['Req_Name']."</td>
            <td style='border:1px solid black;'>".$row['Description']."</td>
            <td style='border:1px solid black;'>".$row['Location']."</td>
            <td style='border:1px solid black;'>".$row['Due_date']."</td>
            <td style='border:1px solid black;'>".$row['Handler']."</td>
            <td style='border:1px solid black;'>".$row['Status']."</td>
        </tr>";
    }
    $st = "
        Outstanding request(s) as of <b>".$tdy."</b>. <br><br>A total of <b>".$i."</b> Request(s)<br/><br/>
        Please refer to the information below: <br/><br/>
        <table style='border-collapse: collapse;border: 1px solid black;'>
        <thead>
            <th style='border: 1px solid black;'>ID</th>
            <th style='border: 1px solid black;'>Requester</th>
            <th style='border: 1px solid black;'>Description</th>
            <th style='border: 1px solid black;'>Location</th>
            <th style='border: 1px solid black;'>Due Date</th>
            <th style='border: 1px solid black;'>Assigned To</th>
            <th style='border: 1px solid black;'>Status</th>
        </thead>
        <tbody>
    ";
    $bd.="</tbody></table>";
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    $mail->IsSMTP(); // enable SMTP
    $mail->CharSet = 'UTF-8';
    $mail->SMTPAuth = true; // authentication enabled
    $mail->Host = "smtp.munsang.edu.hk";
    $mail->Port = 25; // or 587
    $mail->IsHTML(true);
    $mail->Username = "smtp@munsang.edu.hk";
    $mail->Password = "smtp0116";
    $mail->SetFrom("request@munsang.edu.hk","Request System");
    $title = "[Request System] Outstanding request(s) until ".$tdy;
    $mail->Subject = $title;
    $mail->Body = $st.$bd;
    /*
    $mail->AddAddress('hslui@munsang.edu.hk');
    $mail->AddAddress('chwong@munsang.edu.hk');
    */
    $mail->AddAddress('tycheung@munsang.edu.hk');
    $mail->AddAddress('chwong@munsang.edu.hk');
    $mail->AddAddress('hslui@munsang.edu.hk');
    $mail->Send();
}
?>