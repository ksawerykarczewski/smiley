<?php

session_start();

// if( isset($_SESSION["id"])){
//   sendError(400, 'misisng id', __LINE__);
// }

require_once( __DIR__.'/../private/mariadb.php' );
try {
    $_POST["id"] = "5f9d34c63dc2d";

    $q = $db->prepare('SELECT * FROM answears');
    $q->execute();
    $aRows = $q->fetchAll();
    //echo
    foreach ($aRows as $aRow) {
      if ($aRow['userIdFk'] == $_SESSION["id"]) {
        echo json_encode($aRow);
      }
    }

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
