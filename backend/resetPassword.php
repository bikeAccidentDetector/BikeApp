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


    $sql = "UPDATE users SET password = $password WHERE `email`='$email'";
    if(mysqli_query($conn, $sql)){



          $src="SELECT * FROM users WHERE `email`='$email'";
          $result=mysqli_query($conn,$src);

          if(mysqli_num_rows($result) > 0){

              $rec=mysqli_fetch_assoc($result);
              
              $response=array(
                "message"=>'Password changed',
                "email"=>$rec['email'],
                "token"=>$rec['token'],
                "verified"=>$rec['verified']
              );
              
            }


    
    }else{
      $response=array('message'=>'Try again');

    }


    header('Content-Type: application/json');
    echo json_encode($response);

}