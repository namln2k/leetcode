<?php
class Solution
{
    function charToInt($c)
    {
        switch ($c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
        }
    }

    /**
     * @param String $s
     * @return Integer
     */
    function romanToInt($s)
    {
        $n = strlen($s);
        $result = 0;
        for ($i = 0; $i < $n; $i++) {
            if ($i === $n - 1) {
                $result += $this->charToInt($s[$i]);
                break;
            }
            $tempValue = 0;
            if ($s[$i] === 'I') {
                if ($s[$i + 1] === 'V' || $s[$i + 1] === 'X') {
                    $tempValue = -1;
                } else {
                    $tempValue = 1;
                }
            } else if ($s[$i] === 'X') {
                if ($s[$i + 1] === 'L' || $s[$i + 1] === 'C') {
                    $tempValue = -10;
                } else {
                    $tempValue = 10;
                }
            } else if ($s[$i] === 'C') {
                if ($s[$i + 1] === 'D' || $s[$i + 1] === 'M') {
                    $tempValue = -100;
                } else {
                    $tempValue = 100;
                }
            } else {
                $tempValue = $this->charToInt($s[$i]);
            }
            $result += $tempValue;
        }
        return $result;
    }
}
