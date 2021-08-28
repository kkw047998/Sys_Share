<?php
   include("session.php");
   date_default_timezone_set('Asia/Hong_Kong');
   if(isset($_GET['etype'])){
      $entry = $_GET['etype'];
      if($entry=='proc'){
        $title = 'Procurement System';
      } else if($entry=='sub'){
        $title = 'LSS System';
      } else if($entry=='req'){
        $title = 'Request System';
      }
    } else {
      $entry = "req";
      $title = 'Request System';
    }

    if($entry!='ini'){
      $bd_dp = "<script src='dist/build.js'></script>";
    }
   if(isset($_GET['swap_date'])){
     $swap_date = $_GET['swap_date'];
   } else {
     $swap_date = '';
   }
   if(!isset($db)){
    include('config.php');
   };
   //session_start();
  $current_yr = date("Y");
  $curr_month = date("m");
  if($curr_month > 7){
    $st_yr = $current_yr;
    $next_yr = intval($current_yr)+1;
  } else {
    $st_yr = intval($current_yr)-1;
    $next_yr = $current_yr;
  }
  $period = $st_yr.'/'.$next_yr;
  
  $tomorrow = date("Y-m-d", strtotime('tomorrow'));
  $date_array = explode('-',$tomorrow);
  $YY = $date_array[0];
  $mm = $date_array[1];
  $dd = $date_array[2];
  $createdt = date("d/m/Y");
  $i = 0;
  $j = 0;
  if(isset($_SESSION['login_user'])){
    /*
    $sql = "SELECT * FROM userdept WHERE username = '$id'";
    $result = $db->query($sql);
    while($row = mysqli_fetch_array($result)){
        $tmp_dept = $row['deptmentid'];
        $sql_reimb = "SELECT DISTINCT tag FROM reimb WHERE dept = '$tmp_dept' AND approve_status='pending' AND period='$period' AND system_stat='enable' AND NOT(tag LIKE '%req%')";
        $result_reimb = $db->query($sql_reimb);
        if(mysqli_num_rows($result_reimb)>0){
          while($row_reimb = mysqli_fetch_array($result_reimb)){
            $i++;
          }
        }
    }
    $sql = "SELECT * FROM userdept WHERE username = '$id'";
    $result = $db->query($sql);
    while($row = mysqli_fetch_array($result)){
        $tmp_dept = $row['deptmentid'];
        $sql_proc = "SELECT DISTINCT proc_id FROM procurement WHERE dept = '$tmp_dept' AND period='$period' AND system_stat='enable' AND NOT(status='Completed') AND NOT(status='redo') AND NOT(status='reject')";
        $result_proc = $db->query($sql_proc );
        while($row_proc = mysqli_fetch_array($result_proc)){
          $j++;
        }     
    }
    */
  } else {
    if(isset($_GET['etype'])){
      $entry = $_GET['etype'];
     // header("Location: ../../index.php?etype=$entry");
    } else {
      $redirect = "portal.php";
     // header("Location: ../../index.php");
    }
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
  <!--<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
    <!--<link rel="icon" href="../../img/favicon.jpg">-->
    <!--<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="-1" />
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/css/bootstrap-select.min.css">-->

     <!--pass php variable to vue-->
    <title><?=$title?></title>
    <link rel="stylesheet" type="text/css" href="custom_css.css">
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
		<script src="https://secure.aadcdn.microsoftonline-p.com/lib/1.0.0/js/msal.js"></script>
    <script type="text/javascript" src="../../secrets.js"></script>
    <script type="text/javascript" src="../../request.js"></script>
    <script type="text/javascript" src="graph.js"></script>
  </head>
  <body>
    <input type="hidden" id="entry_type" value="<?=$entry?>"/>
    <input type="hidden" id="new_proc" value="New: <?=$j?>"/>
    <input type="hidden" id="new_reimb" value="New: <?=$i?>"/>
    <input type="hidden" id="tmp_id" value="<?php if(isset($_GET['req_id'])){ echo $_GET['req_id']; } ?>"/>
    <input type="hidden" id="tmp_id_2" value="<?php if(isset($_GET['req_view'])){ echo $_GET['req_view']; } ?>"/>
    <input type="hidden" id="previous_selected" value="none"/>
    <input type="hidden" id="st_tmp" value=""/>
    <input type="hidden" id="ed_tmp" value=""/>
    <input type="hidden" id="doc_type" value=""/>
    <input type="hidden" id="entry" value=""/>
    <input type="hidden" id="curr_dept" value=""/>
    <input type="hidden" id="query" value=""/>
    <input type="hidden" id="swap_date" value="<?=$swap_date?>"/>
    <!--Calendar-->
    <input type="hidden" id="submit_calendar" value="" onclick='insert_to_calendar()'/>
    <input type="hidden" id="calendar_subject" value=""/>
    <input type="hidden" id="calendar_content" value=""/>
    <input type="hidden" id="calendar_start_dt" value=""/>
    <input type="hidden" id="calendar_end_dt" value=""/>
    <input type="hidden" id="calendar_location" value=""/>
    <!--Calendar-->
    <div id="app"></div>
    <script src='dist/build.js'></script>
  </body>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js"></script>   
    <script type="text/javascript" src="firebase_local.js"></script>
    <script type="text/javascript" src="custom.js"></script>
    <script type="text/javascript" src="insert_calendar.js"></script>
    <link rel="stylesheet" type="text/css" href="clr_set.css">
</html>
