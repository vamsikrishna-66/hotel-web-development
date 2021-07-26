<?php
     echo ' <script src="hotel3.js"></script>';
     session_start();
     include('conf.php');
     $db = "hotel";
     $conn = mysqli_connect($server,$user,$pass,$db);
     if(!$conn){
         echo "no connect";
     }
     $lname = $_POST["nam"];
     $lpassword = $_POST["pso"];
     $_SESSION["lname"] = $lname;
     $_SESSION["password"] = $lpassword;

     $s2 = "SELECT * FROM ola WHERE `phoneno` = '$lname' && `pad` = '$lpassword'";

     $res2 = mysqli_query($conn,$s2);
     $count = mysqli_num_rows($res2);
     if($count == 1){
        echo '<script>see()</script>';
      
     }
     else{
        echo "<script> nota() </script>";
       
     }
?>


