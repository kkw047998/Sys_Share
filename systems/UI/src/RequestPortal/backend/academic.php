<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$db->query("SET CHARACTER SET utf8");
$db->query("SET NAMES utf8");
$key='';
$st = $_POST['st'];
$ed = $_POST['ed'];
$period = $st.'/'.$ed;
if(isset($_POST['key'])){
   $key = $_POST['key'];

   $sql = "
   SELECT item_id,ref_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status 
   FROM request_portal 
   WHERE Request_for LIKE '%aca%' AND NOT(Status='Completed' OR Status='Cancelled' OR Status='Rejected')
   AND(
      Req_Name LIKE '%$key%' OR
      Requester LIKE '%$key%' OR
      Due_date LIKE '%$key%' OR
      Due_time LIKE '%$key%' OR
      Location LIKE '%$key%' OR
      Category LIKE '%$key%' OR
      Remarks LIKE '%$key%' OR
      Handler LIKE '%$key%'
   ) AND period='$period'
   ORDER BY item_id DESC ";
  
   $result = $db->query($sql);
   $response = array();
   
   while($row = mysqli_fetch_assoc($result)){
      $response[] = $row;
   }
  
   echo json_encode($response);
} else {
 $sql = "
 SELECT item_id,ref_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status 
 FROM request_portal 
 WHERE Request_for LIKE '%aca%' AND NOT(Status='Completed' OR Status='Cancelled' OR Status='Rejected') AND period='$period' ORDER BY item_id DESC ";

 $result = $db->query($sql);
 $response = array();
 
 while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
 }

 echo json_encode($response);
}
?>