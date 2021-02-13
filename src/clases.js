var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
})(PhotoOrientation || (PhotoOrientation = {}));
var Picture = /** @class */ (function () {
    //Constructor
    function Picture(id, title, orientation) {
        this.title = 'Default';
        this.orientation = PhotoOrientation.Default;
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Methods
    Picture.prototype.toString = function () {
        return "Picture - Title:" + this.title + " - Orientation:" + this.orientation + " - id:" + this.id;
    };
    return Picture;
}());
var Album = /** @class */ (function () {
    function Album(id, title, pictures, description) {
        this.title = 'Default';
        this.pictures = [];
        this.description = 'Default';
        this.id = id;
        this.title = title;
        this.description = description;
        this.pictures = pictures;
    }
    Album.prototype.toString = function () {
        return "Album - Title:" + this.title + " - Description:" + this.description + " - id:" + this.id;
    };
    Album.prototype.showPictures = function () {
        this.pictures.forEach(function (element) {
            console.log(element.toString);
        });
    };
    return Album;
}());
