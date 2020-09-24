<?php
try{
    if (! isset($_POST['answear'])) {
        http_response_code(400);
        header('Content-Type: application/json');
        echo 'x';
        exit();
    }

    // if ($_POST['answear'] == "mood1") {
    //     echo 'good mood';
    // }

    // if ($_POST['answear'] == "mood2") {
    //     echo 'so so mood';
    // }

    // if ($_POST['answear'] == "mood3") {
    //     echo 'bad mood';
    // }

    // if ($_POST['answear'] == "mood4") {
    //     echo 'hard to tell mood';
    // }


    // $sAnswearId = uniqid();

    // $jAnswear = new stdClass();
    // $jAnswear->mood = $_POST['answear'];

    // //open the db 
    // $sData = file_get_contents('data.txt');
    // $aData = json_decode($sData);
    // array_push($aData, $jAnswear);
    // $sData = json_encode($aData);
    // file_put_contents('data.txt', $sData);
    // header('Content-Type: application/json');
    //header('Location: ../index.html');
}

catch(Exception $ex){
  http_response_code(500);
  header('Content-Type: application/json');
  echo '{"message":"error '.__LINE__.'"}';
}
?>