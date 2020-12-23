"use strict";
// Arrays
// Brackets
let users;
users = ['David', 'Jorge', 'Daniela', 'Melany'];
// users = [1, true, 'test']; TypeError
let otherUsers = ['1', 'Jorge', 'Daniela', 'Melany'];
// users = [1, true, 'test']; TypeError
//Array <type>
let pictitle;
pictitle = ['Landscape', 'Mountain', 'Beach', 'Sea'];
//Access to array values
console.log(users[0]);
users.forEach(user => {
    console.log(user);
});
console.log('------------------------------');
console.log(pictitle[0]);
pictitle.forEach(pictitle => {
    console.log(pictitle);
});
//obtenemos el length
console.log('Users lenght =', users.length);
//ingresamos nuevo usuario
users.push('The new boy');
users.forEach(user => {
    console.log(user);
});
//ordenamos alfabeticamente
users.sort();
users.forEach(user => {
    console.log(user);
});
