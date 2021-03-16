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
    for ($j = 0; $j < 3; $j++) {
        for ($i = 0; $i < 9; $i+=3) {

            $subgrid = "";

            $gridString = implode('', $fullGrid[$j]);

            $subgrids = substr($gridString, $i, 3);

            $subgrid = $subgrid . $subgrids;

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