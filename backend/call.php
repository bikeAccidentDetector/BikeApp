<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';

	$email   = $email=$_GET['email'];

$src="SELECT * FROM `sop_config`  WHERE `email`='$email'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

		$rec=mysqli_fetch_assoc($result);
    
		$response=array(
            "message" =>"Accident Occurred 50B BENI BANERJEE AVENUE, KOLKATA - 700031",
            "calling" => "calling : ",
			"firstNumber"=>$rec['firstNumber'],
			"lastNumber"=>$rec['lastNumber'],
		);
		 header('Content-Type: application/json');
		 echo json_encode($response);
 
}


