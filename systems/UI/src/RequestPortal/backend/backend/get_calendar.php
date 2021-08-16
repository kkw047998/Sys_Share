<?php
include('../../../session.php');
if(!defined('DB_SERVER')){
    include('../../../config.php');
}
$sql_fetch = "
SELECT item_id,Req_Name,Description,Due_date,Due_time,Location,Handler,Creation_dt
FROM request_portal WHERE (Handler='' OR Handler LIKE '%$name%') AND NOT(Status='Completed')";
$i=0;
$result_fetch = $db->query($sql_fetch);
if(mysqli_num_rows($result_fetch)>0){
    while($row_fetch = mysqli_fetch_array($result_fetch)){
        $data[$i]['title'] = $row_fetch['item_id'];   
        if($row_fetch['Due_time']!=''){
            $st_date = $row_fetch['Due_date'].'T'.$row_fetch['Due_time'];  
        } else {
            $st_date = $row_fetch['Due_date'].'T08:00:00';  
        }       
        $data[$i]['start'] = $st_date;
        $ed_date = $row_fetch['Due_date'].'T12:00:00';
        $data[$i]['end'] = $ed_date;
        $tmp_st = $row_fetch['Creation_dt'];        
        if($row_fetch['Handler']!=''){
            $data[$i]['backgroundColor'] = 'rgb(114, 163, 232)';
            $data[$i]['borderColor'] = 'rgb(114, 163, 232)';
        }
        //$data[$i]['description'] = $row_fetch['Description'];
        $data[$i]['extendedProps']['Req_Name'] = $row_fetch['Req_Name'];
        $data[$i]['extendedProps']['Location'] = $row_fetch['Location'];
        $i++;
    }
    echo json_encode($data);
} else {
    echo 'empty';
}

?>