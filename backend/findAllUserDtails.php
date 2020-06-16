<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';

	$email   = $email=$_GET['email'];

$src="SELECT * FROM `sop_config`  WHERE `email`='$email'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

		$rec=mysqli_fetch_assoc($result);
    
		$response=array(
			"firstNumber"=>$rec['firstNumber'],
			"lastNumber"=>$rec['lastNumber'],
			"hospitalName"=>$rec['hospitalName'],
			"hospitalNumber"=>$rec['hospitalNumber'],
			"addresss"=>$rec['addresss'],
		);
		 header('Content-Type: application/json');
		 echo json_encode($response);
 
}else{
    
	$response=array('message'=>'Please Update Your Information!');
	 header('Content-Type: application/json');
	echo json_encode($response);
}


