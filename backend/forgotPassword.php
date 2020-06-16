<?php

include 'phpFile/crossAccess.php';
include 'phpFile/database.php';

$email=$_GET['email'];
$verifyCode = str_pad(mt_rand(0, 999999), 6, '0', STR_PAD_LEFT);

$src="SELECT * FROM users WHERE `email`='$email'";

$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){

    $rec=mysqli_fetch_assoc($result);

    

            $sql = "UPDATE users SET verifyCode = $verifyCode WHERE `email`='$email'";

            if (mysqli_query($conn, $sql)) {
                $response=array(
                    "message"=>"Please check your email for 6 digit code.",
                    "status"=>true
                        );

                        
//  email 6 digit code//////////////////////////////////////////////////////////////////////////////////////////////////////

$serToken="SELECT token FROM users WHERE `email`='$email'";
$result=mysqli_query($conn,$src);

if(mysqli_num_rows($result) > 0){
    $rec=mysqli_fetch_assoc($result);


        $to = $email;
        $subject = "Activetion Email";

    $message = "
    <!DOCTYPE html>
<html>

<head>
<title>Joy dey</title>
</head>

<body style='margin: 0; padding: 0;'>
<table border='0' cellpadding='0' cellspacing='0' width='100%'>
    <tr>
        <td style='padding: 10px 0 30px 0;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' width='600'
                style='border: 1px solid #cccccc; border-collapse: collapse;'>
                <tr>
                    <td align='center' bgcolor='#70bbd9'
                        style='padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;'>
                        <img src='http://103.127.146.165/wiki/images/4/4d/Logo1.png' alt='Creating Email Magic'
                            width='300' height='230' style='display: block;' />
                    </td>
                </tr>
                <tr>
                    <td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>
                        <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                            <tr>
                                <td
                                    style='color:black; font-family: Arial, sans-serif; font-size: 24px; text-align: center;'>
                                    <b>Your Code:</b>
                                </td>
                            </tr>
                            <tr>
                                <td style='padding: 30px 0 30px 0;
                                     color: #153643; 
                                     font-family: Arial, sans-serif;
                                      font-size: 34px;
                                       line-height: 20px; 
                                       text-align: center;
                                       border-radius: 15px 50px 30px;
                                       background: #73AD21;'>
                                       $rec[verifyCode]
                                       </td>
                                       </tr>
                                       
                                       </table>
                                       </td>
                                       </tr>
                                       <tr>
                                           <td bgcolor='#ee4c50' style='padding: 30px 30px 30px 30px;'>
                                               <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                                                   <tr>
                                                       <td style='color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;' width='75%'>
                                                           &reg; <a href='https://joydey.cf/' style='color: #ffffff;'>www.joydey.cf</a>
                                                           2020<br />
                                                       </td>
                                                       <td align='right' width='25%'>
                                                           <table border='0' cellpadding='0' cellspacing='0'>
                                                               <tr>
                                                                   <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                                                                       <a href='http://www.twitter.com/joydey1800' style='color: #ffffff;'>
                                                                           <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif' alt='Twitter'
                                                                               width='38' height='38' style='display: block;' border='0' />
                                                                       </a>
                                                                   </td>
                                                                   <td style='font-size: 0; line-height: 0;' width='20'>&nbsp;</td>
                                                                   <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                                                                       <a href='http://www.Facebook.com/jd1800' style='color: #ffffff;'>
                                                                           <img src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif' alt='Facebook'
                                                                               width='38' height='38' style='display: block;' border='0' />
                                                                       </a>
                                                                   </td>
                                                               </tr>
                                                           </table>
                                                       </td>
                                                   </tr>
                                               </table>
                                           </td>
                                       </tr>
                                       </table>
                                       </td>
                                       </tr>
                                       </table>
                                       </body>
                                       
                                       </html>
    ";

   

        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

        // More headers
        $headers .= 'From: <Joydey1800>' . "\r\n";

        mail($to,$subject,$message,$headers);
}
//  email 6 digit code//////////////////////////////////////////////////////////////////////////////////////////////////////




            } else {
                $response=array('message'=>'Try Again',
                "status"=>false
            );
            }
            

}  else{

    $response=array(
        "message"=>"There is no account on this email.",
        "status"=>false
            );
}

        echo json_encode($response);
	