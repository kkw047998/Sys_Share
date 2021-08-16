<?php
include('session.php');
if(!isset($db)){
    include('config.php');
}
$sql = "SELECT * FROM userdept WHERE username='$id' AND department_title ='Principal Secretary'";
$result = $db->query($sql);
if(mysqli_num_rows($result)>0){
    echo "isSec";
} else {
    echo "regular";
}

?>