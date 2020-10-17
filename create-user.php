<?php
//Validation
// if( ! isset($_POST['name']) ){
//     sendError(400, 'missing name', __LINE__);
// }
// if( strlen($_POST['name']) < 2 ){
//     sendError(400, 'name must be at least 2 characters', __LINE__);
// }
// if( strlen($_POST['name']) > 20 ){
//     sendError(400, 'name cannot be longer than 5 characters', __LINE__);
// }
// if( ! isset($_POST['lastname']) ){
//     sendError(400, 'missing lastname', __LINE__);
// }
// if( strlen($_POST['lastname']) < 2 ){
//     sendError(400, 'lastname must be at least 2 characters', __LINE__);
// }
// if( strlen($_POST['lastname']) > 20 ){
//     sendError(400, 'lastname cannot be longer than 5 characters', __LINE__);
// }
// if( ! isset($_POST['password']) ){
//     sendError(400, 'missing password', __LINE__);
// }
// if( strlen($_POST['password']) < 2 ){
//     sendError(400, 'password must be at least 2 characters', __LINE__);
// }
// if( strlen($_POST['password']) > 20 ){
//     sendError(400, 'password cannot be longer than 5 characters', __LINE__);
// }

require_once(__DIR__.'/arangodb.php');
use ArangoDBClient\Statement as ArangoStatement;

try {
    $userId = rand(100, 999);
    $sName = $_POST['name'];
    // $sLastName = $_POST['lastname'];
    // $sPassword = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $statement = new ArangoStatement(
    $arangodb,
    [
        'query' => 'INSERT {"id": @id, "name" : @name} 
        INTO mindmorphology',
        'bindVars' => [
            'id' => "$userId",
            'name' => $sName
        ]
    ]);

    $cursor = $statement->execute();
    $user = json_decode($cursor->getAll());
    $key = $user->_key;

    //TODO - SESSION
    session_start();
    $_SESSION['name'] = $_POST['name'];

    header('Content-Type: application/json');
    http_response_code(200);
    echo '{"message" : "user created", "key":"'.$key.'" }';

} catch (Exception $ex) {
    echo $ex;
}