<?php
echo '<script src="hotel3.js"></script>';
session_start();
include("conf.php");
$db="hotel";
$pasd=$_POST["psd"];
$nam=$_POST["nam"];
$no=$_POST['no'];
$cpasd=$_POST['conpass'];
$email=$_POST['email'];
$lname=$_POST['lname'];



$_SESSION['no']=$no;
$_SESSION["pasd"]=$pasd;
$_SESSION["nam"]=$nam;
$_SESSION["lname"]=$lname;
$_SESSION["email"]=$email;

if ($pasd == $cpasd) {

$conn = mysqli_connect($server, $user, $pass, $db); 
  if (!$conn){ 
   echo "NO CONNECTION ";
  }
else {echo "<h1>SUCCESSFULLY CONNECTED<h1><br>";}

$s1 = "SELECT * FROM ola WHERE `phoneno` = '$no' ";

$res1 = mysqli_query($conn,$s1);
$count2 = mysqli_num_rows($res1);

if($count2 == 0){
$sql3 = "INSERT INTO ola (nam,phoneno,pad,lname,email)
VALUES ('$nam','$no','$pasd','$lname','$email')";
if (mysqli_query($conn, $sql3)) {
    echo "<script>sub()</script>";
} else {
    echo "invalid";
}
}
else{
    echo "<script>nosub()</script>";

}
}
else{
    echo '<script>alert("confirm password is not maching")</script>';
    echo '<script> window.history.go(-1)</script>'; 

}
