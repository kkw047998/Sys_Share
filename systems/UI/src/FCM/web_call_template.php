<?php 
date_default_timezone_set('Asia/Hong_Kong');
$FCMdate = date("Y-m-d");
$FCMtime = date("H:i:s");
$sql_token = "SELECT * FROM usertokenfcmweb WHERE username = '$recUserId'";
$result_token = $db->query($sql_token);
if(mysqli_num_rows($result_token)>0){
    while($row = mysqli_fetch_array($result_token)){
        $token = $row['token'];
    }
    $msg_FCM['to'] = $token;
    $msg_FCM['notification']['title'] = $msg_title." (".$FCMdate.' '.$FCMtime.")";
    $msg_FCM['notification']['body'] = $msg_body;
    $msg_FCM['notification']['icon'] = '/favicon.ico';
    $FCMdata = json_encode($msg_FCM);
    //FCM API end-point
    $url = 'https://fcm.googleapis.com/fcm/send';
    //api_key in Firebase Console -> Project Settings -> CLOUD MESSAGING -> Server key
    $server_key = 'AIzaSyC1wsMLsF8bdlIg22GIlLz9WqF5pbcs3js';
    //header with content_type api key
    $FCMheaders = array(
        'Content-Type:application/json',
        'Authorization:key='.$server_key
    );
    //CURL request to route notification to FCM connection server (provided by Google)
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $FCMheaders);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $FCMdata);
    $result = curl_exec($ch);
    if ($result === FALSE) {
        die('Oops! FCM Send Error: ' . curl_error($ch));
    }
    curl_close($ch);
}
?>