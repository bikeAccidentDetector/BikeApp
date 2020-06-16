<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';



$email=$_GET['email'];
$verifyCode=$_GET['verifyCode'];


$src="SELECT * FROM users WHERE `email`='$email' AND `verifyCode`='$verifyCode'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

    $rec=mysqli_fetch_assoc($result);

        
    $sql = "UPDATE users SET verified=1, verifyCode= 0 WHERE `email`='$email'";

    if (mysqli_query($conn, $sql)) {
        $response=array(
            "message"=>"Your account is verifide",
            "email"=>$rec['email'],
            "status"=>true
                );
    } else {
        $response=array('message'=>'Try Again',
        "status"=>false
    );
    }

}else{
    $response=array('message'=>'Your email and verify Code and dose not match',
    "status"=>false
);
}
    
	echo json_encode($response);

