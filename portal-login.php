<?php
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    include("systems/UI/config.php");
    date_default_timezone_set('Asia/Hong_Kong'); 
    
?>
<!doctype html>
<link rel="icon" href="img/favicon.ico" type="image/x-icon">
<html lang="en">
    <head>
        <title>Portal</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <meta charset="utf-8" />      
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,600' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootswatch/3.0.3/cosmo/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" type="text/css" />      
        <link rel="stylesheet" href="css/style.css" type="text/css" />
        <link rel="stylesheet" href="css/custom.css" type="text/css" />
        <link rel="stylesheet" type="text/css" href="css/office365glyph.css">
        <link rel="stylesheet" href="css/portal.css" type="text/css" />
        <link rel="stylesheet" href="main.css" type="text/css" />
        <!-- Scripts are at the bottom of the page -->
    </head>  
    <!--<div class='black_overlay'></div>-->
    <body id='bd' class="vertical" onload="triggerOnLoad()">      
        <!-- BACKGROUND -->      
        <div class="background"></div>
        <!--
        <img src="img/2020.jpg" class="background" alt="" />-->
        <!-- /BACKGROUND -->

        <!-- LOGO -->
        <div class="header">
            <img src="img/color_full.svg" class="header-logo comp_icon" alt=""/>               
        </div>
        <!-- /LOGO -->

        <!-- MAIN CONTENT SECTION -->
        <section id="content">
        <div id="yel-bar">
            <div class="name-wrapper">
                <b></b>
            </div>
            <div class="portal-des flex" style='line-height:35px'>
                <b>Teacher Portal</b>
                <div class="function-icon">
                    <i class="fa fa-3x fa-key" onclick='redir_user()'></i> 
                    <i class="fa fa-3x fa-sign-out" onclick='signout()'></i>
                </div>
            </div>
        </div>
        <!-- SECTION -->
        <section id="tile-wrapper" class="clearfix section">
            <section id='systems' class="clearfix section">
                <div class="tile blue title-scaleup imagetile w2 h1 isotope-item">
                    <div class="caption blue">
                        <a class="link" href="https://bsc.schoolweb.hk/zh_tw/default/officeLogin" target="_blank">
                            <div class="title"><i class="fa fa-info-circle fa-2x"></i></div>
                            <div class="caption-text">
                                e-Attendance
                            </div>
                        </a>
                    </div>
                    <img src="img/schoolink.jpeg" style="width:100%" alt="" class="bgwidth">
                </div>
                <div class="tile red title-scaleup imagetile w2 h1 isotope-item">
                    <div class="caption red">
                        <a class="link" href="http://eclass.bshlmc.edu.hk" target="_blank">
                            <div class="title"><i class="fa fa-info-circle fa-2x"></i></div>
                            <div class="caption-text">
                                eClass
                            </div>
                        </a>
                    </div>
                    <img src="img/eclass.png" style="width:100%" alt="" class="bgwidth">
                </div>
                <!--
                <div class="tile green title-scaleup imagetile w2 h1 isotope-item">
                    <div class="caption green">
                        <a class="link" href="http://websams.bshlmc.edu.hk" target="_blank">
                            <div class="title"><i class="fa fa-info-circle fa-2x"></i></div>
                            <div class="caption-text">
                                WebSAMs
                            </div>
                        </a>
                    </div>
                    <img src="img/sams_logo.jpeg" style="width:100%" alt="" class="bgwidth">
                </div>-->
                <!-- Procurement requires any "member" as minimum to enter-->      
                <!-- /SECTION TILES -->
            <!-- /SECTION -->
        <!-- /MAIN CONTENT SECTION -->
        <script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script> <!-- jQuery Library -->
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js" type="text/javascript"></script> <!-- Bootstrap Library -->   	
		<script type="text/javascript" src="secrets.js"></script>
		<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@microsoft/microsoft-graph-client/lib/graph-js-sdk.js"></script>
		<script type="text/javascript" src="js/msal_2.3.0.min.js"></script>
        <script type="text/javascript" src="js/msal-auth-v2.js"></script>
    </body>
</html>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js"></script>

<!-- If you enabled Analytics in your project, add the Firebase SDK for Analytics -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js"></script>

<!-- Add Firebase products that you want to use -->
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-firestore.js"></script>

