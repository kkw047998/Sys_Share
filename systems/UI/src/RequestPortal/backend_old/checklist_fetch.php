<?php
$createdt = date("d/m/Y");
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$key_dept = $_POST['subdept'];
$key_stat = $_POST['stat'];
$sql ="
SELECT id,requester,req_name,req_mail,sub_dept,item,description,img_hv,location,create_date,status,remarks FROM check_list 
WHERE sub_dept='$key_dept' AND status='$key_stat'
";
$result = $db->query($sql);
if(mysqli_num_rows($result)==0){
    echo null;
} else {

while($row=mysqli_fetch_assoc($result)){
    $response[] = $row;
};
echo json_encode($response);
}
?>