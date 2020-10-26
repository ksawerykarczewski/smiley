<?php
session_start();

// For testing via postman, delete this line in production
// $_SESSION['iUserId'] = 1;

require_once( __DIR__.'/../private/mariadb.php' );

try{

  $answear1 = $_POST['answear1'];
//   $answear2 = $_POST['answear2'] ? "0";
  $answear2 = ($_POST['answear2'] ? $_POST['answear2'] : '0');
//   $answear3 = $_POST['answear3'];

  // INSERT INTO `tweets` (`iId`, `iUserFk`, `sTweet`, `bActive`, `dCreated`) VALUES (NULL, '1', 'Hi', '1', current_timestamp());
  $q = $db->prepare('INSERT INTO answears 
  VALUES (:userIdFk, :userNameFk, :answear1, :answear2, :answear3)');
  $q->bindValue(':userIdFk', $_SESSION['id'] );
  $q->bindValue(':userNameFk', $_SESSION['name'] );
  $q->bindValue(':answear1', $answear1 );
  $q->bindValue(':answear2', $answear2 );
  $q->bindValue(':answear3', 2 );

  $q->execute();
  echo '{"message" : "answears created" }';
}catch(Exception $ex){
  echo $ex;
  sendError(500, 'system under maintainance', __LINE__);
}


// #############################################
function sendError($iResponseCode, $sMessage, $iLine){
  http_response_code($iResponseCode);
  header('Content-Type: application/json');
  echo '{"message":"'.$sMessage.'", "error":'.$iLine.'}';
  exit();
}



