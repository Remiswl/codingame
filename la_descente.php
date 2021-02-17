<?php

while (TRUE) {
    $highestMountain = 0;
    $mountainToShoot = 0;

    for ($i = 0; $i < 8; $i++) {
        fscanf(STDIN, "%d", $mountainH);

        if($mountainH > $highestMountain){
            $highestMountain = $mountainH;
            $mountainToShoot = $i;
        }
    }

    echo($mountainToShoot . "\n");
}