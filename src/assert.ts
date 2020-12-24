let username:any;
username = 'Derick';

let message:string = (<string>username).length > 5 ? 
    `Welcome ${username}`:
    `Error, username "${username}" is too short`;

console.log(message);

let usernameid:any = 'derick 421';

let nameonly:string = (<string>usernameid).split(' ')[0];
let idonly:string = (usernameid as string).split(' ')[1];
console.log(nameonly);
console.log(idonly);