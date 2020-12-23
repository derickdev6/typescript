"use strict";
console.log(`Learning TypeScript with Platzi - Derick`);
//NUMBER
//Explict
let phone;
phone = 573167639639;
//Inference
let phone2 = 3212033340;
//Nmber types hexa(0x) bin(0b) oct(0o)
let hex = 0xFF2233;
let binary = 0b10101001;
let octal = 0o01243567;
//BOOLEAN
//Explict
let isPro;
isPro = true;
//Inference
let isUserPro = false;
//STRING
//Explict - usando backtick para template string
let username = `derickrp6`;
let fullname = [`Derick`, `Robinson`];
let userinfo;
userinfo = `
    Userinfo:
    username: ${username}
    firstname: ${fullname[0]}
    lastname: ${fullname[1]}
    phone: ${phone}
    pro: ${isPro}
`;
console.log(userinfo);
