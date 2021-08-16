<?php

   define('DB_SERVER', '127.0.0.1:3306');
   define('DB_USERNAME', 'root');
   define('DB_PASSWORD', '');
   define('DB_DATABASE', 'systems');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
   if (mysqli_connect_errno($db)) {
      die('Failed to connect to MySQL: '.mysqli_connect_error());
   }

/*
    //below  will give the whole connectionstring in a single string
    $conn = getenv("MYSQLCONNSTR_localdb"); 

    //Let's split it and decorate it in an array
    $conarr2 = explode(";",$conn); 
    $conarr = array();
    foreach($conarr2 as $key=>$value){
        $k = substr($value,0,strpos($value,'='));
        $conarr[$k] = substr($value,strpos($value,'=')+1);
    }
    // $conarr is an array of values of connection string
    //print_r($conarr); 
*/
/*
   $db = mysqli_init();
   //mysqli_ssl_set($db,NULL,NULL, $_SERVER['DOCUMENT_ROOT']."/ssl/BaltimoreCyberTrustRoot.crt.pem", NULL, NULL) ; 
   mysqli_real_connect($db, 'localhost', 'azure', '6#vWHD_$', 'systems', 50873);
   if (mysqli_connect_errno($db)) {
      die('Failed to connect to MySQL: '.mysqli_connect_error());
   }
   /*
/*
   define('DB_SERVER', 'school-partner-db.mysql.database.azure.com:3306');
   define('DB_USERNAME', 'myadmin@school-partner-db');
   define('DB_PASSWORD', 'P@ssw0rd');
   define('DB_DATABASE', 'systems');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);
*/
/*
   $db = mysqli_init();
   mysqli_ssl_set($db,NULL,NULL, $_SERVER['DOCUMENT_ROOT']."/ssl/BaltimoreCyberTrustRoot.crt.pem", NULL, NULL) ; 
   mysqli_real_connect($db, 'school-partner-db.mysql.database.azure.com', 'myadmin@school-partner-db', 'P@ssw0rd', 'systems', 3306, MYSQLI_CLIENT_SSL);
   if (mysqli_connect_errno($db)) {
      die('Failed to connect to MySQL: '.mysqli_connect_error());
   }
*/
?>