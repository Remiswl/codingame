<?php

fscanf(STDIN, "%d %d %d %d", $lightX, $lightY, $initialTx, $initialTy);

$thorCurrentPositionX = $initialTx;
$thorCurrentPositionY = $initialTy;

while (TRUE)
{
    fscanf(STDIN, "%d", $remainingTurns);

    $thorMoveX;
    $thorMoveY;

    if ($lightX > $thorCurrentPositionX) {
        $thorMoveX = 'E';
        $thorCurrentPositionX ++;
    } else if ($lightX < $thorCurrentPositionX){
        $thorMoveX = 'W';
        $thorCurrentPositionX --;
    } else {
        $thorMoveX = '';
    }

    if ($lightY > $thorCurrentPositionY) {
        $thorMoveY = 'S';
        $thorCurrentPositionY ++;
    } else if ($lightY < $thorCurrentPositionY) {
        $thorMoveY = 'N';
        $thorCurrentPositionY --;
    } else {
        $thorMoveY = '';
    }

    echo($thorMoveY . $thorMoveX . "\n");
}