//Explict any
let id:any;
id = 1;
id = 'A';
id = 0x214ff;
id = 0b010110;
id = 0o141124;
console.log(`ID: ${id}`);

let otherid = 1;
otherid = 0xffffff;

console.log(`ID: ${otherid}`);

let surprise:any = `hi typescript`;
let resstring = surprise.substring(3)
console.log(resstring);

console.log(`Use any only as last resource or for type changing variables`);
