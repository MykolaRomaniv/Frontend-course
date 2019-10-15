'use srtict';

function getNuumbers(str) {
    let arrOfNum = [];
    let n;
    for (let c of str) {
        if (isNaN(n = Number(c))) {
            continue;
        }
        arrOfNum.push(n);
    }
    return arrOfNum;
}
// console.log(getNuumbers('1a2bhadhajdjskahd5'));

function findTypes() {
    let outObj = {};
    for (let val of arguments) {
        if (!(typeof (val) in outObj)) {
            let count = 0;
            for (let elem of arguments) {
                if (typeof (val) === typeof (elem)) {
                    count++;
                }
            }
            outObj[typeof (val)] = count;
        }
    }
    return outObj;
}
// console.log(findTypes(null, 5, 'hello', 'name', -454645, undefined, {age:15, name: 'name'}));

function executeforEach(arr, f) {
    arr.forEach(elem => {
        f(elem);
    });
}
// executeforEach([1,2,3], function(el) { console.log(el) });

function mapArray(arr, f) { //TODO use executeforEach()
    for (let i in arr) {
        arr[i] = f(arr[i]);
    }
    return arr;
}
// console.log(mapArray([2, 5, 8], function (el) {
//     return el + 3
// }));

function filterArray(arr, f) { //TODO use executeforEach()
    let newArr = [];
    arr.forEach(elem => {
        if (f(elem)) {
            newArr.push(elem);
        }
    });
    return newArr;
}
// console.log( filterArray([2, 5, 8], function(el) { return el > 3 }));

function showFormattedDate(d) {
    return 'Date: ' + d.toDateString().slice(4);
}
// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')) ); //returns ‘Date: Jan 27 2019’

function canConvertToDate(str) {
    return Date.parse(str) ? true : false;
}
// console.log(canConvertToDate('2016-13-18T00:00:00')); // false
// console.log(canConvertToDate('2016-03-18T00:00:00')); // true

function daysBetween(d1, d2) {
    let diff = Date.parse(d1) -  Date.parse(d2);
    return Math.round(Math.abs(diff) / 8.64e+7);
}
// console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));  // 32

function getAmountOfAdultPeople(data) {
    let adultCount = 0;
    for (let obj of data) {
        if (new Date(obj[" birthday "]).getFullYear() < new Date().getFullYear() - 18 ) {
            adultCount++;
        } 
    }
    return adultCount;
}

let DATA = [{
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        " birthday ": '2016-03-18T00:00:00',
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        " birthday ": '1991-02-11T00:00:00',
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        " birthday ": '1984-04-17T00:00:00',
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        " birthday ": '1994-04-17T00:00:00',
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
];
// console.log(getAmountOfAdultPeople(DATA)); // returns 3;

function keys(obj) {
    let outArr = [];
    // for (let el of Object.keys(obj)) {
    //     outArr.push(el);
    // }
    for (let i in obj) {
        outArr.push(i);
    }
    return outArr;
}
// console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3})); // returns [“keyOne”, “keyTwo”, “keyThree”]

function values(obj) {
    let outArr = [];
    for (let i in obj) {
        outArr.push(obj[i]);
    }
    return outArr;
}
// console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3})); // returns [1, 2, 3]