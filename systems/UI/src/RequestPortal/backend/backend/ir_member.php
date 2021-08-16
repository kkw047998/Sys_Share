<?php
if(!defined('DB_SERVER')){
include('../../../config.php');
}

$sql = "
select  u.id,u.username,u.name,
        (select count(*) from request_portal where Handler LIKE CONCAT('%',u.name,'%') ) as counter
from userlist u
where Department='ir'
";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
};
echo json_encode($response);
?>