<?php
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}

$id = $_POST['id'];
$sql = "SELECT id,requester,req_name,req_mail,sub_dept,item,description,img_hv,location,create_date,status,remarks FROM check_list WHERE id ='$id'";
$result = $db->query($sql);
while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
};
echo json_encode($response);
?>