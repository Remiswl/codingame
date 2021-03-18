<?php

$fullGrid = [];
for ($i = 0; $i < 9; $i++) {
    $inputs = explode(" ", fgets(STDIN));
    array_push($fullGrid, $inputs);
}

// Row
for ($j = 0; $j < 9; $j++) {
    for ($i = 0; $i < 9; $i++) {
        $gridString = implode('', $fullGrid[$j]);
        $occurences = substr_count($gridString, strval($i+1));

        if($occurences !== 1){
            $answer = "false";
            break;
        } else {
            $answer = "true";
        }
    }

    if($answer === "false"){
        break;
    }
}

// Column
if($answer === "true"){
    for ($i = 0; $i < 9; $i++) {
        $column = "";

        for ($j = 0; $j < 9; $j++) {
            $digit = substr(implode('', $fullGrid[$j]), $i, 1);
            $column = $column . $digit;
        }

        $occurences = substr_count($column, strval($i+1));

        if($occurences !== 1){
            $answer = "false";
            break;
        } else {
            $answer = "true";
        }
    }
}

// Subgrid
if($answer === "true"){
    for ($i = 0; $i < 9; $i+=3) {
        for ($j = 0; $j < 9; $j+=3) {
            $subgrid = '';

            $subgrid = $subgrid . substr(implode('', $fullGrid[$i]), $j, 3);
            $subgrid = $subgrid . substr(implode('', $fullGrid[$i+1]), $j, 3);
            $subgrid = $subgrid . substr(implode('', $fullGrid[$i+2]), $j, 3);

            $occurences = substr_count($subgrid, strval($i+1));

            if($occurences !== 1){
                $answer = "false";
                break;
            } else {
                $answer = "true";
            }
        }

        if($answer === "false"){
            break;
        }
    }
}

echo $answer;