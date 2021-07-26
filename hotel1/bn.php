<?php
echo '<script src="hotel3.js"></script>';
session_start();
include("conf.php");
$db="hotel";
$username=$_POST["nam"];
$cin=$_POST["cin"];
$cout=$_POST["cout"];
$troom=$_POST["troom"];
$noofad=$_POST["noofad"];
$noofc=$_POST["noofchild"];
$coup=$_POST["coup"];
$pn=$_POST["ph"];
$hb=$_POST["branch"];
$noofroom=$_POST["noofroom"];

$_SESSION["username"]=$username;
$_SESSION["cin"]=$cin;
$_SESSION["cout"]=$cout;
$_SESSION["troom"]=$troom;
$_SESSION["noofad"]=$noofad;
$_SESSION["noofc"]=$noofc;
$_SESSION["coup"]=$coup;
$_SESSION["phno"]=$pn;
$_SESSION["branch"]=$hb;
$_SESSION["noofroom"]=$noofroom;


$conn = mysqli_connect($server, $user, $pass, $db); 
  if (!$conn){ 
   echo "NO CONNECTION ";
  }
else {echo "<h1>SUCCESSFULLY CONNECTED<h1><br>";}

$sql3 = "INSERT INTO book (nam,checkin,checkout,typeofroom,noofad,noofchild,coupen,ph,hotelb,noofroom	)
VALUES ('$username', '$cin','$cout','$troom','$noofad','$noofc','$coup','$pn','$hb','$noofroom')";
if (mysqli_query($conn, $sql3)) {
  echo '<script>alert("booked successfully")</script>';
  echo '<script> window.history.go(-1)</script>'; 


} else {
    echo "ERROR: " . $sql3 . "<br>" . mysqli_error($conn);
    echo '<script> window.history.go(-1)</script>'; 
}
