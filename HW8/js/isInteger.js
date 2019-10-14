function isInteger(n) {
    'use strict';
    return (typeof n === 'number' && n % 1 === 0);
}