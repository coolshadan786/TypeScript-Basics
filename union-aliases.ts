
// function adds ( n1: number, n2: number ) {
//     const result = n1 + n2;
//         return result;  
// }

// const combineAges = adds( 30,20 );
// console.log(combineAges);

//<--------------------------------------------------------------->

// function adds ( n1: number | string, n2: number | string ) {
//     let result;
//     if ( typeof n1 === 'number' && typeof n2 === 'number' )
//     {
//         result = n1 + n2;
//     } else
//     {
//         result = n1.toString() + n2.toString();
//     }
//     return result;
// }
// const combineAges = adds( 30,20 );
// console.log(combineAges);
// const combineAges = adds( 'Max', 'Ana' );
// console.log(combineAges);

//<--------------------------------------------------------------->

// function adds ( n1: number | string, n2: number | string ,resultConversion:string) {
//     let result;
//     if ( typeof n1 === 'number' && typeof n2 === 'number' )
//     {
//         result = n1 + n2;
//     } else
//     {
//         result = n1.toString() + n2.toString();
//     }
//     if ( resultConversion === 'as-number' )
//     {
//         return +result;
//     }else {
//         return result.toString();
//     }
// }
// const combineAges = adds( 30,20,'as-number' );
// console.log(combineAges);
// const combineStingAges = adds( '30','20','as-number' );
// console.log(combineStingAges);
// const combAges = adds( 'Max', 'Ana' ,'as-text');
// console.log(combAges);

//<--------------------------------------------------------------->

// function adds ( n1: number | string, n2: number | string ,resultConversion:string) {
//     let result;
//     if ( typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number')
//     {
//         result = +n1 + +n2;
//     } else
//     {
//         result = n1.toString() + n2.toString();
//     }
//     return result;

// }
// const combineAges = adds( 30,20,'as-number' );
// console.log(combineAges);
// const combineStingAges = adds( '30','20','as-number' );
// console.log(combineStingAges);
// const combAges = adds( 'Max', 'Ana' ,'as-text');
// console.log(combAges);

//<--------------------------------------------------------------->

// function adds ( n1: number | string, n2: number | string, resultConversion: 'as-number' | 'as-text'
// )
// {
//     let result;
//     if ( typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number')
//     {
//         result = +n1 + +n2;
//     } else
//     {
//         result = n1.toString() + n2.toString();
//     }
//     return result;

// }
// const combineAges = adds( 30,20,'as-number' );
// console.log(combineAges);
// const combineStingAges = adds( '30','20','as-number' );
// console.log(combineStingAges);
// const combAges = adds( 'Max', 'Ana' ,'as-text');
// console.log(combAges);

//<--------------------------------------------------------------->

type Combinable = number | string;
type conversionDescriptions = 'as-number' | 'as-text';
function adds ( n1: Combinable, n2: Combinable, resultConversion: conversionDescriptions
)
{
    let result;
    if ( typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'as-number')
    {
        result = +n1 + +n2;
    } else
    {
        result = n1.toString() + n2.toString();
    }
    return result;

}
const combineAges = adds( 30,20,'as-number' );
console.log(combineAges);
const combineStingAges = adds( '30','20','as-number' );
console.log(combineStingAges);
const combAges = adds( 'Max', 'Ana' ,'as-text');
console.log(combAges);

//<--------------------------------------------------------------->
