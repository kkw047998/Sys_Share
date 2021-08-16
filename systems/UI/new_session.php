<?php
if(!isset($db)){
    include('config.php');
}
$uid = $_POST['userId'];
$sql = "SELECT * FROM userdept WHERE username='$uid' LIMIT 1";
$result = $db->query($sql);
if(mysqli_num_rows($result)>0){
    session_start(); 
    while($row = mysqli_fetch_array($result)){
        $userid = $row['username'];
        $username = $row['name'];
        $usermail = $row['email'];
    }
    $_SESSION['login_user'] = $userid.','.$username.','.$usermail;
    echo $_SESSION['login_user'];
}

?>