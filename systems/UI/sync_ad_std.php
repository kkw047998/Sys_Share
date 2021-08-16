<?php
function getUserAccountControlAttributes($inputCode)
{
$userAccountControlFlags = array(16777216 => "TRUSTED_TO_AUTH_FOR_DELEGATION",
	8388608 => "PASSWORD_EXPIRED",
	4194304 => "DONT_REQ_PREAUTH",
	2097152 => "USE_DES_KEY_ONLY",
	1048576 => "NOT_DELEGATED",
	524288 => "TRUSTED_FOR_DELEGATION",
	262144 => "SMARTCARD_REQUIRED",
	131072 => "MNS_LOGON_ACCOUNT",
	65536 => "DONT_EXPIRE_PASSWORD",
	8192 => "SERVER_TRUST_ACCOUNT",
	4096 => "WORKSTATION_TRUST_ACCOUNT",
	2048 => "INTERDOMAIN_TRUST_ACCOUNT",
	512 => "NORMAL_ACCOUNT",
	256 => "TEMP_DUPLICATE_ACCOUNT",
	128 => "ENCRYPTED_TEXT_PWD_ALLOWED",
	64 => "PASSWD_CANT_CHANGE",
	32 => "PASSWD_NOTREQD",
	16 => "LOCKOUT",
	8 => "HOMEDIR_REQUIRED",
	2 => "ACCOUNTDISABLE",
	1 => "SCRIPT");
$attributes = NULL;
while($inputCode > 0) {
    foreach($userAccountControlFlags as $flag => $flagName) {
        $temp = $inputCode-$flag;
        if($temp>0) {
            $attributes[$userAccountControlFlags[$flag]] = $flag;
            $inputCode = $temp;
        }
        if($temp==0) {
            if(isset($userAccountControlFlags[$inputCode])) {
                $attributes[$userAccountControlFlags[$inputCode]] = $inputCode;
            }
            $inputCode = $temp;
        }
    }
}
return $attributes;
}

include('config.php');

//$cred = explode('\\',$_SERVER['REMOTE_USER']);
//if (count($cred) == 1) array_unshift($cred, "(no domain info - perhaps SSPIOmitDomain is On)");
//list($domain, $user) = $cred;	
 //exec("wmic /node:$_SERVER[REMOTE_ADDR] COMPUTERSYSTEM Get UserName", $local_user);
 //$local_username = 'test';
 //$local_username = $user;
 $msg="";
 $ret_mail ="mail";
 $ret_name ="name";
 $ret_samaccountname="sAMAccountName";
 $ret_class="msc-class";
 $ret_classnumber="msc-classnumber";
 $ac_status = "useraccountcontrol";
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
		$searchield = "OU=Secondary Students,DC=munsang,DC=edu,DC=hk";
        $filter = '(sAMAccountName=*)';
		$attributes = array("name", "mail", "sAMAccountName","mSC-Class","mSC-ClassNumber","userAccountControl");
        $result = ldap_search($ldap,$searchield,$filter,$attributes) or exit("Failed");
	    $info = ldap_get_entries($ldap, $result);
	if ($bind and $info[0]!=""){	
	while($info[$c]!=""){			
		$userAccountControlAttributes = getUserAccountControlAttributes($info[$c]["useraccountcontrol"][0]);
        //ldap_sort($ldap,$result,"sn");
		$output_name=$info[$c][$ret_name][0];
		$output_id=$info[$c][$ret_samaccountname][0];
        $output_mail = $info[$c][$ret_mail][0];
        $output_class = $info[$c][$ret_class][0];
        $output_class_number = $info[$c][$ret_classnumber][0];
		$account_stat_array = $userAccountControlAttributes;
		if(isset($account_stat_array['ACCOUNTDISABLE'])){
			$account_stat = 'Disable';
		} else {
			$account_stat = 'Enable';
        }
        /*
		print"<pre>";
		print"</br>";
		print_r($output_name);
		print"</br>";
		print_r($output_id);
		print"</br>";
		print_r($output_mail);
		print"</pre>";
		print_r($account_stat);
        print"</pre>";
        */
		@ldap_close($ldap);
		$c = $c+1;
		$sql_check = "SELECT * FROM userlist WHERE username = '$output_id' AND name = '$output_name' AND Mail = '$output_mail'";
		$result = $db->query($sql_check);
		$rowcheck = mysqli_num_rows($result);
		if($rowcheck==0){
		$sql="
		INSERT INTO std_list(username,name,mail,class,class_num,system_stat) 
		VALUES ('$output_id','$output_name','$output_mail','$output_class','$output_class_number','$account_stat')
		";
		$db->query($sql);
		} else {
			$sql="
			UPDATE userlist SET system_stat='$account_stat',class='$output_class',class_num='$output_class_number' WHERE username = '$output_id'";
			$db->query($sql);
		}
	}
		//$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;      
        //header("location: index.php");
 
 echo "<script>window.close();</script>";
 }else {	
			//print_r("error");
			//print_r($local_username);
			//echo $local_username;
			//$_SESSION['login_user'] = $output_id.','.$output_name.','.$output_mail;              	
			;
?>    

<?php }
 ?>
<script>window.close();</script>