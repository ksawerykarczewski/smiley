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

    $query->execute();
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