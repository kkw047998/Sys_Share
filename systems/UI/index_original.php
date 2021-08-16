<?php
  error_reporting(0);
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
   header("Access-Control-Allow-Origin: *");
   include("session.php");
   if(!isset($db)){
    include('config.php');
   };
   //session_start();
   if(!isset($_SESSION['login_user'])&&isset($_GET['utoken'])){
      $token = $_GET['utoken'];
      header("location:sso.php?utoken=$token&etype=$entry");
     //echo $token;
   } else if(!isset($_SESSION['login_user'])){
      header("location:Auth/sso.php");
      //die();
   } else if(isset($_SESSION['login_user'])&&(isset($_GET['utoken']))){
      header("location:index.php?etype=$entry");
   } 
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
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
  <!--<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"> -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>   
    <link rel="icon" href="src/images/favicon.png">
    <!--<link href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" rel="stylesheet">-->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="-1" />
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.7/dist/css/bootstrap-select.min.css">-->

     <!--pass php variable to vue-->
    <title><?=$title?></title>
    <link rel="stylesheet" type="text/css" href="custom_css.css">
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
    <div id="app"></div>
    <?=$bd_dp?>
  </body>
 	<script>
   /*
    $(window).on('load', function setdefault() {
        $('#min_date').val('<?= $YY.'-'.$mm.'-'.$dd?>');
        $('#tmr_date').val('<?= $YY.'-'.$mm.'-'.$dd?>');
        document.getElementById('min_date').min="<?= $YY.'-'.$mm.'-'.$dd?>";
    });
    */
    </script>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/6.4.2/firebase-messaging.js"></script>
    
    <script>  
    function unloader(){
      return "Data will be lost on reload.";
    }
    /*
    $(window).bind('focus', function() {
       location.reload();
    });*/
    //FCM
    var loc = window.location.href+'';
    /*
    if (loc.indexOf('http://')==0){
        window.location.href = loc.replace('http://','https://');
    }*/
    function store_token(data){
        $.ajax({
            type:"POST",
            data:{token:data},
            url:"src/FCM/store_token.php",
        })
        }
    // [END refresh_token]
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyC2nFzAQIHE2tiX0CZIgA-Y0b26sNkfqPY",
        authDomain: "callplatform-96942.firebaseapp.com",
        databaseURL: "https://callplatform-96942.firebaseio.com",
        projectId: "callplatform-96942",
        storageBucket: "",
        messagingSenderId: "153799897602",
        appId: "1:153799897602:web:d7645956bea1ce06"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const messaging = firebase.messaging();
        function sendTokenToServer(currentToken) {
            if (!isTokenSentToServer()) {
            //console.log('Sending token to server...');
            // TODO(developer): Send the current token to your server.
            setTokenSentToServer(true);
            } else {
            //console.log('Token already sent to server so won\'t send it again ' +'unless it changes');
            }
        }
        function isTokenSentToServer() {
            return window.localStorage.getItem('sentToServer') === '1';
        }
        function setTokenSentToServer(sent) {
            window.localStorage.setItem('sentToServer', sent ? '1' : '0');
        }
        // [START refresh_token]
    // Callback fired if Instance ID token is updated.
        messaging.onTokenRefresh(function() {
            messaging.getToken().then(function(refreshedToken) {
            console.log('Token refreshed.');
            // Indicate that the new Instance ID token has not yet been sent to the
            // app server.
            setTokenSentToServer(false);
            // Send Instance ID token to app server.
            sendTokenToServer(refreshedToken);
            // [START_EXCLUDE]
            // Display new Instance ID token and clear UI of all previous messages.
            resetUI();
            // [END_EXCLUDE]
            }).catch(function(err) {
            //console.log('Unable to retrieve refreshed token ', err);
            //showToken('Unable to retrieve refreshed token ', err);
            });
        });
    messaging.usePublicVapidKey("BGBdHZKTaTwzin_4U5b-U5Hw4A4g_9VWXSvD98t3gFHX6jUCsN_zv9zy4YSi9mSqeAZyOxQTnvUgkRVUWhu2cPo");
    Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
        //console.log('Notification permission granted.');
        // TODO(developer): Retrieve an Instance ID token for use with FCM.
        // ...
    } else {
        //console.log('Unable to get permission to notify.');
    }
    });
    //token
    messaging.getToken().then((currentToken) => {
    if (currentToken) {
        sendTokenToServer(currentToken);
        store_token(currentToken);
        //console.log(currentToken);  //ajax post db -> log id,name,token
    } else {
        // Show permission request.
        //console.log('No Instance ID token available. Request permission to generate one.');
        // Show permission UI.
        updateUIForPushPermissionRequired();
        setTokenSentToServer(false);
        //console.log(currentToken);
    }
    }).catch((err) => {
    //console.log('An error occurred while retrieving token. ', err);
    //showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
    });
    //msg
    messaging.onMessage(function(payload){
        //console.log('Message received. ', payload);
        // [START_EXCLUDE]
        // Update the UI to include the received message.
        var notificationTitle = payload.notification.title;
        var notificationOptions = {
            body: payload.notification.body,
            icon: payload.notification.icon
        };
        //console.log(notificationTitle, notificationOptions);
        var notification = new Notification(notificationTitle, notificationOptions);
        //registration.showNotification(notificationTitle, notificationOptions);
        // [END_EXCLUDE]
    });
    //FCM

    </script>
