<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
if(date("m") < 9){
   $st_yr = date("Y") -1;
   $ed_yr =date("Y");
} else if(date("m") > 8){
   $st_yr = date("Y");
   $ed_yr = date("Y")+1; 
}  
$key="";

$sql="
SELECT COUNT(*) AS Counter FROM request_portal WHERE Creation_dt LIKE '%$key%'
";

for($i=1;$i<9;$i++){
    $key = strval($i)."/".$ed_yr;
    $result = $db->query("
    SELECT COUNT(*) AS Counter FROM request_portal WHERE Creation_dt LIKE '%$key%'
    ");
    while($row = mysqli_fetch_array($result)){
        $data[$i] = $row['Counter'];
    }
}
for($i=9;$i<13;$i++){
    $key = strval($i)."/".$st_yr;
    $result = $db->query("
    SELECT COUNT(*) AS Counter FROM request_portal WHERE Creation_dt LIKE '%$key%'
    ");
    while($row = mysqli_fetch_array($result)){
        $data[$i] = $row['Counter'];
    } 
}
$response = "[".$data[9].",".$data[10].",".$data[11].",".$data[12].",".$data[1].",".$data[2].",".$data[3].",".$data[4].",".$data[5].",".$data[6].",".$data[7].",".$data[8]."]";
echo $response;
?>