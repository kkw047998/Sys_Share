<?php
if(!defined('DB_SERVER')){
    include('../../../config.php');
    }


$key='';
$st = $_POST['st'];
$ed = $_POST['ed'];
$period = $st.'/'.$ed;
if(isset($_POST['key'])&&$_POST['key']!=''){
   $key = $_POST['key'];

   $sql = "
   SELECT item_id,ref_id,Req_Name,Description,Location,Due_date,Due_time,Handler,Status 
   FROM request_portal 
   WHERE  (Request_for LIKE '%IT%' OR Request_for LIKE '%HALL%') AND NOT(Status='Completed' OR Status='Cancelled' OR Status='Rejected') 
   AND(
      item_id LIKE '%$key%' OR
      Req_Name LIKE '%$key%' OR
      Requester LIKE '%$key%' OR
      Due_date LIKE '%$key%' OR
      Due_time LIKE '%$key%' OR
      Location LIKE '%$key%' OR
      Category LIKE '%$key%' OR
      Remarks LIKE '%$key%' OR
      Handler LIKE '%$key%' OR
      Description LIKE '%$key%'
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
 WHERE 
 (Request_for LIKE '%IT%' OR Request_for LIKE '%HALL%') 
 AND NOT(Status='Completed' OR Status='Cancelled' OR Status='Rejected') 
 AND period='$period'
 ORDER BY item_id DESC ";
 $result = $db->query($sql);
 $response = array();
 $i=0;
 while($row = mysqli_fetch_assoc($result)){
    $response[] = $row;
    /*
    $response[$i]['item_id'] = $row['item_id'];
    $response[$i]['Req_Name'] = $row['Req_Name'];
    $response[$i]['Description'] = $row['Description'];
    $response[$i]['Location'] = $row['Location'];
    $response[$i]['Due_date'] = $row['Due_date'];
    $response[$i]['Due_time'] = $row['Due_time'];
    $response[$i]['Handler'] = $row['Handler'];
    $i++;
    */
 }
 echo json_encode($response);
}
?>