<?php
include 'validator.php';

header('Access-Control-Allow-Origin: *');

date_default_timezone_set('Europe/Moscow');

function check_coords($x, $y, $r)
{
    $first_quarter_hit = false;
    $second_quarter_hit = false;
    $fourth_quarter_hit = false;

    if ($x >= -$r/2 && $x <= $r/2 && $y >= 0 && $y <= $r && ( ($y == -2*$x + $r) || ($x == 0) ) ) {
        $first_quarter_hit = true;
    } else if ($x <= 0 && $x >= -$r && $y <= 0 && $y >= -$r / 2) {
        $second_quarter_hit = true;
    } else if ($x >= 0 && $x <= $r/2 && $y <= 0 && $y >= -$r/2 && $r/2 * $r/2 >= ($x * $x + $y * $y)) {
        $fourth_quarter_hit = true;
    }

    return $first_quarter_hit || $second_quarter_hit || $fourth_quarter_hit;
}

$start = microtime(true);

$current_time = date("H:i:s");
if (isset($_GET["x"]) && isset($_GET["y"]) && isset($_GET["r"])) {
    $validator = new Validator;
    if ($validator->validate($_GET["x"], $_GET["y"], $_GET["r"])) {
        $x = floatval($_GET["x"]);
        $y = floatval($_GET["y"]);
        $r = floatval($_GET["r"]);

        $checked_dot = check_coords($x, $y, $r) ? "ПОПАЛ" : "НЕ ПОПАЛ";

        $finish_time = number_format(microtime(true) - $start, 8, ".", "") * 1000000;

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
        exit("Получены некорректные данные!");
    }
}