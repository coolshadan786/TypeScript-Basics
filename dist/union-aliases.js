"use strict";
// function adds ( n1: number, n2: number ) {
//     const result = n1 + n2;
//         return result;  
// }
function adds(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combineAges = adds(30, 20, 'as-number');
console.log(combineAges);
const combineStingAges = adds('30', '20', 'as-number');
console.log(combineStingAges);
const combAges = adds('Max', 'Ana', 'as-text');
console.log(combAges);
//<--------------------------------------------------------------->
