<?php
if(!isset($db)){
   include('config.php');
};
   if(session_id() == ''){
      session_start();
   }   
   if(isset($_SESSION['login_user'])){
      //echo $_SESSION['login_user'];
      $user_check = $_SESSION['login_user'];	
      $sessionID = explode('@',$user_check);  
      $id = $sessionID[0];
      $name = $_SESSION['login_name'];
      $mail = $_SESSION['login_user'];

      $sql = "SELECT Identity,portal_level,proc_level FROM userlist WHERE username='$id'";
      $result = $db->query($sql);
      if(mysqli_num_rows($result)>0){
         while($row = mysqli_fetch_array($result)){
            $level = $row['proc_level'];
            $user_identity = $row['Identity'];
         }
      }
   }
   /*
   if(!isset($_SESSION['login_user'])){
      header("location:sso.php");
      die();
   }   */
?>