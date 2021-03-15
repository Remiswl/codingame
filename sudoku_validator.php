<?php
$answer = "true";

$fullGrid = [];
for ($i = 0; $i < 9; $i++) {
    $inputs = explode(" ", fgets(STDIN));
    array_push($fullGrid, $inputs);
}

// ROW
// For each $fullGrid[$i]
for ($i = 0; $i < 9; $i++) {

    // Calculate the sum of the digits
    $result = 0;
    for ($j = 0; $j < 9; $j++) {
        $result += intval($fullGrid[$i][$j]);
    }

    // If the sum is equal to 45
    // then each digit (from 1 to 9) appears once
    if($result != 45) {
        $answer = "false";
    };
}

// Column
// For each (j)th digit of each lign
for ($i = 0; $i < 9; $i++) {

    $result = 0;

    // For each $fullGrid[$i]
    for ($j = 0; $j < 9; $j++) {
        $result += intval($fullGrid[$j][$i]);
    }

    if($result != 45) {
        $answer = "false";
    };

}

// Sub-grid


// Write an answer using echo(). DON'T FORGET THE TRAILING \n
// To debug: error_log(var_export($var, true)); (equivalent to var_dump)

echo($answer);