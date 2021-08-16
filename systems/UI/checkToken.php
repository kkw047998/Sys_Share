<?php
date_default_timezone_set('Asia/Hong_Kong');
if(!isset($db)){
    include('config.php');
};
require_once '../jwt/vendor/autoload.php';

use Jwt\Jwt;
use Jwt\Algorithm\RS256Algorithm;
if(isset($_GET['utoken'])){
    $token = $_GET['utoken'];
    $privateKey = __DIR__ . '/key.pem';
    $publicKey = __DIR__ . '/key.pub';
    $alg = new RS256Algorithm($privateKey, $publicKey);
    // decode, you must passed allowed algorithm(s) to prevent attackers to control the choice of algorithm
    $decoded = Jwt::decode($token, ['algorithm' => $alg]);
    $id = $decoded['userId'];
    $exp = $decoded['exp'];
    //$sql = "SELECT * FROM userlist WHERE username = '$id'";
    //$result = $db->query($sql);
    //$row = mysqli_fetch_array($result);
    //$name = $row['name'];
    //$mail = $row['Mail'];
    //session
}
echo $token;
?>