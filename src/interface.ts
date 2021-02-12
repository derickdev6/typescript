// Function for showing a picture
export{};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Sqaure,
    Panorama
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
showPicture(mypic);
showPicture(another);
showPicture({
    title: 'Hey',
    date: 'Yesterday',
    orientation: PhotoOrientation.Portrait,
    // no se permiten extras
});