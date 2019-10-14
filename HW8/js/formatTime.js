function formatTime(minutes) {
    'use strict';
    let outputStr = '';
    outputStr +=  Math.floor(minutes / (24 * 60)) + 'day(s) ';
    minutes %= 24 * 60;
    outputStr += Math.floor(minutes / 60) + 'hour(s) ';
    outputStr += Math.floor(minutes %= 60) + 'minute(s) ';
    return outputStr;
}