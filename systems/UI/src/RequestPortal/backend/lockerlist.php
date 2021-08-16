<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
    }
 $form = $_POST['Form'];
 $class = $_POST['Class'];
 if($_POST['Class']=='*'){
   $class = '';
   };
 $status = $_POST['Status'];
 
 $db->query("SET CHARACTER SET utf8");
 $db->query("SET NAMES utf8");
 $sql = "SELECT * FROM locker WHERE status LIKE '%$status%' AND form='$form' AND class LIKE '%$class%' ORDER BY form, class";
 $result = $db->query($sql);
 $response = array();
 
 while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
 }

 echo json_encode($response);
?>