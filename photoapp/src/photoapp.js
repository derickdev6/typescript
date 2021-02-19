"use strict";
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
exports.__esModule = true;
exports.Album = exports.Picture = exports.ImageType = exports.User = exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Sqare"] = 2] = "Sqare";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
    PhotoOrientation[PhotoOrientation["Default"] = 4] = "Default";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
var User = /** @class */ (function () {
    function User(id, username, ispro, firstName) {
        this.firstName = 'DefaultName';
        this.albums = [];
        this.id = id;
        this.username = username;
        this.ispro = ispro;
        if (firstName)
            this.firstName = firstName;
    }
    Object.defineProperty(User.prototype, "Id", {
        get: function () { return this.id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Username", {
        get: function () { return this.username; },
        set: function (value) { this.username = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Albums", {
        get: function () { return this.albums; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Ispro", {
        get: function () { return this.ispro; },
        set: function (value) { this.ispro = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "FirstName", {
        get: function () { return this.firstName; },
        set: function (value) { this.firstName = value; },
        enumerable: false,
        configurable: true
    });
    User.prototype.addAlbum = function (newalbum) {
        this.albums.push(newalbum);
    };
    return User;
}());
exports.User = User;
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
exports.ImageType = ImageType;
var Picture = /** @class */ (function (_super) {
    __extends(Picture, _super);
    function Picture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this.orientation = PhotoOrientation.Default;
        if (orientation)
            _this.orientation = orientation;
        return _this;
    }
    Object.defineProperty(Picture.prototype, "Orientation", {
        get: function () { return this.orientation; },
        set: function (value) { this.orientation = value; },
        enumerable: false,
        configurable: true
    });
    Picture.prototype.toString = function () {
        return "Picture - Title:" + this.title + " - Orientation:" + this.orientation + " - id:" + this.id;
    };
    Picture.Orientations = PhotoOrientation;
    return Picture;
}(ImageType));
exports.Picture = Picture;
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
        get: function () { return this.description; },
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
exports.Album = Album;
