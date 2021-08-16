<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
}


$id = $_POST['id'];
$sql = "SELECT * FROM locker WHERE id='$id'";
$result=$db->query($sql);
while($row = mysqli_fetch_assoc($result)){
	$response[] = $row;
}
echo json_encode($response);
?>