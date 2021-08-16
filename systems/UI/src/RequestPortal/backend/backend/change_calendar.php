<?php
include('../../../session.php');
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$record_id = $_POST['record_id'];
$new_dd = $_POST['new_due_date'];
$i = 0;
if(strpos($new_dd,'T')==false){  //format as array
    $dd_array = explode(',',$new_dd);
    $dd_array[1] = intval($dd_array[1])+1;
    $date = $dd_array[0].'-'.$dd_array[1].'-'.$dd_array[2];
    $time = $dd_array[3].':'.$dd_array[4].$dd_array[5];
    $tmp_id = explode('#',$record_id);
    $rid = $tmp_id[1];
    $sql_check_change = "SELECT * FROM request_portal WHERE item_id = '$rid' AND NOT(Due_date>'$date') AND NOT(Due_date<'$date')";
    $result_check_change = $db->query($sql_check_change);
} else {
    $tmp_date = explode('T',$new_dd);
    $date = $tmp_date[0];
    $tmp_id = explode('#',$record_id);
    $rid = $tmp_id[1];
    $sql_check_change = "SELECT * FROM request_portal WHERE item_id = '$rid' AND NOT(Due_date>'$date') AND NOT(Due_date<'$date')";
    $result_check_change = $db->query($sql_check_change);
}
if(!(mysqli_num_rows($result_check_change)>0)){
    $sql_update = "UPDATE request_portal SET Due_date='$date' WHERE item_id = '$rid'";
    $db->query($sql_update);
}
?>