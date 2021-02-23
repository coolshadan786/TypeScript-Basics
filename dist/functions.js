"use strict";
//<--------------------------------------------------------------->
// function add ( n1: number, n2: number )
// {
//     return n1 + n2;
// }
// function printResult(num: number) {
//     console.log('Result: '+num);
// }
// printResult( add( 5, 20 ) );
//<--------------------------------------------------------------->
// function add ( n1: number, n2: number )
// {
//     return n1 + n2;
// }
// function printResult ( num: number ): void{
//     console.log( 'Result: ' + num );
//     return;
// }
// printResult( add( 5, 20 ) );
//<--------------------------------------------------------------->
// function add ( n1: number, n2: number )
// {
//     return n1 + n2;
// }
// function printResult ( num: number ): void{
//     console.log( 'Result: ' + num );
//     return;
// }
// printResult( add( 5, 20 ) );
// // let combineValues;
// // combineValues = add;
// let combineValues: Function;
// combineValues = add;
// // combineValues = printResult;
// // combineValues = 5;
// console.log(combineValues(8,8));
//<--------------------------------------------------------------->
// function add ( n1: number, n2: number )
// {
//     return n1 + n2;
// }
// function printResult ( num: number ): void{
//     console.log( 'Result: ' + num );
//     return;
// }
// printResult( add( 5, 20 ) );
// let combineValues: ( a: number, b: number ) => number;
// combineValues = add;
// console.log(combineValues(8,8));
//<--------------------------------------------------------------->
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 20));
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//<--------------------------------------------------------------->
