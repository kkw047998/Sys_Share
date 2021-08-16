<?php
include('session.php');
$output[] = $id;
$output[] = $name;
$tomorrow = date("Y-m-d", strtotime('tomorrow'));
$date_array = explode('-',$tomorrow);
$YY = $date_array[0];
$mm = $date_array[1];
$dd = $date_array[2];
$output[]= $YY.'-'.$mm.'-'.$dd;
echo json_encode($output);
?>