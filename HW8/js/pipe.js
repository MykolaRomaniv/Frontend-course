function pipe(x) {
    'use strict';
    for (let i = 1; i < arguments.length; i++) {
        x = arguments[i](x);
    }
    return x;
}

function addOne(x) {
    return x + 1;
}