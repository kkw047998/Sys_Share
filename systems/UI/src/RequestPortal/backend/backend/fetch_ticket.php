<?php
include("../../../session.php");
if(!defined('DB_SERVER')){
    include('../../../config.php');
}


$statement_tail='';
if(isset($_POST['record_id'])){
    $rid = $_POST['record_id'];
    $statement = "record_id = '".$rid."'";
    $statement_tail = "rep_grp LIKE '%#$rid#%'";
} else if(isset($_POST['select_id'])){
    $rid = $_POST['select_id'];
    $statement = "record_id IN (".$rid.")";
    $records = explode(',',$rid);
    $r=0;
    if(count($records)>1){
        for($r=0;$r<count($records);$r++){
            $tmp_r = $records[$r];
            if($r==0){
                $statement_tail.="(rep_grp LIKE '%#$tmp_r#%' OR ";
            } else if($r<(count($records)-1)){
                $statement_tail.="rep_grp LIKE '%#$tmp_r#%' OR ";
            } else {
                $statement_tail.="rep_grp LIKE '%#$tmp_r#%')";
            }
        }
    } else {
        $statement_tail = "rep_grp LIKE '%#$rid#%'";
    }
} else {
    $rid='';
    $statement='';
}
$i=0;
// /".$statement." AND 
if($rid!=''){
    $sql ="SELECT * FROM portal_ticket WHERE ".$statement_tail." ORDER BY id ASC";
    $result = $db->query($sql);
    if(mysqli_num_rows($result)>0){
        while($row = mysqli_fetch_assoc($result)){
            $record_id = $row['record_id'];
            $sql_title = "SELECT Description FROM request_portal WHERE item_id='$record_id'";
            $result_title = $db->query($sql_title);
            $row_title = mysqli_fetch_array($result_title);
            $response[$i]['Description'] = $row_title['Description'];
            $response[$i]['record_id'] = $row['record_id'];
            $response[$i]['message'] = $row['message'];
            $response[$i]['record_status'] = $row['record_status'];
            $response[$i]['rep_date'] = $row['rep_date'];
            $response[$i]['rep_time'] = $row['rep_time'];
            $response[$i]['rep_by_id'] = $row['rep_by_id'];
            $response[$i]['rep_by_name'] = $row['rep_by_name'];
            $response[$i]['rep_type'] = $row['rep_type'];
            $response[$i]['rep_grp'] = str_replace("#",'',$row['rep_grp']);
            $i++;
        }
        echo json_encode($response);
    } else {
        echo 'empty';
    }
} else {
    echo 'empty';
}
?>