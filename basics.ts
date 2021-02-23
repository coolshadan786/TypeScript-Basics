console.log( 'Yor code output gores here!!' );

//<--------------------------------------------------------------->

// function adds ( n1: number, n2: number )
// {
//     if ( typeof n1 !== 'number' || typeof n2 !== 'number' )
//     {
//         throw new Error( "Incorrect input!" );
//     } else
//     {
//         return n1 + n2;
//     }
// }

//<--------------------------------------------------------------->

// function adds ( n1: number, n2: number )
// {
//     console.log( typeof number1 );
//     return n1+ n2;
// }

//<--------------------------------------------------------------->

// function adds ( n1: number, n2: number,showResult: boolean,phrase: string)
// {
//     const result = n1 + n2;
//     if ( showResult )
//     {
//         console.log(phrase + result );
//     } else
//     {
//         return n1 + n2;
//     }
// }

//<--------------------------------------------------------------->

// const  number1 = 5; //5.0
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is : ';

// const result = adds( number1, number2,printResult );
// console.log(result);

//<--------------------------------------------------------------->

function adds ( n1, n2,showResult,phrase)
{
    const result = n1 + n2;
    if ( showResult )
    {
        console.log(phrase + result );
    } else
    {
        return n1 + n2;
    }
}

let  number1 = 5; //5.0
let number2 = 2.8;
let printResult = true;
let resultPhrase = 'Result is : ';

adds( number1, number2, printResult, resultPhrase );

//<--------------------------------------------------------------->


