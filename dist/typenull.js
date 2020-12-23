"use strict";
//Explict 
let nullvar;
nullvar = null;
let othervar = null;
othervar = 10;
console.log(`${nullvar}   -   ${othervar}`);
//Undefined
let undevar;
undevar = undefined;
// undevar = 10; Error
let otherundef = undefined;
otherundef = `Other value`;
console.log(`${undevar}   -   ${otherundef}`);
//Null & undefined as subtypes
// --strictNullChecks
let albumName;
// albumName = null;
// albumName = undefined;
