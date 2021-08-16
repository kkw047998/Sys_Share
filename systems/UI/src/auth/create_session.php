<?php
    if(session_id() == ''){
        session_start();
    }   
    $sname = $_POST['name'];
    $sid = $_POST['id'];
    $smail = $_POST['email'];
    if(isset($_SESSION['login_user'])){  
        include('../../session.php');        
        if($id==$sid){
            echo "session renew";
        } else {
            session_destroy();
        }
    } else {      
        $_SESSION['login_user'] = $sid.','.$sname.','.$smail;
        echo "Successfully Created Session";
    }  
?>