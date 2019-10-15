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
    for(let i in arr) {
        arr[i] = f(arr[i]);
    }
    return arr;
}

// console.log(mapArray([2, 5, 8], function (el) {
//     return el + 3
// }));

function filterArray(arr, f) {//TODO use executeforEach()
    let newArr = [];
    arr.forEach(elem => {
        if(f(elem))
        {
            newArr.push(elem);
        }
    });
    return newArr;
}

// console.log( filterArray([2, 5, 8], function(el) { return el > 3 }));