// Function for showing a picture
export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqaure,
    Panorama,
    None
}

interface Picture{
    title: string;
    date: string;
    orientation: PhotoOrientation;
}

function showPicture(picture: Picture){
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
    
}

let mypic = {
    title: `Alabama`,
    date: `Today`,
    orientation: PhotoOrientation.Panorama
}
let another:Picture={
    title:'A true one',
    date:'Tomorrow',
    orientation: PhotoOrientation.Sqaure
}
// showPicture(mypic);
// showPicture(another);
// showPicture({
//     title: 'Hey',
//     date: 'Yesterday',
//     orientation: PhotoOrientation.Portrait,
//     // no se permiten extras
// });

interface PictureConfig{
    title?: string;
    date?: string;
    orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig){
    const pic = {title: 'Default', date: 'none', orientation: PhotoOrientation.None};
    if (config.title){
        pic.title = config.title;
    }
    if (config.date){
        pic.date = config.date;
    }
    if (config.orientation){
        pic.orientation = config.orientation;
    }
    return pic;
}

let mypic2 = generatePicture({});
// console.log(mypic2);
// mypic2 = generatePicture({title: 'Travel pic'});
// console.log(mypic2);
// mypic2 = generatePicture({date: '10/09/2001', orientation: PhotoOrientation.Landscape});
// console.log(mypic2);

//Interfaz : Usuario

interface User{
    readonly id: number;
    username: string;
    isPro: boolean;
}
let user:User;
user = {id: 100, username: "Derick", isPro: true};
console.log(user);

user.username = 'LLOOLOL';
console.log(user);
//No permite cambiar valor de id por el readonly
// user.id = 123;
// console.log(user);
