<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';


// echo 'all good';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
  // Extract the data.
    $data=json_decode($postdata);
    
    $email         = $data->email;
	  $firstNumber   = $data->firstNumber;
    $lastNumber    = $data->lastNumber;
    $hospitalName    = $data->hospitalName;
    $hospitalNumber    = $data->hospitalNumber;
    $addresss           = $data->addresss;




    $src="SELECT * FROM sop_config WHERE `email`='$email'";

    $result=mysqli_query($conn,$src);

    // check email is already register
   if(mysqli_num_rows($result) > 0){
           

         $sql = "UPDATE sop_config
         SET 
	       firstNumber       = '$firstNumber',
         lastNumber        = '$lastNumber',
         hospitalName      = '$hospitalName',
         hospitalNumber    = '$hospitalNumber',
         addresss           = '$addresss'
         WHERE email = '$email' ";
         
         if(mysqli_query($conn,$sql)or die(mysqli_error($conn))){
          $response=array("message"=>"Data Update successfully");

          }else{
              $response=array("message"=>"Sorry Data not update successfully");
          }
    

   } else{

            $sql="INSERT INTO sop_config 
            (`email`,`firstNumber`,`lastNumber`, `hospitalName`, `hospitalNumber`, `addresss`) 
            VALUES 
            ('$email','$firstNumber','$lastNumber','$hospitalName','$hospitalNumber','$addresss')";


            if(mysqli_query($conn,$sql)or die(mysqli_error($conn))){
                $response=array("message"=>"Data insert successfully");
            }else{
                $response=array("message"=>"Sorry Data not insert successfully");
            }


   }

    echo json_encode($response);
}