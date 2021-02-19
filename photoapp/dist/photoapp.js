"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = exports.Picture = exports.ImageType = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
class User {
    constructor(id, username, ispro, firstName) {
        this.firstName = 'DefaultName';
        this.albums = [];
        this.id = id;
        this.username = username;
        this.ispro = ispro;
        if (firstName)
            this.firstName = firstName;
    }
    get Id() { return this.id; }
    get Username() { return this.username; }
    get Albums() { return this.albums; }
    get Ispro() { return this.ispro; }
    get FirstName() { return this.firstName; }
    set Ispro(value) { this.ispro = value; }
    set FirstName(value) { this.firstName = value; }
    set Username(value) { this.username = value; }
    addAlbum(newalbum) {
        this.albums.push(newalbum);
    }
}
exports.User = User;
class ImageType {
    constructor(id, title) {
        this.id = 0;
        this.title = 'Default';
        this.id = id;
        if (title)
            this.title = title;
    }
    get Id() { return this.id; }
    ;
    get Title() { return this.title; }
    ;
    set Title(value) { this.title = value; }
}
exports.ImageType = ImageType;
class Picture extends ImageType {
    constructor(id, title, orientation) {
        super(id, title);
        this.orientation = PhotoOrientation.Default;
        if (orientation)
            this.orientation = orientation;
    }
    get Orientation() { return this.orientation; }
    set Orientation(value) { this.orientation = value; }
    toString() {
        return `Picture - Title:${this.title} - Orientation:${this.orientation} - id:${this.id}`;
    }
}
exports.Picture = Picture;
Picture.Orientations = PhotoOrientation;
class Album extends ImageType {
    constructor(id, pictures, title, description) {
        super(id, title);
        this.description = 'Default';
        this.pictures = [];
        if (pictures)
            this.pictures = pictures;
        if (description)
            this.description = description;
    }
    get Description() { return this.description; }
    get Pictures() { return this.pictures; }
    set Description(value) { this.description = value; }
    set Pictures(value) { this.pictures = value; }
    toString() {
        return `Album - Title:${this.title} - Description:${this.description} - id:${this.id} \n\nThis are my pics:` + this.showPictures();
    }
    showPictures() {
        let list = '';
        this.pictures.forEach(element => {
            list += ('\n' + element.toString());
        });
        return list;
    }
    addPicture(newpic) {
        this.pictures.push(newpic);
    }
}
exports.Album = Album;
