//Create pic
// function createPic(title, date, size){

// }

//Defining types

type SquareSize = '100x100'|'300x300';

// function createPic(title:string, date:string, size:SquareSize){
//     //The pic is created
//     console.log(`Pictre created
//     title: ${title}
//     date: ${date}
//     size: ${size}
//     `);
// }

// createPic('MyPic', 'today', '300x300');

function createPic(title?:string, date?:string, size?:SquareSize){
    //The pic is created
    console.log(`Pictre created
    title: ${title}
    date: ${date}
    size: ${size}
    `);
}
createPic('Trip', '2020');
createPic(undefined,undefined,'100x100');

//Flat array
//Pasamos el square size como opcional con 100x100 por defecto
let makePic = (title:string, date:string, size:SquareSize = '100x100'):object => {
    return{title, date, size};
};

const pic = makePic('New', 'yesterday');
console.log(pic);

//

function handleError(code:number, message:string): string|never{
    if(message ==='error'){
    throw new Error(`Error-> ${message}:${code}`)
    }
    else{
        return 'An error has ocurred'
    }
}

try {
    let result = handleError(200, 'OK');
    console.log(result);
    result = handleError(404, 'error');
    console.log(result);
} catch (error) {
    
}