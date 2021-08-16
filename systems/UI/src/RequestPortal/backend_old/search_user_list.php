<?php
if(!defined('DB_SERVER')){
include('../../../config.php');
}
$key=$_POST['key'];
if($key!=""){
$sql = "SELECT * FROM userlist WHERE username LIKE '%$key%' OR name LIKE'%$key%'";
$result = $db->query($sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $response[] = $row;
    };
echo json_encode($response);
} else echo "Empty";
} else echo "Empty";
?>