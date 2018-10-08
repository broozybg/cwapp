<?php

$dbhost = "localhost";
$dbname = "db_name";
$dbuser = "root";
$dbpass = "";

$connect_db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("MySQL Error: " . mysqli_error());

?>
