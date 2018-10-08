<?php

require "db.php";
  if (isset($_SERVER['HTTP_ORIGIN'])) {
      header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
      header('Access-Control-Allow-Credentials: true');
      header('Access-Control-Max-Age: 86400');    // cache for 1 day
  }

  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
          header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
      if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
          header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
      exit(0);
  }

  $postdata = file_get_contents("php://input");
  $type = $_GET["type"];

  switch ($type) {
    case 'login':
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $username = $request->username;
          $password = md5($request->password);

          $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";

          $results = mysqli_query($connect_db, $query) or die(mysqli_error($connect_db));

          if (mysqli_num_rows($results) == 1) {

            echo json_encode(mysqli_fetch_assoc($results));
          }else {
            echo '{"error":{"text":"Wrong username or password!"}}';
          }
      }
      else {
          echo "Wrong username/password combination!";
      }
      break;
      
    default:
      // code...
      break;
  }


?>
