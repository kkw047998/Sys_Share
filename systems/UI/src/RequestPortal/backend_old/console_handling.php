<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$sql = "SELECT * FROM request_portal WHERE (NOT Handler = '') AND (NOT Status='Completed') ORDER BY item_id DESC  LIMIT 15";
$result=$db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
};
echo json_encode($response);
?>