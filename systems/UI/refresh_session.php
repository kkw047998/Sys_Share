<?php
session_start();
if(isset($_SESSION['login_user'])){
    $_SESSION['login_user'] = $_SESSION['login_user'];
}
?>