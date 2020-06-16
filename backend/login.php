<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';

// echo 'all good';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
    $data=json_decode($postdata);
    
	$email   = $data->email;
	$password    = $data->password;




$src="SELECT * FROM users WHERE `email`='$email' AND `password`='$password'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

		$rec=mysqli_fetch_assoc($result);
    
		$response=array(
			"email"=>$rec['email'],
			"token"=>$rec['token'],
			"verified"=>$rec['verified']
		);
		 header('Content-Type: application/json');
		 echo json_encode($response);

		 //if verify code genaret then after login it will be 0 again
		 if($rec['verifyCode']!=0){
            $sql = "UPDATE users SET verifyCode = 0 WHERE `email`='$email'";
			mysqli_query($conn, $sql);
		 }
 
}else{
    
	$response=array('message'=>'Invalid email or pass');
	 header('Content-Type: application/json');
	echo json_encode($response);
}


}

