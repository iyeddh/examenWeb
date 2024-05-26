<?php
Header("Access-Control-Allow-Origin: *");
Header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
Header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $id = $_POST["id"];

  $mysqli = new mysqli($host, $username, $password, $database);

  if ($mysqli->connect_error) {
      die('Error: ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
  }

  $statement = $mysqli->prepare("delete from poste where id=?");

  $statement->bind_param('s', $id);

  if ($statement->execute()) {
      print "poste deleted";
  } else {
      print $mysqli->error;
  }
}
?>