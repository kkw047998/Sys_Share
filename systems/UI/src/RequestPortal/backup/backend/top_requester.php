<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
    }
$sql = "
SELECT Requester,COUNT(*) as counter
FROM  request_portal
GROUP BY Requester
ORDER BY COUNT(*) DESC
LIMIT 1;";

$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
}
echo json_encode($response);
?>