<?php
session_start();
/**
 * Created by Joe of ExchangeCore.com
 */
 $msg="";
 $ret_mail ="mail";
 $ret_name ="name";
 $ret_samaccountname="samaccountname";

if(isset($_POST['username']) && isset($_POST['password'])){

    $adServer = "LDAP://munsang.edu.hk";	
    $ldap = ldap_connect($adServer);
    $username = $_POST['username'];
	$loginID = $username."@munsang.edu.hk";
    $password = $_POST['password'];

    $ldaprdn = 'mydomain' . "\\" . $loginID;

    ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
    ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

    $bind = @ldap_bind($ldap, $loginID, $password);
//string domainPath = "LDAP://OU=2014,OU=Secondary Students,DC=munsang,DC=edu,DC=hk";
	$searchield = "DC=munsang,DC=edu,DC=hk";
    if ($bind) {
        $filter = '(sAMAccountName='.$username.')';
		$attributes = array("name", "mail", "samaccountname");
        $result = ldap_search($ldap,$searchield,$filter,$attributes) or "Failed";
		//ldap_sort($ldap,$result,"sn");
        $info = ldap_get_entries($ldap, $result);
		if($info[0]==""){
			print_r("error");
			};
		if(isset($info[0][$ret_mail])){
			$output_mail=$info[0][$ret_mail][0];
		} else {
			$output_mail = '';
		}
       	
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
         $msg = "OK";
		echo json_encode($msg);
    } else {
        $msg = "Invalid email address / password";
		echo json_encode($msg);
    }
}
?>  