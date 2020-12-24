"use strict";
//Picture orientation
var Orientation;
(function (Orientation) {
    Orientation[Orientation["Landscape"] = 0] = "Landscape";
    Orientation[Orientation["Portrait"] = 1] = "Portrait";
    Orientation[Orientation["Square"] = 2] = "Square";
    Orientation[Orientation["Panoramic"] = 3] = "Panoramic";
})(Orientation || (Orientation = {}));
// const landscape:Orientation = Orientation.Landscape;
console.log('Orientation.Landscape  -  ', Orientation.Landscape);
console.log('Orientation[0]  -  ', Orientation[0]);
// console.log(landscape);
//Lets try to bind two enums
//Way 1, binding in runtime, with object assign, explict first new element index
var Room1;
(function (Room1) {
    Room1[Room1["David"] = 0] = "David";
    Room1[Room1["Alex"] = 1] = "Alex";
})(Room1 || (Room1 = {}));
var Room2;
(function (Room2) {
    Room2[Room2["Johanna"] = 2] = "Johanna";
    Room2[Room2["Alexander"] = 3] = "Alexander";
    Room2[Room2["Jessica"] = 4] = "Jessica";
})(Room2 || (Room2 = {}));
let joint = Object.assign(Room1, Room2);
console.log(joint);
//Way 2, adding more elements, defining the first new element index for error avoiding
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 0] = "red";
    Colors[Colors["blue"] = 1] = "blue";
})(Colors || (Colors = {}));
(function (Colors) {
    Colors[Colors["green"] = 2] = "green";
    Colors[Colors["yellow"] = 3] = "yellow";
})(Colors || (Colors = {}));
console.log(Colors);
