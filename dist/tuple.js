"use strict";
//Tupla [1, 'name'];
let user;
user = [1, 'Derick'];
console.log('user  -  ', user);
console.log(user[0]);
console.log(user[1].toUpperCase());
//Tuples with several values
//id, username, ispro
let userinfo = [1, 'derickrp6', true];
console.log(userinfo);
//Tuple array
let tuplearray = [];
tuplearray.push([1, 'derickrp6']);
tuplearray.push([2, 'johncard12']);
tuplearray.push([3, 'danitrespa']);
let target = tuplearray[2][1];
target = 'DaniTrespa01';
tuplearray.forEach(tuple => {
    console.log(`ID: ${tuple[0]}     -     ${tuple[1]}`);
});
