<?php
//Validation
if( ! isset($_POST['name']) ){
    sendError(400, 'missing name', __LINE__);
}
if( strlen($_POST['name']) < 2 ){
    sendError(400, 'name must be at least 2 characters', __LINE__);
}
if( strlen($_POST['name']) > 15 ){
    sendError(400, 'name cannot be longer than 15 characters', __LINE__);
}

// require_once(__DIR__.'/mariadb.php');
require_once( __DIR__.'/../private/mariadb.php' );
try {
    $id = uniqid();
    $name = $_POST['name'];

    $query = $db->prepare('INSERT INTO users VALUES(:id, :name)');
    $query->bindValue(':id', $id);
    $query->bindValue(':name', $name);


    $answear1 = ($_POST['answear1'] ? $_POST['answear1'] : '0');
    $answear2 = ($_POST['answear2'] ? $_POST['answear2'] : '0');
    $answear3 = ($_POST['answear3'] ? $_POST['answear3'] : '0');

    $q = $db->prepare('INSERT INTO answears 
    VALUES (:userIdFk, :userNameFk, :answear1, :answear2, :answear3)');

    $q->bindValue(':userIdFk', $id );
    $q->bindValue(':userNameFk', $name );
    $q->bindValue(':answear1', $answear1 );
    $q->bindValue(':answear2', $answear2 );
    $q->bindValue(':answear3', $answear3 );

    $q->execute();
    $query->execute();
    echo '{"message" : "answears created" }';

    //TODO - SESSION
    session_start();
    $_SESSION['name'] = $_POST['name'];
    $_SESSION['id'] = $id;

    header('Content-Type: application/json');
    http_response_code(200);
    // echo '{"message" : "user created", "key":"'.$key.'" }';

} catch (Exception $ex) {
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}