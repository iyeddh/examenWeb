<?php
Header("Access-Control-Allow-Origin: *");
Header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $host = "localhost";
  $username = "root";
  $password = "28098507";
  $database = "blog";
  $titre = $_POST["titre"];
  $description = $_POST["description"];
  $image = $_POST["selectedimage"];
  $category = $_POST["category"];
  $id = $_POST["id"];

  $mysqli = new mysqli($host, $username, $password, $database);

  if ($mysqli->connect_error) {
      die('Error: ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
  }

  $statement = $mysqli->prepare("INSERT INTO poste (titre, image, description, category, id) VALUES (?, ?, ?, ?, ?)");

  $statement->bind_param('sssss', $titre, $image, $description, $category, $id);

  if ($statement->execute()) {
      print "poste added";
  } else {
      print $mysqli->error;
  }
}
?>