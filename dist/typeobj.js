"use strict";
// Object
let user;
user = {};
user = {
    id: 1,
    name: `Derick`,
    isPro: true,
    getname: function () { return `Derick`; }
};
console.log(user);
//Object vs object (JS class vs TS type)
const myObject = {
    id: 1,
    name: `Derick`,
    isPro: true
};
console.log(myObject instanceof Object);
console.log(myObject.name);