<script>
  async function triggerOnLoad(){
        document.getElementById('bd').style.opacity = 1;
        document.getElementById('bd').style.transition = '1s';
        //setTimeout(function() { checkUserGroup(); }, 2000);
    }
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAVQXoTtDNIfHi8RypWpQqYMWNEamLqOO4",
    authDomain: "bsc-fcm.firebaseapp.com",
    projectId: "bsc-fcm",
    storageBucket: "bsc-fcm.appspot.com",
    messagingSenderId: "103422806149",
    appId: "1:103422806149:web:9ef0b50e9faeae113141ec",
    measurementId: "G-XY32XTELY1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  /*
  const messaging = firebase.messaging();
  messaging.getToken({vapidKey: "BJiMw-1mBTQuUmApeS888jA5Cuq83sRfdfucY9X8mwY1cjA987ksvd10gGmNijdpj6EIOp3vddomoQ6R5KqpiCE"});
  */
</script>
<script src="fcm.js"></script>
<style>
    .o365-calendar-container {display: table; empty-cells: show; border-collapse: collapse; width: 100%; height: calc(100% - 30px);}
    #o365-calendar-wrapper {display: table-row; height: 100%; overflow: hidden }
    #o365-calendar-wrapper iframe {width: 100%; height: 100%; border: none; margin: 0; padding: 0; display: block;}
    html {
        /*background-image:url(img/desktop_bg.jpeg);*/
        background-size:cover;
        background-repeat:no-repeat;
        overflow-y:auto;
        overflow-x:hidden;
    }
    .display_box, .tile {
        -webkit-box-shadow: 0 2px 8px -2px rgba(128,128,128,0.6);
        box-shadow: 0 2px 8px -2px rgba(128,128,128,0.6);
    }
    img.background {
        border-top:5px solid #FFCB05;
        object-fit: cover;
        width:100%;
        height:100%;
        padding-bottom:25px;
        background-color:#FFFFFF;
    }
    .bar {
        background-color:#FFCB05;
    }
    .dp_title {
        color:#83503b;
    }
    #timetable .timetable_wrapper > * > * > * {
        color:#83503b;
    }
    .dpname {
        pointer-events:none;
        color:#83503b;
    }
    #calendar_content {
        width:47.5%;
        margin-right:2.5%;
    }
    #custom_content {
        width:47.5%;
        margin-left:4.5%;
    }
    #yel-bar {
        display:flex;
        height:34px;
        width:100%;
        top:0;
        left:0;
        right:0;
        position:fixed;
        background-color:#FFCB05;
        z-index:99999;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        box-shadow:0 4px 2px -2px rgb(0 0 0 / 10%);
    }
    .function-icon {
        color:#FFFFFF;
        margin-left:auto;
        padding-right:1rem;
        padding-top:4px;
        padding-bottom:4px;
        font-size:0.55rem;
    }
    .function-icon > i {
        cursor:pointer;
        margin-left:0.75rem;
        opacity:0.65;
        transition:0.5s;
    }
    .function-icon > i:hover {
        opacity:1
    }
    .name-wrapper {
        font-size:1rem;
        margin-top:auto;
        margin-bottom:auto;
        margin-left:5%;
        color:#FFFFFF;
    }
    .name-wrapper > b, .portal-des > b {
        font-weight:bold;
    }
    .portal-des {
        font-size:1rem;
        margin-right:5%;
        margin-left:auto;
        margin-top:auto;
        margin-bottom:auto;
        color:#FFFFFF;
    }
    .background {
        position:fixed;
        top:0;
        left:0;
        right:0;
        bottom:0;
        border:none!important;
        background-size:auto 100%!important;
        background-position:center;
        padding:0;
        background-image:url(img/2020.png);
    }
    .header-logo{
        height:101px;
        position:fixed;
        top:50px;
        left:5%;
    }
    #content {
        overflow:hidden!important;
    }
    #tile-wrapper {
        height: calc(100vh - 260px);
        top: 150px;
        bottom:110px!important;
        overflow-y:scroll!important;
        padding-top: 0!important;
        position: absolute;
        overflow-y: auto;
        margin-top: 0!important;
        margin-left:auto;
        margin-right:auto;
    }
    #systems {
        margin-top:0!important;
    }
    .vertical .section {
        width:86%!important;
        margin-left:7%!important;
        margin-right:7%!important;
    }
    /* width */
    ::-webkit-scrollbar {
        width: 0px!important;
    }
    @media (min-width:768px) {
        #systems {
            /*margin-top:450px!important;*/
        }
    }
</style>
