<?php
Header("Access-Control-Allow-Origin: *");
Header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $host = "localhost";
    $username = "root";
    $password = "28098507";
    $database = "blog";
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["mail"];
    $password_hash = $_POST["password"];
    $username = $_POST["username"];

    if (!isset($firstname) || !isset($lastname) || !isset($email) || !isset($password_hash) || !isset($username)) {
        die("Please enter all required fields");
    }

    $mysqli = new mysqli($host, $username, $password, $database);

    if ($mysqli->connect_error) {
        die('Error: ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
    }

    $statement = $mysqli->prepare("INSERT INTO users (firstname, lastname, mail, password_hash, username) VALUES (?, ?, ?, ?, ?)");

    $statement->bind_param('sssss', $firstname, $lastname, $email, $password_hash, $username);

    if ($statement->execute()) {
        print "Hello " . $firstname . ", your email address is ". $email;
    } else {
        print $mysqli->error;
    }
}
?>
