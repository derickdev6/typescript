var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _id, _title, _orientation, _id_1, _pictures, _title_1, _description;
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
        //Properties
        _id.set(this, void 0);
        _title.set(this, 'Default');
        _orientation.set(this, PhotoOrientation.Default);
        __classPrivateFieldSet(this, _id, id);
        if (title)
            __classPrivateFieldSet(this, _title, title);
        if (orientation)
            __classPrivateFieldSet(this, _orientation, orientation);
    }
    Object.defineProperty(Picture.prototype, "Id", {
        //Getters
        get: function () { return __classPrivateFieldGet(this, _id); },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Picture.prototype, "Title", {
        get: function () { return __classPrivateFieldGet(this, _title); },
        //Setters
        set: function (value) {
            __classPrivateFieldSet(this, _title, value);
        },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Picture.prototype, "Orientation", {
        get: function () { return __classPrivateFieldGet(this, _orientation); },
        set: function (value) {
            __classPrivateFieldSet(this, _orientation, value);
        },
        enumerable: false,
        configurable: true
    });
    //Methods
    Picture.prototype.toString = function () {
        return "Picture - Title:" + __classPrivateFieldGet(this, _title) + " - Orientation:" + __classPrivateFieldGet(this, _orientation) + " - id:" + __classPrivateFieldGet(this, _id);
    };
    return Picture;
}());
_id = new WeakMap(), _title = new WeakMap(), _orientation = new WeakMap();
var Album = /** @class */ (function () {
    function Album(id, pictures, title, description) {
        _id_1.set(this, void 0);
        _pictures.set(this, []);
        _title_1.set(this, 'Default');
        _description.set(this, 'Default');
        __classPrivateFieldSet(this, _id_1, id);
        __classPrivateFieldSet(this, _pictures, pictures);
        if (title)
            __classPrivateFieldSet(this, _title_1, title);
        if (description)
            __classPrivateFieldSet(this, _description, description);
    }
    Object.defineProperty(Album.prototype, "Id", {
        //Getters
        get: function () { return __classPrivateFieldGet(this, _id_1); },
        //Setters
        set: function (value) { __classPrivateFieldSet(this, _id_1, value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "Title", {
        get: function () { return __classPrivateFieldGet(this, _title_1); },
        set: function (value) { __classPrivateFieldSet(this, _title_1, value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "Description", {
        get: function () { return __classPrivateFieldGet(this, _description); },
        set: function (value) { __classPrivateFieldSet(this, _description, value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Album.prototype, "Pictures", {
        get: function () { return __classPrivateFieldGet(this, _pictures); },
        set: function (value) { __classPrivateFieldSet(this, _pictures, value); },
        enumerable: false,
        configurable: true
    });
    Album.prototype.toString = function () {
        return "Album - Title:" + __classPrivateFieldGet(this, _title_1) + " - Description:" + __classPrivateFieldGet(this, _description) + " - id:" + __classPrivateFieldGet(this, _id_1);
    };
    Album.prototype.showPictures = function () {
        __classPrivateFieldGet(this, _pictures).forEach(function (element) {
            console.log(element.toString());
        });
    };
    Album.prototype.setDescription = function (newdescription) {
        __classPrivateFieldSet(this, _description, newdescription);
    };
    Album.prototype.addPicture = function (newpic) {
        __classPrivateFieldGet(this, _pictures).push(newpic);
    };
    return Album;
}());
_id_1 = new WeakMap(), _pictures = new WeakMap(), _title_1 = new WeakMap(), _description = new WeakMap();
// Accessing members
var myalbum = new Album(1, []);
var pic1 = new Picture(1);
var pic2 = new Picture(1, 'Picture number 2');
var pic3 = new Picture(1, undefined, PhotoOrientation.Panorama);
var pic4 = new Picture(1, 'Picture number 4', PhotoOrientation.Portrait);
myalbum.addPicture(pic1);
myalbum.addPicture(pic2);
myalbum.addPicture(pic3);
myalbum.addPicture(pic4);
myalbum.Description = 'Hey this is my album';
myalbum.Title = 'First almbum';
console.log(myalbum.toString());
myalbum.showPictures();
