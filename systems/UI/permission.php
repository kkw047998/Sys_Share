<?php
include('config.php');
include('session.php');
$sql = "SELECT * FROM userlist WHERE username='$id'";
$result = $db->query($sql);
while($row=mysqli_fetch_assoc($result)){
    $response[] = $row;
}

echo json_encode($response);
?>