</html>

<script>
/* Sample function that returns boolean in case the browser is Internet Explorer*/
function isIE() {
  ua = navigator.userAgent;
  /* MSIE used to detect old browsers and Trident used to newer ones*/
  var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
  
  return is_ie; 
}
/* Create an alert to show if the browser is IE or not */
if (isIE()){
    alert('Please visit this site with Chrome / Edge, IE is not supported!');
};
      function trigger_view_reimb(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('v_reimb_f').click();
      }
      function trigger_view_reimb_proc(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('v_reimb_f_proc').click();
      }
			function change_display(id){
				var targetclass = id+"-c";
				var targetid = id+"-i";
				var st = document.getElementById(targetid).style.display;
				 if (st=='none'){
					 $("."+targetclass).show();
				 } else $("."+targetclass).hide();;
      }
      function editrecord(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('edit_budget').click();
      }
      function editreimb(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('edit_reimb_record').click();
      }
      function cancelreimb(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('cancel_reimb_record').click();
      }
      function rejectreimb(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('reject_reimb_record').click();
      }
      function trigger_view_comp(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('view_proc_comp2').click();
        /*
          var url = 'src/Procurement/procurement/backend/comparision_table.php?p_id='+id;
          window.open(url,'Comparision Table');
        */
      }
      function trigger_go_reimb(id){
          document.getElementById('tmp_id').value = id;
          document.getElementById('goreimb').click();
      }
      function open_upload_accepted(id){
        var url = 'src/Procurement/procurement/backend/upload_selected_quot.php?p_id='+id;
          window.open(url,'Comparision Table','height=150px,width=400px');
      }
      function upload_signed_irg(id){
        var url = 'src/Procurement/report/backend/upload_pdf_irg.php?p_id='+id;
          window.open(url,'Comparision Table','height=150px,width=400px');
      }
      function open_upload_comp_cat3(id){
        var url = 'src/Procurement/procurement/backend/upload_cat3_comp.php?p_id='+id;
          window.open(url,'Comparision Table','height=150px,width=400px','left=400','top=300');
      }
      function trigger_view_comp_cat3(id){
        var url = 'src/Procurement/procurement/backend/cat_3_comparision_table.php?p_id='+id;
          window.open(url,'Comparision Table','height=850px,width=1180px');
      }
      function trigger_go_summary(id){
        var url = 'src/Procurement/procurement/backend/IMC_tender.php?proc_id='+id;
        window.open(url,'Comparision Table','height=850px,width=1180px');
      }
      function editproc(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('edit_proc').click();
      }
      function viewproc(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('view_proc').click();
      }
      function editproc_ret(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('fill_return').click();
      }
      function editproc_ret_info(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('return_info').click();
      }
      function rejectproc(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('reject_proc_record').click();       
      }
      function cancelproc(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('cancel_proc_record').click();    
      }
      function trigger_view_reimb_recur(id,dept){
        document.getElementById('tmp_id').value = id;
        document.getElementById('tmp_id_2').value = dept;
        document.getElementById('entry').value = 'proc';       
        document.getElementById('trigger_view_reimb_recur').click(); 
      }
      //
      function trigger_go_result(id){
        var url = 'src/Procurement/procurement/backend/public_tender.php?proc_id='+id;
        window.open(url,'Tender for Public','height=1000px,width=860px');
      }
      function trigger_go_confirm(id){
        var url = 'src/Procurement/procurement/backend/confirmation.php?p_id='+id;
        window.open(url,'Confirmation Letter','height=1000px,width=860px');
      }
      function trigger_go_unscuc(id){
        var url = 'src/Procurement/procurement/backend/unsuc.php?p_id='+id;
        window.open(url,'Unsuccessful letter','height=1000px,width=860px');
      }
      //
      function trigger_view_proc(id,dept){
        document.getElementById('tmp_id').value = id;
        document.getElementById('tmp_id_2').value = dept;
        document.getElementById('entry').value = 'proc_entry';       
        document.getElementById('trigger_view_proc').click(); 
      }
      function recur_reimb(id,action){
        if(action==0){
          document.getElementById('tmp_id').value = id;
          document.getElementById('entry').value = 'recur';
          document.getElementById('recur_reimb_setup').click(); 
        } else {
          document.getElementById('tmp_id').value = id;
          document.getElementById('entry').value = 'recur';
          document.getElementById('recur_reimb').click(); 
        }
      
      }
      function trigger_open_inv(id){
        var url = 'src/Procurement/procurement/backend/cat_3_inv_letter.php?p_id='+id;
        window.open(url,'Comparision Table','height=1000px,width=860px');
      }
      function trigger_open_summ(id){
        var url = 'src/Procurement/procurement/backend/ret_stat.php?p_id='+id;
        window.open(url,'Comparision Table','height=870px,width=1185px');  
      }
      function trigger_open_tender(id){
        var url = 'src/Procurement/procurement/backend/open_tender.php?p_id='+id;
        window.open(url,'Comparision Table','height=870px,width=1185px');  
      }
      function trigger_expand(id){
        var new_id = id.substring(9);
        var current = document.getElementById(new_id).style.display;
        var target = 'expand_'+new_id;
        if(current == 'none'){
            document.getElementById(new_id).style.display='';
            document.getElementById('icon_'+new_id).style.transform = "rotate(-180deg)";
        } else {
            document.getElementById(new_id).style.display='none';
            document.getElementById('icon_'+new_id).style.transform = "rotate(0deg)";
        }
      }
      function expand(id){
        var new_id = id.substring(7);
        var current = document.getElementById(new_id).style.display;
        if(current == 'none'){
            document.getElementById(new_id).style.display='';
            document.getElementById('icon_'+new_id).style.transform = "rotate(-180deg)";
        } else {
            document.getElementById(new_id).style.display='none';
            document.getElementById('icon_'+new_id).style.transform = "rotate(0deg)";
        }
      }
      function tender_meeting_setup(id){
        document.getElementById('tmp_id').value=id;
        document.getElementById('tender_meeting_setup').click();
      }
      function tender_meeting_mat(id){
        document.getElementById('tmp_id').value=id;
        document.getElementById('tender_meeting_mat').click();
      }
      function sign_code(id){
        document.getElementById('tmp_id').value=id;
        document.getElementById('sign_code').click();
      }
      function uploadspec(id){
        var url = 'src/Procurement/procurement/backend/uploadspec.php?p_id='+id;
        window.open(url,'Comparision Table','height=150px,width=400px');       
      }
      function delrecord(id){	
			var confirmmsg = 'Confirm deleting record ID : '+id+'?';	
			var st = document.getElementById('st_filter').value+'-08';
			var ed = document.getElementById('ed_filter').value+'-07';
			if (confirm(confirmmsg)){
				$.ajax({
					url:"src/Procurement/budget/backend/delete_record.php",
					method:"POST",
					data:{id:id,st:st,ed:ed},
					success:function(data){
						location.reload();
					}
				});
			}
      }
      function toggle(source) {
			  checkboxes = document.getElementsByName('check[]');
			  for(var i=0, n=checkboxes.length;i<n;i++) {
				checkboxes[i].checked = source.checked;
			  }
			}
				$( document ).ready(function() {
				$('#upload').click(function(){ 
				$('#csvfile').trigger('click'); });
				
					$('#csvfile').change(function() {
						 $('#upload_csv').submit();
						 return false;
					});
				
      });
      $(document).ready(function(){
			 
			 $(document).on("click","#approve_btn",function(){
			  
			  if(confirm("Confirm updating approve selected record(s)?"))
			  {
			   var id = [];
			   
			   $(':checkbox:checked').each(function(i){
				id[i] = $(this).val();
			   });
			   
			   if(id.length === 0) //tell you if the array is empty
			   {
				alert("Please Select atleast one checkbox");
			   }
			   else
			   {
            var st = document.getElementById('st_filter').value+'-08';
            var ed = document.getElementById('ed_filter').value+'-07';
            $.ajax({
            url:'src/Procurement/budget/backend/approve_checked.php',
            method:'POST',
            data:{selected_id:id,st:st,ed:ed},
            success:function()
            {
              location.reload();
            }
            
            });
			   }
			   
			  }
			  else
			  {
			   return false;
			  }
			 });
			 
      });

      
      $(document).on('change','#dept_select',function(){
        document.getElementById('previous_selected').value = $('#dept_select').find(":selected").text();
      });
      function guide(val){
        if(val==4){
          alert('Please Click Phase 5 to enter meeting');
        }
      }
      function trigger_cat_4_summary(id){
        var url = 'src/Procurement/procurement/backend/ret_stat_cat4.php?p_id='+id;
        window.open(url);
      }
      function trigger_cat_4_declar(id){
        var url = 'src/Procurement/procurement/backend/declaration_form.php?proc_id='+id;
        window.open(url);
      }
      function trigger_cat_4_combine(id){
        var url = 'src/Procurement/procurement/backend/combined_score_sheet.php?proc_id='+id;
        window.open(url);
      }
      function trigger_cat_4_ind(id){
        var url = 'src/Procurement/procurement/backend/score_sheet_ind.php?proc_id='+id;
        window.open(url);
      }
      function retender(id){
        document.getElementById('tmp_id').value=id;
        document.getElementById('retender').click();
      }
      function change_child_dp(id){
          var newid = '.child_'+id;
          var icon = 'icon_'+id;
          if($(newid).css('display')=='none'){                    
            $(newid).show(); 
            document.getElementById(icon).style.transform = "rotate(0deg)";
          } else {           
            $(newid).hide(); 
            document.getElementById(icon).style.transform = "rotate(-180deg)";  
          }
      }
      function tender_cat4(id){
        window.open('src/Procurement/procurement/backend/ret_stat_cat4.php?p_id='+id)
      }
      function delete_irg(id){
        document.getElementById('tmp_id').value = id;
        document.getElementById('del_irg').click();
      }
</script>
