<?php
$connection = new mysqli("localhost","root","naspas");
if($connection->connect_error){
    die("connection failed");
} 
echo "connected";
?>