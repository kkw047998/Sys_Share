<?php
require __DIR__ . '/vendor/autoload.php';
use Firebase\JWT\JWT;
$privateKey = "-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDC+VzTVm0BIV0ytmWy5RHiLCuzajnnP2knTrz14WGd5xqp5hmM
i7ouG1rL+vyPKic+YjKf/c9OS+Un5k+14m5Xu/lRpT9xl2vX6N4Q9d5D3x166AwC
PvY+nxVPICC4rDxRuLQC2Vi/I8m1V5m7PYk/dVa+4lmUPpon14SlCJvWuQIDAQAB
AoGAUFr5WNhrwGWBxZ7KtzoVbsOJlz4Wcyn9KogW9LdYxf0zTgZZTUVhDBOWDi94
24AiAGH0P2AZiklZPmJ7Q5j4pFLkXJCCN+dej3zrPyMQD1wj2tTmSus5PotmbvmX
hjaYfvb+W7fBWHl+P7H9TQihArvf6TSadAH9YvPvPWzvz8kCQQD3c8yXzI+A6RMm
yvL5T+e1OzmMpoQczKQgKCOm5l8NnmXi+Ms0IwFKvbSpLAnqQLVgqt9+Ilsp7maU
DP/ypg2bAkEAybWAm8zrg1BDB1BTSahTXbxaaN0Mr8y9k7/v+Hl0zSDHPF1+EMs0
/zegwxS93/R5zuNw8wOZo1uoOquDrwlcOwJAVzSADZ8Rk6SQE0PCjQoT5lKQ3Xhx
ZpTX4l1C8zaMmQgRcAOt2RndArIIUPYsKFnVkdOmH5WL+yMBE3vhV2odsQJAORiW
cgOceswiXRSgrs3l4zeow9wmdjDXTNZc4BHJPTNVEkJIqApNUxz09aOOZ7F1NVnu
I+vV9obAZPMd0FMu9wJAP32/lHjdIqQyQcGEORkbGAl6e670ZWzJC2hhut2hPSKD
58ZD0SCc43xh9SPXHycTX3O7Ppn99OJ3UCcFCNbx3w==
-----END RSA PRIVATE KEY-----";

$publicKey = "-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDC+VzTVm0BIV0ytmWy5RHiLCuz
ajnnP2knTrz14WGd5xqp5hmMi7ouG1rL+vyPKic+YjKf/c9OS+Un5k+14m5Xu/lR
pT9xl2vX6N4Q9d5D3x166AwCPvY+nxVPICC4rDxRuLQC2Vi/I8m1V5m7PYk/dVa+
4lmUPpon14SlCJvWuQIDAQAB
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