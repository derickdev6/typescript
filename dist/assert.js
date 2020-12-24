"use strict";
let username;
username = 'Derick';
let message = username.length > 5 ?
    `Welcome ${username}` :
    `Error, username "${username}" is too short`;
console.log(message);
let usernameid = 'derick 421';
let nameonly = usernameid.split(' ')[0];
let idonly = usernameid.split(' ')[1];
console.log(nameonly);
console.log(idonly);
