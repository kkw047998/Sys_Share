<?php
if(isset($_SERVER['REMOTE_USER'])){
session_start();
$cred = explode('\\',$_SERVER['REMOTE_USER']);
if (count($cred) == 1) array_unshift($cred, "(no domain info - perhaps SSPIOmitDomain is On)");
list($domain, $user) = $cred;	
if(isset($_GET['utoken'])){
	include('../checkToken.php');	 
	$user = $id;
}
$local_username = $user;
$msg="";
$ret_mail ="mail";
$ret_name ="name";
$ret_samaccountname="samaccountname";
// connection
    $adServer = "LDAP://munsang.edu.hk";	
    $ldap = ldap_connect($adServer);
    $username = 'auservic';
	$loginID = $username."@munsang.edu.hk";
    $password = 'auservic';

    $ldaprdn = 'mydomain' . "\\" . $loginID;

    ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

    $bind = @ldap_bind($ldap, $loginID, $password); //auth
	
//string domainPath = "LDAP://OU=2014,OU=Secondary Students,DC=munsang,DC=edu,DC=hk";
		$searchield = "DC=munsang,DC=edu,DC=hk";
        $filter = '(sAMAccountName='.$local_username.')';
		$attributes = array("name", "mail", "samaccountname","department");
        $result = ldap_search($ldap,$searchield,$filter,$attributes) or exit("Failed");
		$info = ldap_get_entries($ldap, $result);
		//echo $info[0];
	if ($bind and $info[0]!=""){				
        //ldap_sort($ldap,$result,"sn");
       	$output_mail=$info[0][$ret_mail][0];
		$output_name=$info[0][$ret_name][0];
		$output_id=$info[0][$ret_samaccountname][0];
		//print"<pre>";
		//print_r($output_mail);
		//print"</br>";
		//print_r($output_name);
		//print"</br>";
		//print_r($output_id);
		//print"</pre>";
		@ldap_close($ldap);
		$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;      
        header("location: ../index.php");
 } else {	
			//print_r("error");
			//print_r($local_username);
			//echo $local_username;
			//$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;      
			//header("location: ../index.php#/auth/login");
 }
} else {
	//header("location: ../index.php#/auth/login");
}
?>    

