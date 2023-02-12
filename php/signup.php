<?php
require_once 'config.php';

$name = trim($_POST['name']);
$pass = trim($_POST['pass']);
$pass2 = trim($_POST['pass2']);
$email = trim($_POST['email']);

if ($name =='' OR $pass =='' OR $pass2 =='' OR $email ==''){
    echo 2;
    die;
}

if($pass !== $pass2){
    echo 3;
    die;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO users (name, email, password) VALUES ('".$name."', '".$email."', '".$pass."')";

if ($conn->query($sql) === TRUE) {
    echo 1;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>