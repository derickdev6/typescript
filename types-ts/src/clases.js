var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
})(PhotoOrientation || (PhotoOrientation = {}));
//Superclass
var ImageType = /** @class */ (function () {
    function ImageType(id, title) {
        this.id = 0;
        this.title = 'Default';
        this.id = id;
        if (title)
            this.title = title;
    }
    Object.defineProperty(ImageType.prototype, "Id", {
        get: function () { return this.id; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ImageType.prototype, "Title", {
        get: function () { return this.title; },
        set: function (value) { this.title = value; },
        enumerable: false,
        configurable: true
    });
    ;
    return ImageType;
}());
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    //Constructor
    function Picture(id, title, orientation) {
        var _this = 
        //Using superclass constructor
        _super.call(this, id, title) || this;
        //Properties
        _this.orientation = PhotoOrientation.Default;
        if (orientation)
            _this.orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "Orientation", {
        //Getters
        get: function () { return this.orientation; },
        //Setters
        set: function (value) { this.orientation = value; },
        enumerable: false,
        configurable: true
    });
    //Methods
    Picture.prototype.toString = function () {
        return "Picture - Title:" + this.title + " - Orientation:" + this.orientation + " - id:" + this.id;
    };
    Picture.Orientations = PhotoOrientation;
    return Picture;
}(ImageType));
var Album = /** @class */ (function (_super) {
    __extends(Album, _super);
    function Album(id, pictures, title, description) {
        var _this = _super.call(this, id, title) || this;
        _this.description = 'Default';
        _this.pictures = [];
        if (pictures)
            _this.pictures = pictures;
        if (description)
            _this.description = description;
        return _this;
    }
    Object.defineProperty(Album.prototype, "Description", {
        //Getters
        get: function () { return this.description; },
        //Setters
        set: function (value) { this.description = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "Pictures", {
        get: function () { return this.pictures; },
        set: function (value) { this.pictures = value; },
        enumerable: false,
        configurable: true
    });
    Album.prototype.toString = function () {
        return "Album - Title:" + this.title + " - Description:" + this.description + " - id:" + this.id + " \n\nThis are my pics:" + this.showPictures();
    };
    Album.prototype.showPictures = function () {
        var list = '';
        this.pictures.forEach(function (element) {
            list += ('\n' + element.toString());
        });
        return list;
    };
    Album.prototype.addPicture = function (newpic) {
        this.pictures.push(newpic);
    };
    return Album;
}(ImageType));
// Accessing members
var myalbum = new Album(1);
var pic1 = new Picture(1, 'Firstpic');
var pic2 = new Picture(2, undefined, PhotoOrientation.Landscape);
var pic3 = new Picture(3, 'HEYYY', Picture.Orientations.Panorama);
var pic4 = new Picture(4, 'LOLOLOL', Picture.Orientations.Portrait);
pic3.Title = 'HELLOOOOO';
myalbum.addPicture(pic1);
myalbum.addPicture(pic2);
myalbum.addPicture(pic3);
myalbum.addPicture(pic4);
myalbum.Title = 'FIRST album ever';
myalbum.Description = 'this is a description';
console.log(myalbum.toString());
console.log(myalbum);
