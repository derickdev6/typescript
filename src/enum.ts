//Picture orientation

enum Orientation{
    Landscape,
    Portrait,
    Square,
    Panoramic
}

// const landscape:Orientation = Orientation.Landscape;

console.log('Orientation.Landscape  -  ',Orientation.Landscape);
console.log('Orientation[0]  -  ',Orientation[0]);
// console.log(landscape);

//Lets try to bind two enums

//Way 1, binding in runtime, with object assign, explict first new element index
enum Room1{
    David,
    Alex,
}
enum Room2{
    Johanna = 2,
    Alexander,
    Jessica
}

let joint = Object.assign(Room1, Room2)
console.log(joint);

//Way 2, adding more elements, defining the first new element index for error avoiding
enum Colors{
    red,
    blue
}
enum Colors{
    green = 2,
    yellow
}
console.log(Colors);
