<?php

session_start();
require_once( __DIR__.'/../private/mariadb.php' );
try {

    $answear1 = isset($_SESSION['answear1']) ? $_SESSION['answear1'] : 0;
    $answear2 = isset($_SESSION['answear2']) ? $_SESSION['answear2'] : 0;
    $answear3 = isset($_POST['answear3']) ? $_POST['answear3'] : 0;

    $query = $db->prepare('UPDATE answears SET answear1 = :answear1, answear2 = :answear2, answear3 = :answear3 WHERE :userIdFk = userIdFk');
    $query->bindValue(':userIdFk', $_SESSION['id']);
    $query->bindValue(':answear1', $answear1);
    $query->bindValue(':answear2', $answear2);
    $query->bindValue(':answear3', $answear3);

    $query->execute();

    //TODO - SESSION
    $_SESSION['answear3'] = $_POST['answear3'];

    header('Content-Type: application/json');
    http_response_code(200);
    // echo '{"message" : "user created", "key":"'.$key.'" }';

} catch (Exception $ex) {
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}