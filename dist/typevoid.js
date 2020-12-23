"use strict";
//Void
//Explict
function showInfo(user) {
    console.log(`User info`, user.id, user.name);
}
showInfo({ id: 1, name: `derickrp` });
//Inference
function showFormattedInfo(user) {
    console.log(`Userinfo`, `
    id: ${user.id}
    name: ${user.name}
    `);
}
showFormattedInfo({ id: 1, name: `derickrp` });
//Void as datatype
let unusable;
//unusable = null;
unusable = undefined;
//NEVER
function handeError(code, message) {
    // Porcess code
    // Generate Message
    throw new Error(`Error ... ${message}. Code: ${code}`);
}
;
try {
    handeError(404, `Not found`);
}
catch (error) {
}
//Infinite 
function sumNumbers(limit) {
    let sum = 0;
    while (sum < limit) {
        sum++;
        console.log(sum);
    }
}
sumNumbers(101010);
