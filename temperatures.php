<?php
fscanf(STDIN, "%d", $n);
$inputs = explode(" ", fgets(STDIN));

$result = ($n === 0) ? 0 : max($inputs);

for ($i = 0; $i < $n; $i++) {
    $t = intval($inputs[$i]);

    for($i = 0; $i < sizeof($inputs); $i++) {
        $t = $inputs[$i];

        if(abs($t) < abs($result)) {
            $result = $t;
        } else if (abs($t) === abs($result) && $t !== $result) {
            $result = abs($t);
        } else if ($t === $result && $t < 0) {
            $result = $t;
        }
    }
}

echo $result;