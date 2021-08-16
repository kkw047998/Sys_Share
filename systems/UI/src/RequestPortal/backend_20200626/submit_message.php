<?php
include("../../../session.php");
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
if(isset($id)&&(isset($name))){
    $db->query("SET NAMES utf8");
    $db->query("SET NAMES utf8");
    date_default_timezone_set('Asia/Hong_Kong');
    $tdy = date("Y-m-d");
    $now = date("H:i:s");
    $select_id = $_POST['select_id'];
    $msg = $_POST['msg'];
    $msg = $db->real_escape_string($msg);
    $rid = explode(",",$select_id);
    $i=0;
    $insert_id = '';
    for($i=0;$i<count($rid);$i++){
        if($i==(count($rid)-1)){
            $insert_id.="#".$rid[$i]."#";
        } else {
            $insert_id.="#".$rid[$i]."#,";
        }
    }
    $stat = $_POST['stat'];
    $rep_type = $_POST['rep_type'];   
    $record_id = $rid[0];
    $sql = "
    INSERT INTO portal_ticket(record_id,message,record_status,rep_date,rep_time,rep_by_id,rep_by_name,rep_type,rep_grp)
    VALUES ('$record_id','$msg','$stat','$tdy','$now','$id','$name','$rep_type','$insert_id')";
    $db->query($sql);
    $l=0;
    if($rep_type=='handler'){
        for($l=0;$l<count($rid);$l++){
            $tmp_id = $rid[$l];
            $sql_check_handler="SELECT * FROM request_portal WHERE item_id='$tmp_id' AND Handler LIKE '%$name%'";
            $result_check_handler = $db->query($sql_check_handler);
            if(!(mysqli_num_rows($result_check_handler)>0)){
                $sql_handler = "SELECT * FROM request_portal WHERE item_id='$tmp_id'";
                $result_handler = $db->query($sql_handler);
                $row_handler = mysqli_fetch_array($result_handler);
                $exist_handler = $row_handler['Handler'];
                if($exist_handler==''){
                    $handler = $name;
                } else {
                    $handler = $exist_handler.",".$name;
                }
            
                $sql_update = "UPDATE request_portal SET Status='$stat',Handler='$handler' WHERE item_id = '$tmp_id'";
                $db->query($sql_update);
            }
            $sql_update = "UPDATE request_portal SET Status='$stat' WHERE item_id = '$tmp_id'";
            $db->query($sql_update);
        }
    } else {
        $sql_original_stat="SELECT Status FROM request_portal WHERE item_id='$select_id'";
        $result_original_stat = $db->query($sql_original_stat);
        $row_original_stat = mysqli_fetch_array($result_original_stat);
        $original_status = $row_original_stat['Status'];
        if(($original_status=='Completed')||($original_status=='Cancelled')||($original_status=='Rejected')){
            $sql_update = "UPDATE request_portal SET Status='Re-Opened' WHERE item_id = '$select_id'";
            $db->query($sql_update);
        }
    }
    require("../../../../PHPMailer-master/src/PHPMailer.php");
    require("../../../../PHPMailer-master/src/SMTP.php");
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
    if($stat!='Not Started'){
        if($rep_type=='handler'){       
            $currentdt = date("d/m/Y");
            $y=0;
            for($y=0;$y<count($rid);$y++){
                //fetch applicant info
                $tmp = $rid[$y];
                $sql_info = "SELECT * FROM request_portal WHERE item_id='$tmp'";
                $result_info = $db->query($sql_info);
                $row_info = mysqli_fetch_array($result_info);
                //Fetch Request Info.
                $recMail = $row_info['Req_Mail'];
                //$recMail = 'tycheung@munsang.edu.hk';
                $applicant = $row_info['Req_Name'];
                $app_id = $row_info['Requester'];
                $modid = $tmp;
                $recName = $applicant;
                $create_date = $row_info['Creation_dt'];
                $Dp = $row_info['Description'];
                $Handler_name = $row_info['Handler'];
                $Handler_name = str_replace(",",' ,',$Handler_name);
                $currentdt = date("d/m/Y");           
                if($stat=='Completed'){
                    $title = "[Request System] : Request ID ".$tmp." Completed";
                    $update_date_dp = "Date of Completion";
                    $msg_title = $title;
                } else {
                    $title = "[Request System] : Progress Update On Request ID ".$tmp;
                    $update_date_dp = "Date of Update";
                    $msg_title = $title;
                }
                $mail->Subject = $title;
                if($msg==''){
                    $dp_msg='';
                } else {
                    $dp_msg="Message from ".$name." : ".$msg."<br/><br/>";
                }
                if($msg!=''){
                    $body_r = "<tr style='border: 1px solid black;'><td style='border: 1px solid black;'>&nbsp;Remarks&nbsp;</td><td>&nbsp;".$msg."&nbsp;</td></tr>";
                } else $body_r = '';

                $mail->Body = "
                Dear&nbsp;".$recName.",<br><br>
                Progress update for your request, details are as follows:<br/><br/>
                <table style='border-collapse: collapse;border: 1px solid black;'>
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;Request ID&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;".$modid."&nbsp;</td>
                </tr>
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;Date of Submission&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;".$create_date."&nbsp;</td>
                </tr>
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;Description&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;".$Dp."&nbsp;</td>
                </tr>
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;Handled By&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;".$Handler_name."&nbsp;</td>
                </tr>		  
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;".$update_date_dp."&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;".$currentdt."&nbsp;</td>
                </tr>
                    ".$body_r."
                <tr style='border: 1px solid black;'>
                    <td style='border: 1px solid black;'>&nbsp;Status&nbsp;</td>
                    <td style='border: 1px solid black;'>&nbsp;<b>".$stat."</b>&nbsp;</td>
                </tr>
                </table>
                <br><br>
                Please visit <u><a href='https://request.msc.edu.hk/index.php?etype=req&req_view=applicant&req_id=".$select_id."#/RequestPortal/ticket' target='_blank'>Here</a></u> for more information.
                <br><br>
                Yours sincerely,<br><br>IT Support Division<br><br>
                PS: <b>Please do not reply to this email as this is an auto email function featured by Request System</b>";
                $mail->AddAddress($recMail);
                $mail->Send();
                $mail->ClearAllRecipients(); 
                $mail->ClearAttachments();   //Remove all attachements
                //[End of mailer]
                $recUserId = $app_id;
                $msg_body = "There's an update on Request ID ".$tmp."\nPlease check email for more info.";
                //[FCM] add push notification
                include("../../FCM/web_call_template.php");
                //[FCM][End of push notification]
            }
        } else if($rep_type=='applicant'){
            $sql_info = "SELECT * FROM request_portal WHERE item_id='$select_id'";
            $result_info = $db->query($sql_info);
            $row_info = mysqli_fetch_array($result_info);
            $handler_list = $row_info['Handler'];
            $handler = explode(',',$handler_list);
            $h=0;
            for($h=0;$h<count($handler);$h++){
                $tmp_h = $handler[$h];
                $sql_user = "SELECT * FROM userlist WHERE name='$tmp_h' AND portal_level>1";
                $result_user = $db->query($sql_user);
                while($row_user = mysqli_fetch_array($result_user)){
                    $recMail = $row_user['Mail'];
                    $recUserId = $row_user['username'];
                    $title = "[Request System] : Progress Update On Request ID ".$select_id;
                    $msg_title = $title;
                    $mail->Subject = $title;
            
                    //$mail->Subject = "Hi";
                    $mail->Body = "
                    Dear ".$tmp_h.", <br/><br/>
                    There's an update on Request ID ".$select_id."<br/>
                    Please visit <u><a href='https://request.msc.edu.hk/index.php?etype=req&req_view=handler&req_id=".$select_id."#/RequestPortal/ticket' target='_blank'>Here</a></u> for more information.
                    <br><br>
                    PS: <b>Please do not reply to this email as this is an auto email function featured by Request System</b>";
                    $mail->AddAddress($recMail);
                    $mail->Send();
                    $mail->ClearAllRecipients(); 
                    $mail->ClearAttachments();   //Remove all attachements
                    $msg_body = "There's an update on Request ID ".$select_id."\nPlease check email for more info.";
                    //[FCM] add push notification
                    include("../../FCM/web_call_template.php");
                    //[FCM][End of push notification]
                }
            }
        }
    }
    //phpmailer
    echo 'OK';
} else {
    echo 'Session Time Out';
}

?>