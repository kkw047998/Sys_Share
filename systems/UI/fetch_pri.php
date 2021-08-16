<?php
include('session.php');
if(!isset($db)){
    include('config.php');
}
$sql = "SELECT * FROM userdept WHERE department_title = 'Principal'";
$result = $db->query($sql);
if(mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $response[] = $row;
    }
    echo json_encode($response);
} else {
    echo "empty";
}
?>