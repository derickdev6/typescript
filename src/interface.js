"use strict";
exports.__esModule = true;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqaure"] = 2] = "Sqaure";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
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
showPicture(mypic);
showPicture(another);
showPicture({
    title: 'Hey',
    date: 'Yesterday',
    orientation: PhotoOrientation.Portrait
});
