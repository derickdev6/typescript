"use strict";
exports.__esModule = true;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqaure"] = 2] = "Sqaure";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["None"] = 4] = "None";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
}
var mypic = {
    title: "Alabama",
    date: "Today",
    orientation: PhotoOrientation.Panorama
};
var another = {
    title: 'A true one',
    date: 'Tomorrow',
    orientation: PhotoOrientation.Sqaure
};
function generatePicture(config) {
    var pic = { title: 'Default', date: 'none', orientation: PhotoOrientation.None };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    if (config.orientation) {
        pic.orientation = config.orientation;
    }
    return pic;
}
var mypic2 = generatePicture({});
var user;
user = { id: 100, username: "Derick", isPro: true };
console.log(user);
user.username = 'LLOOLOL';
console.log(user);
//No permite cambiar valor de id por el readonly
// user.id = 123;
// console.log(user);
