"use strict";
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = 'Max';
// if ( typeof userInput == 'string' )
// {
//     userName = userInput;
//     console.log(userName);  
// } else
// {
//     console.log('Not get it');   
// }
//<--------------------------------------------------------------->
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred! ', 500);
const result = generateError('An error occurred! ', 500);
console.log(result);
const data = 'check';
console.log(data);
//<--------------------------------------------------------------->
// const button = document.querySelector( 'button' )!;
// button.addEventListener( 'click', () =>
// {
//     console.log('Clicked'); 
// })
