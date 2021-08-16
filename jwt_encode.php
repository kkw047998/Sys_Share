<?php
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
$privateKey = "
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----";

$publicKey = "
-----BEGIN PUBLIC KEY-----

-----END PUBLIC KEY-----";

date_default_timezone_set("Asia/Hong_Kong");
$currTime = time();
$exp = time()+10;
$uid = $_POST['uid'];
$name = $_POST['name'];
/** JSON Data (E.g. userid, expire) **/
$payload = array(
    "expire" => $exp,
    "user_id" => $uid,
    "name" => $name,
);
$jwt = JWT::encode($payload, $privateKey, 'RS256');
echo print_r($jwt, true);

?>