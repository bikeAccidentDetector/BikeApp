<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';

$email=$_GET['email'];
$token=$_GET['token'];


$src="SELECT * FROM users WHERE `email`='$email' AND `token`='$token'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

    $rec=mysqli_fetch_assoc($result);

    $response=array(
        "name"=>$rec["firstName"]." ".$rec["lastName"],
            );

            echo json_encode($response);
}
	