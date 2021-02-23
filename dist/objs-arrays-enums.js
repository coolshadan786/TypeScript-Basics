"use strict";
// const person: {
//     name: string;
//     age: number;
// }={
//     name: 'Max',
//     age: 30
// };
// console.log(person.name);
//<--------------------------------------------------------------->
// const person = {
//     name: 'Max',
//     age: 30
// };
// console.log(person.name);
//<--------------------------------------------------------------->
// const person = {
//     name: 'Max',
//     age: 30,
//     hobbies: [
//         'Sports','Cricket'
//     ]
// };
// console.log(person.name);
//<--------------------------------------------------------------->
// let favoriteActivities:  [];
// favoriteActivities= ['Sports',1];
// console.log(favoriteActivities);
//<--------------------------------------------------------------->
// let activities: string[];
// activities = [ 'Sports' ];
// console.log( activities );
//<--------------------------------------------------------------->
// const person = {
//     name: 'Max',
//     age: 30,
//     hobbies: [
//         'Sports','Cricket'
//     ]
// };
// for ( const hobby of person.hobbies )
// {
//     console.log(hobby);  
// }
// for ( const hobby of person.hobbies )
// {
//     console.log(hobby.toUpperCase());    
//     // console.log(hobby.localeCompare());  // !!! Error !!!
// }
//<--------------------------------------------------------------->
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role:[number, string]
// }={
//     name: 'Max',
//     age: 30,
//     hobbies: [
//         'Sports','Cricket'
//     ],
//     role:[ 2,'author']
// };
// // person.role.push( 'admin' );
// // person.role = [ 0, 'admin','check '];
// person.role[ 1 ] = 'Check';
// // person.role[ 2 ] = 'Check';
// console.log(person.role);
// console.log( person.role[ 1 ] );
//<--------------------------------------------------------------->
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// enum Role { ADMIN, READ_ONLY, AUTHOR };
var Role;
(function (Role) {
    Role["ADMIN"] = "A";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "B";
})(Role || (Role = {}));
;
const person = {
    name: 'Max',
    age: 30,
    hobbies: [
        'Sports', 'Cricket'
    ],
    // role: 'READ ONLY USER',
    // role: ADMIN,
    role: Role.READ_ONLY
};
// if ( person.role === Role.READ_ONLY )  
// {
//     console.log('is admin'); 
// }
if (person.role === Role.READ_ONLY) {
    console.log(`{${Role.READ_ONLY} check}`);
}
//<--------------------------------------------------------------->
