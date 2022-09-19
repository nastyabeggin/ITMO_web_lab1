<?php
include 'validator.php';
header('Access-Control-Allow-Origin: *');
date_default_timezone_set('Europe/Moscow');


function check_coords($x, $y, $r) {
    $flag = false;
    if ($x >= 0 && $y >= 0 && $x <= $r && $y <= $r/2) {
        $flag = true;
    } 
    if ($x <= 0 && $y >= 0 && abs($x - $y) <= $r/2) {
        $flag = true;
    }
    if ($x <= 0 && $y <= 0 && $x >= -$r && pow($x, 2) + pow($y, 2) <= pow($r/2, 2)) {
        $flag = true;
    }
    return $flag; 
}


$current_time = date("H:i:s");
$starting_time = microtime(true);

if (isset($_POST["x"]) && isset($_POST["y"]) && isset($_POST["r"])) {
    $validator = new Validator;
    if ($validator->validate($_POST["x"], $_POST["y"], $_POST["r"])) {
    $x = floatval($_POST["x"]);
    $y = floatval($_POST["y"]);
    $r = intval($_POST["r"]);
    
        $checked_dot = check_coords($x, $y, $r) ? "TRUE" : "FALSE";

        $finish_time = round((microtime(true) - $starting_time) * 1000000, 2);

        exit("
            <tr>
                <th>$x</th>
                <th>$y</th>
                <th>$r</th>
                <th>$current_time</th>
                <th>$finish_time</th>
                <th>$checked_dot</th>
            </tr>");
    } else {
        exit("У сервера неправильные данные!");
    }
}
