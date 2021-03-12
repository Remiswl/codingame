<?php

$operation = stream_get_line(STDIN, 256 + 1, "\n");
fscanf(STDIN, "%d", $pseudoRandomNumber);
$alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

$rotors = [];
for ($i = 0; $i < 3; $i++){
    $rotor = stream_get_line(STDIN, 27 + 1, "\n");
    array_push($rotors, $rotor);
};

$message = stream_get_line(STDIN, 1024 + 1, "\n");

if($operation === "ENCODE") {
    // Ceaser
    for ($i = 0; $i < strlen($message); $i++){
        $index = strpos($alphabet, $message[$i]) + $pseudoRandomNumber + $i;

        while ($index > 26) {
            $index = $index - 26;
        }

       $message[$i] = $alphabet[$index];
    }

    // Rotors
    for ($j = 0; $j < 3; $j++){
        for ($i = 0; $i < strlen($message); $i++){
            $index = strpos($alphabet, $message[$i]);
            $message[$i] = $rotors[$j][$index];
        }
    }
}

echo($message);