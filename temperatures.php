<?php
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));

if($n == 0){
    $result = 0;
} else {
    $result = max($inputs);
}

for ($i = 0; $i < $n; $i++) {
    $t = intval($inputs[$i]);

    for($i=0; $i<sizeof($inputs);$i++) {
        $t = $inputs[$i];

        if(abs($t) < abs($result)) {
            $result = $t;
        } else if (abs($t) == abs($result) && $t != $result) {
            $result = abs($t);
        }
    }
}

echo $result;