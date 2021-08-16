<?php
if(!defined('DB_SERVER')){
include('../../../config.php');
}
  $id = $_POST['id'];
  // do some validation here to ensure id is safe

  $sql = "SELECT img FROM check_list WHERE id='$id'";
  $result = $db->query($sql);
  $row = mysqli_fetch_array($result);
  echo '<img width="50%" style="float:left" src="data:image/jpg;base64,'.base64_encode( $row['img'] ).'"/>';
?>