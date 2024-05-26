<?php
Header("Access-Control-Allow-Origin: *");
Header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
// Paramètres de connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "28098507";
$dbname = "blog";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_GET['username'];
$password = $_GET['password'];

$stmt = $conn->prepare("SELECT id, username FROM users WHERE username = ? AND password = ?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode(["status" => "Login successful", "user_id" => $row['id'], "username" => $row['username']]);
} else {
    echo json_encode(["status" => "Login failed"]);
}

$stmt->close();
$conn->close();

?>
