<?php
include('../../session.php');
if(!defined('DB_SERVER')){
    include('../../config.php');
}
$from_name = $_POST['from_name'];
$from_path = $_POST['from_path'];
$to_name = $_POST['to_name'];
$to_path = $_POST['to_path'];
$system = $_POST['sys_type'];
$sql_fetch_recent = "SELECT * FROM recent_access WHERE username = '$id' AND system_type = '$system'";
$result_fetch_recent = $db->query($sql_fetch_recent);
if($to_path!='/'){
    if(mysqli_num_rows($result_fetch_recent)>0){
        while($row_fetch_recent = mysqli_fetch_array($result_fetch_recent)){
            $json_record = $row_fetch_recent['access_string'];
        }
        $data_exist = json_decode($json_record,true);
        $data_list = array_column($data_exist, 'name');
        $key = array_search($to_name,$data_list,true);
        if($key===FALSE){
            $data_new[0]['name'] = $to_name;
            $data_new[0]['path'] = $to_path;
            $data = array_merge($data_new,$data_exist);
        } else {
            $new_value = $data_exist[$key];
            unset($data_exist[$key]);
            $data_new[0]['name'] = $to_name;
            $data_new[0]['path'] = $to_path;
            $data = array_merge($data_new,$data_exist);
        }
        $json_str = json_encode($data);
        $sql_update = "UPDATE recent_access SET access_string = '$json_str' WHERE username = '$id' AND system_type='$system'";
        $db->query($sql_update);
        $sql_fetch_new = "SELECT * FROM recent_access WHERE username = '$id' AND system_type = '$system'";
        $result_fetch_new = $db->query($sql_fetch_new);
        $row_fetch_new = mysqli_fetch_array($result_fetch_new);
        echo $row_fetch_new['access_string'];
    } else {
        $data[0]['name'] = $to_name;
        $data[0]['path'] = $to_path;
        $json_str = json_encode($data);
        $sql_insert = "INSERT INTO recent_access(access_string,username,system_type) VALUES ('$json_str','$id','$system')";
        $db->query($sql_insert);
        $sql_fetch_new = "SELECT * FROM recent_access WHERE username = '$id' AND system_type = '$system'";
        $result_fetch_new = $db->query($sql_fetch_new);
        $row_fetch_new = mysqli_fetch_array($result_fetch_new);
        echo $row_fetch_new['access_string'];
    }
}
?>