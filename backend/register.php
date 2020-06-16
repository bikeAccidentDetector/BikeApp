<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';


// echo 'all good';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
    $data=json_decode($postdata);
    
	$firstName   = $data->firstName;
	$lastName    = $data->lastName;
    $email       = $data->email;
    $password    = $data->password;
    $verified    = 0;
    $token       = uniqid();
    $verifyCode = str_pad(mt_rand(0, 999999), 6, '0', STR_PAD_LEFT);
    
    $src="SELECT * FROM users WHERE `email`='$email'";

    $result=mysqli_query($conn,$src);

    // check email is already register
   if(mysqli_num_rows($result) > 0){

          $response=array("message"=>"Email is already registered. Please login.");

   } else{

            $sql="INSERT INTO users 
            (`firstName`,`lastName`,`email`, `password`, `verified`, `token`, `verifyCode`, `createTime`) 
            VALUES 
            ('$firstName','$lastName','$email','$password','$verified','$token','$verifyCode',NOW())";


            if(mysqli_query($conn,$sql)or die(mysqli_error($conn))){
                $response=array("message"=>"Data insert successfully");


            }else{
                $response=array("message"=>"Sorry Data not insert successfully");
            }


   }

    echo json_encode($response);


    
//  email 6 digit code//////////////////////////////////////////////////////////////////////////////////////////////////////

$serToken="SELECT token FROM users WHERE `email`='$email'";
$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){
    $rec=mysqli_fetch_assoc($result);


        $to = $email;
        $subject = "Activetion Email";

    $message =  $rec['verifyCode'];

   

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <Joydey1800>' . "\r\n";

        mail($to,$subject,$message,$headers);
}
// //  email 6 digit code//////////////////////////////////////////////////////////////////////////////////////////////////////
    



}
?>