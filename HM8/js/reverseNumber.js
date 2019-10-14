function reverseNumber(n) {
    'use strict';
    switch (Math.sign(n)) {
        case 1:
            return Number(String(n).split('').reverse().join(''));
        case 0:
        case -0:
            return n;
        case -1:
            return Number(String(n).split('').reverse().join('').replace('-',''));
    }
}