console.log(`Learning TypeScript with Platzi - Derick`);

//NUMBER
//Explict
let phone:number;
phone = 573167639639;

//Inference
let phone2 = 3212033340;
//Nmber types hexa(0x) bin(0b) oct(0o)
let hex:number = 0xFF2233;
let binary:number = 0b10101001;
let octal:number = 0o01243567;

//BOOLEAN
//Explict
let isPro:boolean;
isPro = true;

//Inference
let isUserPro = false;

//STRING
//Explict - usando backtick para template string
let username:string = `derickrp6`;
let fullname:string[] = [`Derick`, `Robinson`];
let userinfo:string;
userinfo =`
    Userinfo:
    username: ${username}
    firstname: ${fullname[0]}
    lastname: ${fullname[1]}
    phone: ${phone}
    pro: ${isPro}
`;
console.log(userinfo);