<?php

session_start();
require_once( __DIR__.'/../private/mariadb.php' );
try {

    $answear1 = isset($_POST['answear1']) ? $_POST['answear1'] : 0;
    $answear2 = isset($_POST['answear2']) ? $_POST['answear2'] : 0;
    $answear3 = isset($_POST['answear3']) ? $_POST['answear3'] : 0;

    $query = $db->prepare('UPDATE answears SET answear1 = :answear1, answear2 = :answear2, answear3 = :answear3 WHERE :userIdFk = userIdFk');
    $query->bindValue(':userIdFk', $_SESSION['id']);
    $query->bindValue(':answear1', $answear1);
    $query->bindValue(':answear2', $answear2);
    $query->bindValue(':answear3', $answear3);

    $query->execute();

    //TODO - SESSION
    $_SESSION['answear1'] = $_POST['answear1'];
    // $_SESSION['answear2'] = $_POST['answear2'];
    // $_SESSION['answear3'] = $_POST['answear3'];

    header('Content-Type: application/json');
    http_response_code(200);
    // echo '{"message" : "user created", "key":"'.$key.'" }';

} catch (Exception $ex) {
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}

// working 
// session_start();
// require_once( __DIR__.'/../private/mariadb.php' );

// try{

//   $answear1 = $_POST['answear1'];
//   $answear2 = ($_POST['answear2'] ? $_POST['answear2'] : '0');
//   $answear3 = ($_POST['answear3'] ? $_POST['answear3'] : '0');

//   $q = $db->prepare('INSERT INTO answears 
//   VALUES (:userIdFk, :userNameFk, :answear1, :answear2, :answear3)');

//   $q->bindValue(':userIdFk', $_SESSION['id'] );
//   $q->bindValue(':userNameFk', $_SESSION['name'] );
//   $q->bindValue(':answear1', $answear1 );
//   $q->bindValue(':answear2', $answear2 );
//   $q->bindValue(':answear3', $answear3 );

//   $q->execute();
//   echo '{"message" : "answears created" }';
// }catch(Exception $ex){
//   echo $ex;
//   sendError(500, 'system under maintainance', __LINE__);
// }


// function sendError($iResponseCode, $sMessage, $iLine){
//   http_response_code($iResponseCode);
//   header('Content-Type: application/json');
//   echo '{"message":"'.$sMessage.'", "error":'.$iLine.'}';
//   exit();
// }



