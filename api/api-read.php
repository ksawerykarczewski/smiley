<?php

session_start();
require_once( __DIR__.'/../private/mariadb.php' );
try {

    $q = $db->prepare('SELECT * FROM answears');
    $q->execute();
    //array with json objects
    $aRows = $q->fetchAll();
    //echo json_encode($aRows[0][0]);

    if ($_POST["id"] == $aRows[0][0]) {

        $answears = [$aRows[0][1], $aRows[0][2], $aRows[0][3], $aRows[0][4]];
        // echo json_encode($aRows[0][3]);
        echo json_encode($answears);
        //echo $answears;
        header('Content-Type: application/json');
        exit();
    }

    // $anwear1 = json_encode($aRows[0][2]);
    // $anwear2 = json_encode($aRows[0][3]);
    // $anwear3 = json_encode($aRows[0][4]);
    // echo $anwear3;
    // echo $anwear2;
    // echo $anwear3;

    // echo json_encode($data);
    header('Content-Type: application/json');
    http_response_code(200);
    exit();  

}catch (Exception $ex) {
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}


// ############################################################
// ############################################################
// ############################################################
function sendError($iErrorCode, $sMessage, $iLine){
  http_response_code($iErrorCode);
  header('Content-Type: application/json');
  echo '{"message":"'.$sMessage.'", "error":"'.$iLine.'"}';
  exit();
}
