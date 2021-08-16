<?php

/*
 * This file is part of Jwt for Php.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require_once '../jwt/vendor/autoload.php';

use Jwt\Jwt;
use Jwt\Algorithm\RS256Algorithm;

$privateKey = __DIR__ . '/key.pem';
$publicKey = __DIR__ . '/key.pub';
$data['username'] = 'tycheung';
$data['name'] = 'CHEUNG Tsang Yu';
$data['mail'] = 'tycheung@munsang.edu.hk';
$token = Jwt::encode(json_encode($data), $alg = new RS256Algorithm($privateKey, $publicKey));

echo "<br/>".$token."<br/>"; // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoic3RyaW5nIn0.RncJbCyf4zd0pu1N02u_rKwEezkmd94r3i5sWLk1ceU

// decode, you must passed allowed algorithm(s) to prevent attackers to control the choice of algorithm
$decoded = Jwt::decode($token, ['algorithm' => $alg]);

echo "<br/>".$decoded['data']; // 'string'
?>