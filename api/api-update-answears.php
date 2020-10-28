<?php
require_once( __DIR__.'/../private/mariadb.php' );
try {
    echo 'x';
    
    $answear1 = $_POST['answear1'];
    $answear2 = ($_POST['answear2'] ? $_POST['answear2'] : '0');
    $answear3 = ($_POST['answear3'] ? $_POST['answear3'] : '0');

    // $query = $db->prepare('INSERT INTO users VALUES(:id, :name)');
    // $query->bindValue(':id', $id);
    // $query->bindValue(':name', $name);

    // $query->execute();
    // //TODO - SESSION
    // session_start();
    // $_SESSION['name'] = $_POST['name'];
    // $_SESSION['id'] = $id;

    // header('Content-Type: application/json');
    // http_response_code(200);
    // echo '{"message" : "user created", "key":"'.$key.'" }';

} catch (Exception $ex) {
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}