// User ID can be 10 or '10'

let userid:number|string;
userid = '10';
userid = 10;

//Search username using ID

function getUsernameByID(id:number|string){
    // Process to find
    return 'some user name';
}

getUsernameByID('10');
getUsernameByID(10);

// Type alias-------------------

type IDuser = number|string;

let otherid:IDuser;

function dosomething(otherid:IDuser){
    return 'otherid username';
}

//Con esto podemos usar Username en vez de string en futuro codigo
type Username = string;

//Literal types---------------------------

type SquareSize = '100x100'|'500x500'|'1000x1000';
let picsize:SquareSize = '100x100';
picsize = '500x500';
picsize = '1000x1000';