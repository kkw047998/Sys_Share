<?php


	$cred = explode('\\',$_SERVER['REMOTE_USER']);
	if (count($cred) == 1) array_unshift($cred, "(no domain info - perhaps SSPIOmitDomain 		is On)");
	list($domain, $user) = $cred;	
 //exec("wmic /node:$_SERVER[REMOTE_ADDR] COMPUTERSYSTEM Get UserName", $local_user);
 //$local_username = 'test';
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
	$c = 0;
//string domainPath = "LDAP://OU=2014,OU=Secondary Students,DC=munsang,DC=edu,DC=hk";
		$searchield = "OU=Secondary,OU=Non-Teaching Staff,DC=munsang,DC=edu,DC=hk";
        $filter = '(sAMAccountName=*)';
		$attributes = array("name", "mail", "samaccountname","department");
        $result = ldap_search($ldap,$searchield,$filter,$attributes) or exit("Failed");
	    $info = ldap_get_entries($ldap, $result);
	if ($bind and $info[0]!=""){	
	while($info[$c]!=""){			
        //ldap_sort($ldap,$result,"sn");
		$output_name=$info[$c][$ret_name][0];
		$output_id=$info[$c][$ret_samaccountname][0];
		$output_mail = $info[$c][$ret_mail][0];
		print"<pre>";
		print"</br>";
		print_r($output_name);
		print"</br>";
		print_r($output_id);
		print"</pre>";
		@ldap_close($ldap);
		$c = $c+1;
		$sql="
		BEGIN
		   IF NOT EXISTS (SELECT * FROM userlist 
						   WHERE username = '$output_id'
						   AND name = '$output_name'
						   AND Mail = '$output_mail')
		   BEGIN
			   INSERT INTO EmailsRecebidos (username,name,Mail)
			   VALUES ('$output_id','$output_name','$output_mail')
		   END
		END
		";
mysqli_query($db,$sql);	
	
	
	}
		//$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;      
        //header("location: index.php");
 }else {	
			//print_r("error");
			//print_r($local_username);
			//echo $local_username;
			//$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;      
         	header("location: login.php");
			;
?>    

<?php } ?> 
