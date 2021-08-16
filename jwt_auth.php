<?php
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;

$publicKey = "
-----BEGIN PUBLIC KEY-----

-----END PUBLIC KEY-----";

$jwt = $_GET['token'];
date_default_timezone_set("Asia/Hong_Kong");
$currTime = time();
$exp = time()+10;
/** JSON Data (E.g. userid, expire) **/
$decoded = JWT::decode($jwt, $publicKey, array('RS256'),true);

if(time() > $decoded->expire) {
    http_response_code(403);
    die("Token Expired");
} else {
    http_response_code(200);
    $_SESSION['login_user'] = $decoded->user_id;
    $_SESSION['login_name'] = $decoded->name;
    header("Location: portal-v4-fcm.php");
}
?>