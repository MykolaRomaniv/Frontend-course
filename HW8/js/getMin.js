function isMin() {
    'use strict';
    let min = arguments[0];
    for (let num of arguments) {
        if (min > num) {
            min = num;
        }
    }
    return min;
}